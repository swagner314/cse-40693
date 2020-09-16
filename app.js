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
    this.exampleVariable = '';

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