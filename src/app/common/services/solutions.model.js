class SolutionsModel {
    constructor(Parse) {
        this.Parse = Parse;
        this.name = 'Solutions'; // class name
        this.fields = [
            //'values'
        ];
        this.data = {};
        this.l1 = "YOU DIED!";
        this.l4 = "/175";
        this.l2 = "Score: ";
        this.l3 = "Space to restart";
        this.l11 = "YOU DIED!";
        this.l44 = "/200";
        this.l22 = "Score: ";
        this.l33 = "Space to restart";
    }

    getSolution(problem, solution) {
        var query = new Parse.Query(Parse.Object.extend('Solutions'));
        query.equalTo("Problem", problem);
        return query.find()
            .then(res => {
                if (solution == res[0].attributes.Solution) {
                    this.data[problem] = true;
                    localStorage.setItem(problem, solution);
                    return true;
                }
                return false;
            })
            .catch(err => {
                return false;
            })
    }

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

    gsc() {
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

    gsc2() {
        var query = new Parse.Query(Parse.Object.extend('Solutions'));
        query.equalTo("Problem", 'snake2');
        return query.find()
            .then(res => {
                console.log(res[0].attributes.Solution);
                return res[0].attributes.Solution;
            })
            .catch(err => {
                return "Sooo. I think you did it, but the server is derpy. Contact your local hunt admin for the next clue.";
            })
    }

    gv() {
        var query = new Parse.Query(Parse.Object.extend('Solutions'));
        query.equalTo("Problem", 'v');
        return query.find()
            .then(res => {
                console.log(res[0].attributes.Solution);
                return res[0].attributes.Solution;
            })
            .catch(err => {
                return "Sooo. I think you did it, but the server is derpy. Contact your local hunt admin for the next clue.";
            })
    }

    pl() {
        var query = new Parse.Query(Parse.Object.extend('Solutions'));
        query.equalTo("Problem", 'p');
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