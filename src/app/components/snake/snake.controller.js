function SnakeController($scope, SolutionsModel) {
    const $ctrl = this
    
    $ctrl.$onInit = () => {
        // 0: blank, 1: snake, 2: food
        $ctrl.colorCodes = {0: "#ffffff", 1: "#138015", 2: "#cc3939", 3: "#014703", 4: "#000000"}
        $ctrl.gameActive = false;
        $ctrl.scale = 50;
        $ctrl.fps = 12;
        $ctrl.canvas = document.getElementById("snake-canvas");
        
        $ctrl.ctx = $ctrl.canvas.getContext("2d");
        $ctrl.ctx.canvas.width = 1600; //Math.floor(window.innerWidth / $ctrl.scale) * $ctrl.scale;
        $ctrl.ctx.canvas.height = 850; //Math.floor((window.innerHeight - 100) / $ctrl.scale) * $ctrl.scale;
        $ctrl.board = Array.from(Array($ctrl.ctx.canvas.height / $ctrl.scale), () => new Array($ctrl.ctx.canvas.width / $ctrl.scale));
        for (let i = 0; i < $ctrl.board.length; i++) {
            for (let j = 0; j < $ctrl.board[0].length; j++) {
                $ctrl.board[i][j] = 0;
            }
        }
        // 0: up, 1: right, 2: down, 3: left
        $ctrl.vel = 1;
        $ctrl.snakeLocation = [[5,5], [4,5], [3,5], [2,5], [1,5]];
        $ctrl.snakeLocation.forEach((e) => {
            $ctrl.board[e[0]][e[1]] = 1
        })

        document.getElementById('snek').focus();

        addFood();
        drawBoard();
        
    }

    // End the game loop
    function lose() {
        if ($ctrl.snakeLocation.length + 1 >= 10) {
            SolutionsModel.getSnakeClue()
                .then(res => {
                    $ctrl.losingText1 = res;
                })
            document.getElementById('death').setAttribute("style", "text-align: center; margin: auto; margin-top: 20px; margin-bottom: 20px; border: 3px solid #00BEF0; border-radius: 8px; width: 400px; font-size: 50px; font-family: 'Long Cang', cursive; font-weight: bold; text-shadow: 2px 2px #00BEF0");
            clearInterval($ctrl.loop);
            return;
        }
        $ctrl.losingText1 = "You died!";
        $ctrl.losingText2 = "Score: " + ($ctrl.snakeLocation.length + 1) + "/200";
        $ctrl.losingText3 = "Space to restart";
        document.getElementById('death').setAttribute("style", "text-align: center; margin: auto; margin-top: 20px; margin-bottom: 20px; border: 3px solid #00BEF0; border-radius: 8px; width: 400px; font-size: 50px; font-family: 'Long Cang', cursive; font-weight: bold; text-shadow: 2px 2px #00BEF0");
        $scope.$apply();
        clearInterval($ctrl.loop);
    }

    // Take user input
    $scope.down = (e) => {
        if (!$ctrl.gameActive) {
            $ctrl.gameActive = true;
            // Start the game loop
            $ctrl.loop = setInterval(runSnake, 1000/$ctrl.fps);
        }
        let key = e.code;
        if (key == "ArrowUp")
            $ctrl.vel = 0;
        else if (key == "ArrowRight")
            $ctrl.vel = 1;
        else if (key == "ArrowDown")
            $ctrl.vel = 2;
        else if (key == "ArrowLeft")
            $ctrl.vel = 3;
        else if (key == "Space")
            restartGame();
    }

    function restartGame() {
        $ctrl.board = Array.from(Array($ctrl.ctx.canvas.height / $ctrl.scale), () => new Array($ctrl.ctx.canvas.width / $ctrl.scale));
        for (let i = 0; i < $ctrl.board.length; i++) {
            for (let j = 0; j < $ctrl.board[0].length; j++) {
                $ctrl.board[i][j] = 0;
            }
        }
        $ctrl.snakeLocation = [[5,5], [4,5], [3,5], [2,5], [1,5]];
        $ctrl.snakeLocation.forEach((e) => {
            $ctrl.board[e[0]][e[1]] = 1
        })
        $ctrl.gameActive = false;
        document.getElementById('death').setAttribute("style", "");
        $ctrl.losingText1 = "";
        $ctrl.losingText2 = "";
        $ctrl.losingText3 = "";

        addFood();
        drawBoard();
    }

    // Refresh the board by redrawing the canvas
    function drawBoard() {
        // Clear board
        $ctrl.ctx.clearRect(0, 0, $ctrl.canvas.width, $ctrl.canvas.height);
        // Draw new squares
        for (let i = 0; i < $ctrl.board.length; i++) {
            for (let j = 0; j < $ctrl.board[0].length; j++) {
                $ctrl.ctx.beginPath();
                $ctrl.ctx.rect($ctrl.scale * j, $ctrl.scale * i, $ctrl.scale, $ctrl.scale);
                $ctrl.ctx.fillStyle = $ctrl.colorCodes[$ctrl.board[i][j]];
                if (i == 0 || j == 0 || i == 16 || j == 31)
                    $ctrl.ctx.fillStyle = $ctrl.colorCodes[4];
                $ctrl.ctx.fill();
            }
        }
        $ctrl.ctx.beginPath();
        $ctrl.ctx.rect($ctrl.scale * $ctrl.snakeLocation[0][1], $ctrl.scale * $ctrl.snakeLocation[0][0], $ctrl.scale, $ctrl.scale);
        $ctrl.ctx.fillStyle = $ctrl.colorCodes[3];
        $ctrl.ctx.fill();
    }

    // Adds a new randomly placed piece of food
    function addFood() {
        while (true) {
            let row = Math.floor(Math.random() * Math.floor($ctrl.board.length-2)+1);
            let col = Math.floor(Math.random() * Math.floor($ctrl.board[0].length-2)+1);
            if ($ctrl.board[row][col] == 0) {
                $ctrl.board[row][col] = 2;
                return;
            }
        }
    }

    // Governs most of the logic for the snake game. Deals with encountering walls, another part of the snake, and food
    function moveSnake() {
        let moved = $ctrl.snakeLocation.pop();
        let prev = $ctrl.snakeLocation[0];
        switch ($ctrl.vel) {
            case 0: // up
                if (prev[0] == 1)
                    lose();
                if ($ctrl.board[prev[0]-1][prev[1]] == 1)
                    lose();
                if ($ctrl.board[prev[0]-1][prev[1]] == 2) {
                    $ctrl.snakeLocation.push($ctrl.snakeLocation[$ctrl.snakeLocation.length - 1])
                    $ctrl.snakeLocation.push($ctrl.snakeLocation[$ctrl.snakeLocation.length - 1])
                    $ctrl.snakeLocation.push($ctrl.snakeLocation[$ctrl.snakeLocation.length - 1])
                    addFood();
                }
                $ctrl.snakeLocation.unshift([prev[0]-1, prev[1]])
                break;
            case 1: // right
                if (prev[1] == 30)
                    lose();
                if ($ctrl.board[prev[0]][prev[1]+1] == 1)
                    lose();
                if ($ctrl.board[prev[0]][prev[1]+1] == 2) {
                    $ctrl.snakeLocation.push($ctrl.snakeLocation[$ctrl.snakeLocation.length - 1])
                    $ctrl.snakeLocation.push($ctrl.snakeLocation[$ctrl.snakeLocation.length - 1])
                    $ctrl.snakeLocation.push($ctrl.snakeLocation[$ctrl.snakeLocation.length - 1])
                    addFood();
                }
                $ctrl.snakeLocation.unshift([prev[0], prev[1]+1])
                break;
            case 2: // down
                if (prev[0] == 15)
                    lose();
                if ($ctrl.board[prev[0]+1][prev[1]] == 1)
                    lose();
                if ($ctrl.board[prev[0]+1][prev[1]] == 2) {
                    $ctrl.snakeLocation.push($ctrl.snakeLocation[$ctrl.snakeLocation.length - 1])
                    $ctrl.snakeLocation.push($ctrl.snakeLocation[$ctrl.snakeLocation.length - 1])
                    $ctrl.snakeLocation.push($ctrl.snakeLocation[$ctrl.snakeLocation.length - 1])
                    addFood();
                }
                $ctrl.snakeLocation.unshift([prev[0]+1, prev[1]])
                break;
            case 3: // left
                if (prev[1] == 1)
                    lose();
                if ($ctrl.board[prev[0]][prev[1]-1] == 1)
                    lose();
                if ($ctrl.board[prev[0]][prev[1]-1] == 2) {
                    $ctrl.snakeLocation.push($ctrl.snakeLocation[$ctrl.snakeLocation.length - 1])
                    $ctrl.snakeLocation.push($ctrl.snakeLocation[$ctrl.snakeLocation.length - 1])
                    $ctrl.snakeLocation.push($ctrl.snakeLocation[$ctrl.snakeLocation.length - 1])
                    addFood();
                }
                $ctrl.snakeLocation.unshift([prev[0], prev[1]-1])
                break;
        }
        for (let i = 0; i < $ctrl.board.length; i++) {
            for (let j = 0; j < $ctrl.board[0].length; j++) {
                if ($ctrl.board[i][j] == 1)
                    $ctrl.board[i][j] = 0;
            }
        }
        for (let k = 0; k < $ctrl.snakeLocation.length; k++) {
            let s = $ctrl.snakeLocation[k];
            $ctrl.board[s[0]][s[1]] = 1;
        }
    }

    // Initial startup of the snake game
    var runSnake = function runSnake() {
        moveSnake();
        drawBoard();
    }
}

angular
    .module('components.snake')
    .controller('SnakeController', SnakeController)