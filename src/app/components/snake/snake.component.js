const snake = {
    templateUrl: './snake.html',
    controller: 'SnakeController'
}

angular
    .module('components.snake')
    .component('snake', snake)
    .config(function($stateProvider){
        $stateProvider
            .state('snake', {
                url: '/snake',
                component: 'snake'
            });
    });