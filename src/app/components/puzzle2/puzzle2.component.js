const puzzle2 = {
    templateUrl: './puzzle2.html',
    controller: 'Puzzle2Controller'
}

angular
    .module('components.puzzle2')
    .component('puzzle2', puzzle2)
    .config(function($stateProvider){
        $stateProvider
            .state('puzzle2', {
                url: '/puzzle2',
                component: 'puzzle2'
            });
    });