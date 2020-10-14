function Puzzle1Controller(SongsModel) {
    const $ctrl = this
    
    // read data from songs.json
    /*GetData.getData('songs.json').then(function (result) {
        $ctrl.songs = result.data.values;
    }, function (error){
        console.log(error);
    })*/
    $ctrl.$onInit = () => {
        if (SongsModel.data != {})
            $ctrl.songs = SongsModel.data;
        SongsModel.getAllSongs().then(function (result) {
            $ctrl.songs = result;
        }, function (error){
            console.log(error);
        })
    }
}

angular.module('components.puzzle1').controller('Puzzle1Controller', ['SongsModel', Puzzle1Controller])