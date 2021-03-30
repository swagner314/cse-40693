const snake2 = {
    templateUrl: './snake2.html',
    controller: 'Snake2Controller'
}

angular
    .module('components.snake2')
    .component('snake2', snake2)
    .config(function($stateProvider){
        $stateProvider
            .state('snake2', {
                url: '/snake2',
                component: 'snake2'
            });
    });