const puzzle2fruit = {
    templateUrl: './puzzle2-fruit.html',
    controller: 'Puzzle2fruitController',
    bindings: {
        fruit: '<',
        onUpdate: '&'
    }
}

angular.module('components.puzzle2').component('puzzle2fruit', puzzle2fruit)