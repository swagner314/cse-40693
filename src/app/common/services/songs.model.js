class SongsModel {
    constructor(Parse) {
        this.Parse = Parse;
        this.name = 'Songs'; // class name
        this.fields = [
            'values'
        ];
        this.data = {}; // hold singular result of queries
        this.collection = []; // hold array results of queries
    }

    New(obj) {
        // creating a new Fruits parse object
        if (angular.isUndefined(obj)) {
            const parseObject = new this.Parse.Object(this.name)
            this.Parse.defineAttributes(parseObject, this.fields);
            return parseObject;
        }
        else {
            // exposing Fruits parse object attributes (getters and setters)
            this.Parse.defineAttributes(obj, this.fields);
            return obj;
        }
    }

    getById(id) {
        return new this.Parse.Query(this.New())
            .get(id)
            .then(result => {
                this.Parse.defineAttributes(result, this.fields);
                return Promise.resolve(result);
            })
            .catch(error => Promise.reject(error));
    }
}