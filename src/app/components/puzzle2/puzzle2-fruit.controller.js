function Puzzle2fruitController() {
    this.updateOrder = function (fruit, increasing) {
        this.onUpdate({
            $event: {
                fruit: fruit,
                isIncreasing: increasing
            }
        });
    }
}

angular.module('components.puzzle2').controller('Puzzle2fruitController', Puzzle2fruitController)