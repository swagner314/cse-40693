const puzzle1song = {
    templateUrl: './puzzle1-song.html',
    controller: 'Puzzle1songController',
    bindings: {
        song: '<'
    }
}

angular.module('components.puzzle1').component('puzzle1song', puzzle1song)