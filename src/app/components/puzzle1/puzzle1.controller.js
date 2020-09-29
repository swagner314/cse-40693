function Puzzle1Controller() {
    const $ctrl = this
    
    // read data from songs.json
    GetData.getData('./puzzle1/songs.json').then(function (result) {
        $ctrl.songs = result.data.values;
    }, function (error){
        console.log(error);
    })
}

angular.module('components.puzzle1').controller('Puzzle1Controller', Puzzle1Controller)