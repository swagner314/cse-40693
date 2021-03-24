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
                    localStorage.setItem(problem, solution);
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
        return this.getSolution(problem, localStorage.getItem(problem))
            .then(res => {
                console.log(res)
                if (res)
                    return true;
                else
                    return false;
            })
    }

    getSnakeClue() {
        var query = new Parse.Query(Parse.Object.extend('Solutions'));
        query.equalTo("Problem", 'snake');
        return query.find()
            .then(res => {
                console.log(res[0].attributes.Solution);
                return res[0].attributes.Solution;
            })
            .catch(err => {
                return "Sooo. I think you did it, but the server is derpy. Contact your local hunt admin for the next clue.";
            })
    }
}

angular
    .module('common')
    .service('SolutionsModel', SolutionsModel)