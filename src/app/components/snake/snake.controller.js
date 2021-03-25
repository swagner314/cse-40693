function SnakeController($scope, SolutionsModel) {
    const $ctrl = this
    
    $ctrl.$onInit = () => {
        $ctrl.a = {0: "#ffffff", 1: "#138015", 2: "#cc3939", 3: "#014703", 4: "#000000"}
        $ctrl.b = false;
        $ctrl.c = 50;
        $ctrl.d = 12;
        $ctrl.canvas = document.getElementById("sc");
        
        $ctrl.ctx = $ctrl.canvas.getContext("2d");
        $ctrl.ctx.canvas.width = 1600;
        $ctrl.ctx.canvas.height = 850;
        $ctrl.f = Array.from(Array($ctrl.ctx.canvas.height / $ctrl.c), () => new Array($ctrl.ctx.canvas.width / $ctrl.c));
        for (let i = 0; i < $ctrl.f.length; i++) {
            for (let j = 0; j < $ctrl.f[0].length; j++) {
                $ctrl.f[i][j] = 0;
            }
        }
        $ctrl.vel = 1;
        $ctrl.e = [[5,5], [4,5], [3,5], [2,5], [1,5]];
        $ctrl.e.forEach((e) => {
            $ctrl.f[e[0]][e[1]] = 1
        })

        document.getElementById('snek').focus();

        F();
        df();
        
    }

    function l() {
        if ($ctrl.e.length + 1 >= 10) {
            SolutionsModel.gsc()
                .then(res => {
                    $ctrl.l1 = res;
                })
            document.getElementById('dt').setAttribute("style", "text-align: center; margin: auto; margin-top: 20px; margin-bottom: 20px; border: 3px solid #00BEF0; border-radius: 8px; width: 400px; font-size: 50px; font-family: 'Long Cang', cursive; font-weight: bold; text-shadow: 2px 2px #00BEF0");
            clearInterval($ctrl.loop);
            return;
        }
        $ctrl.l1 = SolutionsModel.l1;
        $ctrl.l2 = SolutionsModel.l2 + ($ctrl.e.length + 1) + SolutionsModel.l4;
        $ctrl.l3 = SolutionsModel.l3;
        document.getElementById('dt').setAttribute("style", "text-align: center; margin: auto; margin-top: 20px; margin-bottom: 20px; border: 3px solid #00BEF0; border-radius: 8px; width: 400px; font-size: 50px; font-family: 'Long Cang', cursive; font-weight: bold; text-shadow: 2px 2px #00BEF0");
        $scope.$apply();
        clearInterval($ctrl.loop);
    }

    $scope.down = (e) => {
        if (!$ctrl.b) {
            $ctrl.b = true;
            $ctrl.loop = setInterval(S, 1000/$ctrl.d);
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
            r();
    }

    function r() {
        $ctrl.f = Array.from(Array($ctrl.ctx.canvas.height / $ctrl.c), () => new Array($ctrl.ctx.canvas.width / $ctrl.c));
        for (let i = 0; i < $ctrl.f.length; i++) {
            for (let j = 0; j < $ctrl.f[0].length; j++) {
                $ctrl.f[i][j] = 0;
            }
        }
        $ctrl.e = [[5,5], [4,5], [3,5], [2,5], [1,5]];
        $ctrl.e.forEach((e) => {
            $ctrl.f[e[0]][e[1]] = 1
        })
        $ctrl.b = false;
        document.getElementById('dt').setAttribute("style", "");
        $ctrl.l1 = "";
        $ctrl.l2 = "";
        $ctrl.l3 = "";

        F();
        df();
    }

    function df() {
        $ctrl.ctx.clearRect(0, 0, $ctrl.canvas.width, $ctrl.canvas.height);
        for (let i = 0; i < $ctrl.f.length; i++) {
            for (let j = 0; j < $ctrl.f[0].length; j++) {
                $ctrl.ctx.beginPath();
                $ctrl.ctx.rect($ctrl.c * j, $ctrl.c * i, $ctrl.c, $ctrl.c);
                $ctrl.ctx.fillStyle = $ctrl.a[$ctrl.f[i][j]];
                if (i == 0 || j == 0 || i == 16 || j == 31)
                    $ctrl.ctx.fillStyle = $ctrl.a[4];
                $ctrl.ctx.fill();
            }
        }
        $ctrl.ctx.beginPath();
        $ctrl.ctx.rect($ctrl.c * $ctrl.e[0][1], $ctrl.c * $ctrl.e[0][0], $ctrl.c, $ctrl.c);
        $ctrl.ctx.fillStyle = $ctrl.a[3];
        $ctrl.ctx.fill();
    }

    function F() {
        while (true) {
            let row = Math.floor(Math.random() * Math.floor($ctrl.f.length-2)+1);
            let col = Math.floor(Math.random() * Math.floor($ctrl.f[0].length-2)+1);
            if ($ctrl.f[row][col] == 0) {
                $ctrl.f[row][col] = 2;
                return;
            }
        }
    }

    function m() {
        let moved = $ctrl.e.pop();
        let prev = $ctrl.e[0];
        switch ($ctrl.vel) {
            case 0:
                if (prev[0] == 1)
                    l();
                if ($ctrl.f[prev[0]-1][prev[1]] == 1)
                    l();
                if ($ctrl.f[prev[0]-1][prev[1]] == 2) {
                    $ctrl.e.push($ctrl.e[$ctrl.e.length - 1])
                    $ctrl.e.push($ctrl.e[$ctrl.e.length - 1])
                    $ctrl.e.push($ctrl.e[$ctrl.e.length - 1])
                    F();
                }
                $ctrl.e.unshift([prev[0]-1, prev[1]])
                break;
            case 1:
                if (prev[1] == 30)
                    l();
                if ($ctrl.f[prev[0]][prev[1]+1] == 1)
                    l();
                if ($ctrl.f[prev[0]][prev[1]+1] == 2) {
                    $ctrl.e.push($ctrl.e[$ctrl.e.length - 1])
                    $ctrl.e.push($ctrl.e[$ctrl.e.length - 1])
                    $ctrl.e.push($ctrl.e[$ctrl.e.length - 1])
                    F();
                }
                $ctrl.e.unshift([prev[0], prev[1]+1])
                break;
            case 2:
                if (prev[0] == 15)
                    l();
                if ($ctrl.f[prev[0]+1][prev[1]] == 1)
                    l();
                if ($ctrl.f[prev[0]+1][prev[1]] == 2) {
                    $ctrl.e.push($ctrl.e[$ctrl.e.length - 1])
                    $ctrl.e.push($ctrl.e[$ctrl.e.length - 1])
                    $ctrl.e.push($ctrl.e[$ctrl.e.length - 1])
                    F();
                }
                $ctrl.e.unshift([prev[0]+1, prev[1]])
                break;
            case 3:
                if (prev[1] == 1)
                    l();
                if ($ctrl.f[prev[0]][prev[1]-1] == 1)
                    l();
                if ($ctrl.f[prev[0]][prev[1]-1] == 2) {
                    $ctrl.e.push($ctrl.e[$ctrl.e.length - 1])
                    $ctrl.e.push($ctrl.e[$ctrl.e.length - 1])
                    $ctrl.e.push($ctrl.e[$ctrl.e.length - 1])
                    F();
                }
                $ctrl.e.unshift([prev[0], prev[1]-1])
                break;
        }
        for (let i = 0; i < $ctrl.f.length; i++) {
            for (let j = 0; j < $ctrl.f[0].length; j++) {
                if ($ctrl.f[i][j] == 1)
                    $ctrl.f[i][j] = 0;
            }
        }
        for (let k = 0; k < $ctrl.e.length; k++) {
            let s = $ctrl.e[k];
            $ctrl.f[s[0]][s[1]] = 1;
        }
    }

    var S = function S() {
        m();
        df();
    }
}

angular
    .module('components.snake')
    .controller('SnakeController', SnakeController)