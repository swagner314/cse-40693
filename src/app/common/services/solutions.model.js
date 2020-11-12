class SolutionsModel {
    constructor(Parse) {
        this.Parse = Parse;
        this.name = 'Solutions'; // class name
        this.fields = [
            //'values'
        ];
        this.data = {};
    }

    // Queries the database for the given problems solution, and returns whether or not it was correctly solved
    getSolution(problem, solution) {
        var query = new Parse.Query(Parse.Object.extend('Solutions'));
        query.equalTo("Problem", problem);
        return query.find()
            .then(res => {
                // cache result so user only has to solve puzzle once
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

    // Utility method for determining if a user has unlocked a puzzle or pathway
    solved(problem) {
        if (this.data[problem])
            return true;
        return false;
    }
}

angular
    .module('common')
    .service('SolutionsModel', SolutionsModel)