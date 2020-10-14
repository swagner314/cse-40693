const puzzle1 = {
    templateUrl: './puzzle1.html',
    controller: 'Puzzle1Controller'
}

angular
    .module('components.puzzle1')
    .component('puzzle1', puzzle1)
    .config(function($stateProvider){
        $stateProvider
            .state('puzzle1', {
                url: '/puzzle1',
                component: 'puzzle1'
                /*resolve: {
                    songs: function (SongsModel) {
                        console.log(SongsModel.getAllSongs());
                        return SongsModel.getAllSongs();
                        /*if (!SongsModel.data)
                            return SongsModel.getAllSongs();
                        else
                            return SongsModel.data;
                    }
                } */
            });
    });