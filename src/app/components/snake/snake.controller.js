function SnakeController($scope) {
    const $ctrl = this
    
    $ctrl.$onInit = () => {
        // 0: blank, 1: snake, 2: food
        $ctrl.colorCodes = {0: "#ffffff", 1: "#138015", 2: "#cc3939"}
        $ctrl.gameActive = true;
        $ctrl.scale = 50;
        $ctrl.fps = 18;
        $ctrl.canvas = document.getElementById("snake-canvas");
        $ctrl.ctx = $ctrl.canvas.getContext("2d");
        $ctrl.ctx.canvas.width = Math.floor(window.innerWidth / $ctrl.scale) * $ctrl.scale;
        $ctrl.ctx.canvas.height = Math.floor((window.innerHeight - 100) / $ctrl.scale) * $ctrl.scale;
        $ctrl.board = Array.from(Array($ctrl.ctx.canvas.height / $ctrl.scale), () => new Array($ctrl.ctx.canvas.width / $ctrl.scale));
        for (let i = 0; i < $ctrl.board.length; i++) {
            for (let j = 0; j < $ctrl.board[0].length; j++) {
                $ctrl.board[i][j] = 0;
            }
        }
        // 0: up, 1: right, 2: down, 3: left
        $ctrl.vel = 1;
        $ctrl.snakeLocation = [[1,5], [2,5], [3,5], [4,5], [5,5]];
        $ctrl.snakeLocation.forEach((e) => {
            $ctrl.board[e[0]][e[1]] = 1
        })
        addFood();

        // Start the game loop
        $ctrl.loop = setInterval(runSnake, 1000/$ctrl.fps);
    }

    // End the game loop
    function lose() {
        clearInterval($ctrl.loop);
    }

    // Take user input
    $scope.down = (e) => {
        let key = e.code;
        if (key == "ArrowUp")
            $ctrl.vel = 0;
        else if (key == "ArrowRight")
            $ctrl.vel = 1;
        else if (key == "ArrowDown")
            $ctrl.vel = 2;
        else if (key == "ArrowLeft")
            $ctrl.vel = 3;
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
                $ctrl.ctx.fill();
            }
        }
    }

    // Adds a new randomly placed piece of food
    function addFood() {
        while (true) {
            let row = Math.floor(Math.random() * Math.floor($ctrl.board.length));
            let col = Math.floor(Math.random() * Math.floor($ctrl.board[0].length));
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
            case 0:
                if (prev[0] == 0)
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
            case 1:
                if (prev[1] == $ctrl.board[0].length)
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
            case 2:
                if (prev[0] == $ctrl.board.length)
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
            case 3:
                if (prev[1] == 0)
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