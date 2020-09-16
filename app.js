angular.module('app', ['ngMaterial', 'ngMessages']);

/*--------------------- Home Component ---------------------*/
const home = {
    templateUrl: './home/home.html',
    controller: 'HomeController'
}

angular.module('app').component('home', home);

angular.module('app').controller('HomeController', ['GetData', '$scope', '$timeout', function (GetData, $scope, $timeout) {
    $scope.currentTab = 'home';
    $scope.$on("changedTab", function(event, newTab){
        $timeout(function() {
            $scope.currentTab = newTab;
        })
    });
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
    controller: 'NavbarController'
}

angular.module('app').component('navbar', navbar);

angular.module('app').controller('NavbarController', ['$rootScope', function ($rootScope) {
    this.over = false;
    this.activeTab = 'home';
    
    this.changeTab = function (str) {
        $rootScope.$broadcast('changedTab', str);
        this.activeTab = str;
    }
}]);

/*--------------------- Puzzle1 Component ---------------------*/
const puzzle1 = {
    templateUrl: './puzzle1/puzzle1.html',
    controller: 'Puzzle1Controller'
}

angular.module('app').component('puzzle1', puzzle1)

angular.module('app').controller('Puzzle1Controller', ['GetData', function (GetData) {
    this.exampleVariable = '';
}]);

/*--------------------- Puzzle2 Component ---------------------*/
const puzzle2 = {
    templateUrl: './puzzle2/puzzle2.html',
    controller: 'Puzzle2Controller'
}

angular.module('app').component('puzzle2', puzzle2)

angular.module('app').controller('Puzzle2Controller', ['GetData', function (GetData) {
    this.exampleVariable = '';
}]);

/*--------------------- GetData Service ---------------------*/
function GetData($http) {
    this.getData = getData;
    
    function getData() {
        return $http({
            method: 'GET',
            url: 'data.json'
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