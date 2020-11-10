function SnakeController() {
    const $ctrl = this
    $ctrl.gameActive = true;

    
    $ctrl.$onInit = () => {
        $ctrl.canvas = document.getElementById("snake-canvas");
        $ctrl.ctx = $ctrl.canvas.getContext("2d");

        setInterval(runSnake, 1000/60);
    }

    var runSnake = function runSnake() {
        console.log("Snake");
    }
}

angular
    .module('components.snake')
    .controller('SnakeController', SnakeController)