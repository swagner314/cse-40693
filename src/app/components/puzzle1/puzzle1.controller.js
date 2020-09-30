function Puzzle1Controller(GetData) {
    const $ctrl = this
    
    // read data from songs.json
    GetData.getData('songs.json').then(function (result) {
        $ctrl.songs = result.data.values;
    }, function (error){
        console.log(error);
    })
}

angular.module('components.puzzle1').controller('Puzzle1Controller', Puzzle1Controller)