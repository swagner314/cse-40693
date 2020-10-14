function Puzzle2Controller(GetData) {
    const $ctrl = this
    
    // read data from fruits.json
    GetData.getData('fruits.json').then(function (result) {
        $ctrl.fruits = result.data.values;
        console.log(JSON.stringify($ctrl.fruits))
    }, function (error){
        console.log(error);
    })
    
    // update the order of the fruits when an up or down arrow is clicked
    this.updateOrder = function (event) {
        var rank = event.fruit
        var inc = event.isIncreasing
        
        for (var i = 0; i < $ctrl.fruits.length; i++) {
            // current array of [rank, fruit_name]
            var curFruit = $ctrl.fruits[i]
            
            // if the passed in rank matches the current fruit's rank
            if (curFruit[0] == rank) {
                // if we are moving the current fruit up on the fruit list
                if (inc) {
                    if (curFruit[0] != 1) {
                        // increase rank of replacement fruit
                        for (var j = 0; j < $ctrl.fruits.length; j++) {
                            var newFruit = $ctrl.fruits[j]
                            if (newFruit[0] == rank - 1) {
                                $ctrl.fruits[j][0] = rank
                            }
                        }
                        
                        // decrease rank of clicked fruit
                        $ctrl.fruits[i][0] = rank - 1
                    }
                }
                
                // if we are moving the current fruit down on the fruit list
                else {
                    if (curFruit[0] != $ctrl.fruits.length) {
                        // decrease rank of replacement fruit
                        for (var j = 0; j < $ctrl.fruits.length; j++) {
                            var newFruit = $ctrl.fruits[j]
                            if (newFruit[0] == rank + 1) {
                                $ctrl.fruits[j][0] = rank
                            }
                        }
                        
                        // increase rank of clicked fruit
                        $ctrl.fruits[i][0] = rank + 1
                    }
                }
                
                // break because we have already found and dealt with the matching fruit
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