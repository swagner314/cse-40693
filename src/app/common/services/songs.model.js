class SongsModel {
    constructor(Parse) {
        this.Parse = Parse;
        this.name = 'Songs'; // class name
        this.fields = [
            'title',
            'artist',
            'year',
            'order'
        ];
        this.data = {}; // hold singular result of queries
        this.collection = []; // hold array results of queries
    }

    getAllSongs() {
        return new this.Parse.Query(Parse.Object.extend('Songs'))
            .find()
            .then( (results) => {
                this.data = results;
                return Promise.resolve(results);
            })
            .catch(error => Promise.reject(error));
    }
}

angular
    .module('common')
    .service('SongsModel', SongsModel)