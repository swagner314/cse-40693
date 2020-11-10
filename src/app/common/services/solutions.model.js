class SolutionsModel {
    constructor(Parse) {
        this.Parse = Parse;
        this.name = 'Solutions'; // class name
        this.fields = [
            //'values'
        ];
        this.data = {};
    }

    getSolution(problem, solution) {
        var query = new Parse.Query(Parse.Object.extend('Solutions'));
        query.equalTo("Problem", problem);
        return query.find()
            .then(res => {
                if (solution == res[0].attributes.Solution) {
                    this.data[problem] = true;
                    return true;
                }
                return false;
                //return (solution == res[0].attributes.Solution);
            })
            .catch(err => {
                return false;
            })
    }

    solved(problem) {
        if (this.data[problem])
            return true;
        return false;
    }
}

angular
    .module('common')
    .service('SolutionsModel', SolutionsModel)