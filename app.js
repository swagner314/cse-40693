angular.module('app', ['ngMaterial', 'ngMessages']);

/*--------------------- Home Component ---------------------*/
const home = {
    templateUrl: './home/home.html',
    controller: 'HomeController'
}

angular.module('app').component('home', home);

angular.module('app').controller('HomeController', [function () {
    this.currentTab = 'home'
    this.updateTab = function (event) {
        this.currentTab = event.tab
    }
}]);

/*--------------------- Welcome Component ---------------------*/
const welcome = {
    templateUrl: './welcome/welcome.html',
    controller: 'WelcomeController'
}

angular.module('app').component('welcome', welcome);

angular.module('app').controller('WelcomeController', ['GetData', function (GetData) {
    this.exampleVariable = 'welcome comp';
}]);

/*--------------------- Navbar Component ---------------------*/
const navbar = {
    templateUrl: './navbar/navbar.html',
    controller: 'NavbarController',
    bindings: {
        onUpdate: '&'
    }
}

angular.module('app').component('navbar', navbar);

angular.module('app').controller('NavbarController', [function () {
    this.over = false;
    this.activeTab = 'home';
    
    this.updateTab = function (tab) {
        this.activeTab = tab
        this.onUpdate({
            $event: {
                tab: tab
            }
        });
    }
}]);

/*--------------------- Puzzle1 Component ---------------------*/
const puzzle1 = {
    templateUrl: './puzzle1/puzzle1.html',
    controller: 'Puzzle1Controller'
}

angular.module('app').component('puzzle1', puzzle1)

angular.module('app').controller('Puzzle1Controller', ['GetData', function (GetData) {
    const $ctrl = this
    GetData.getData('./puzzle1/songs.json').then(function (result) {
        $ctrl.songs = result.data.values;
    }, function (error){
        console.log(error);
    })
}]);

/*--------------------- Puzzle1song Component ---------------------*/
const puzzle1song = {
    templateUrl: './puzzle1/puzzle1-song.html',
    controller: 'Puzzle1songController',
    bindings: {
        song: '<'
    }
}

angular.module('app').component('puzzle1song', puzzle1song)

angular.module('app').controller('Puzzle1songController', [function () {
    this.over = false;
}]);

/*--------------------- Puzzle2 Component ---------------------*/
const puzzle2 = {
    templateUrl: './puzzle2/puzzle2.html',
    controller: 'Puzzle2Controller'
}

angular.module('app').component('puzzle2', puzzle2)

angular.module('app').controller('Puzzle2Controller', ['GetData', function (GetData) {
    const $ctrl = this
    GetData.getData('./puzzle2/fruits.json').then(function (result) {
        $ctrl.fruits = result.data.values;
        console.log(JSON.stringify($ctrl.fruits))
    }, function (error){
        console.log(error);
    })
    
    this.updateOrder = function (event) {
        f = event.fruit
        inc = event.isIncreasing
        $ctrl.fruits.forEach(curFruit => {
            if (curFruit[0] == f) {
                console.log('same')
                if (inc) {
                    if (curFruit[1] != 1) {
                        // decrease rank #
                        // increase rank # of replacement
                    }
                }
                else {
                    if (curFruit[1] != $ctrl.fruits.length)
                        console.log('decrease, length: ', $ctrl.fruits.length)
                }
            }
        })
    }
}]);

/*--------------------- Puzzle2fruit Component ---------------------*/
const puzzle2fruit = {
    templateUrl: './puzzle2/puzzle2-fruit.html',
    controller: 'Puzzle2fruitController',
    bindings: {
        fruit: '<',
        onUpdate: '&'
    }
}

angular.module('app').component('puzzle2fruit', puzzle2fruit)

angular.module('app').controller('Puzzle2fruitController', ['GetData', function (GetData) {
    this.updateOrder = function (fruit, increasing) {
        this.onUpdate({
            $event: {
                fruit: fruit,
                isIncreasing: increasing
            }
        });
    }
}]);

/*--------------------- GetData Service ---------------------*/
function GetData($http) {
    this.getData = getData;
    
    function getData(file) {
        return $http({
            method: 'GET',
            url: file
        })
    }
}
angular.module('app').service('GetData', GetData)

/*--------------------- SwitchTab Service ---------------------
function SwitchTab() {
    this.setTab = setTab;
    this.curTab = 'home';
    
    function setTab(str) {
        this.curTab = str;
        return Promise.resolve(str);
    }
    
    function getTab() {
        return this.curTab;
    }
}
angular.module('app').service('SwitchTab', SwitchTab)*/