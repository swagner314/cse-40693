function Puzzle2Controller(GetData, SolutionsModel, $location) {
    const $ctrl = this
    
    GetData.getData('fruits.json').then(function (result) {
        $ctrl.fruits = result.data.values;
        console.log($ctrl.fruits)

    }, function (error){
        console.log(error);
    })

    this.hashCode = function(s){
        return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
    }

    this.checkAnswer = function () {
        var sol = "";
        for (var i = 0; i < $ctrl.fruits.length; i++) {
            for (var j = 0; j < $ctrl.fruits.length; j++) {
                if ($ctrl.fruits[j][0]-1 == i) {
                    sol += $ctrl.fruits[j][1][2];
                    break;
                }
            }
        }
        var successful = SolutionsModel.getSolution("foodHash", this.hashCode(sol))
            .then(res => {
                if (res) {
                    console.log("YES!")
                    $location.path('/snake');
                }
            })
    }

    this.sorterFunc = function (fruit) {
        console.log(fruit)
        return parseInt(fruit[0])
    }
    
    this.updateOrder = function (event) {
        var rank = parseInt(event.fruit)
        var inc = event.isIncreasing
        
        for (var i = 0; i < $ctrl.fruits.length; i++) {
            var curFruit = $ctrl.fruits[i]
            
            if (curFruit[0] == rank) {
                if (inc) {
                    if (curFruit[0] != 1) {
                        for (var j = 0; j < $ctrl.fruits.length; j++) {
                            var newFruit = $ctrl.fruits[j]
                            if (newFruit[0] == rank - 1) {
                                $ctrl.fruits[j][0] = rank
                            }
                        }
                        
                        $ctrl.fruits[i][0] = rank - 1
                    }
                }
                
                else {
                    if (curFruit[0] != $ctrl.fruits.length) {
                        for (var j = 0; j < $ctrl.fruits.length; j++) {
                            var newFruit = $ctrl.fruits[j]
                            if (newFruit[0] == rank + 1) {
                                $ctrl.fruits[j][0] = rank
                            }
                        }
                        
                        $ctrl.fruits[i][0] = rank + 1
                    }
                }
                
                break
            }
        }
    }
}

angular.module('components.puzzle2').controller('Puzzle2Controller', Puzzle2Controller)


/*--------------------- Puzzle2 Component ---------------------
const puzzle2 = {
    templateUrl: './puzzle2.html',
    controller: 'Puzzle2Controller'
}

angular.module('app').component('puzzle2', puzzle2)

angular.module('app').controller('Puzzle2Controller', ['GetData', function (GetData) {

}]);*/