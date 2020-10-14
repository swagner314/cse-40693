const puzzle2fruit = {
    templateUrl: './puzzle2-fruit.html',
    controller: 'Puzzle2fruitController',
    bindings: {
        fruit: '<',
        onUpdate: '&'
    }
}

angular
    .module('components.puzzle2')
    .component('puzzle2fruit', puzzle2fruit)
    .config(function($stateProvider){
        $stateProvider
            .state('fruit', {
                parent: 'puzzle2',
                url: '/fruit',
                component: 'puzzle2fruit'
            });
    });