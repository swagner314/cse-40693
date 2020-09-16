angular.module('app', ['ngMaterial', 'ngMessages']);

/*--------------------- Home Component ---------------------*/
const navbar = {
    templateUrl: './navbar/navbar.html',
    controller: 'NavbarController'
}

// Home Component with Routing (Routed / Stateful)
angular.module('app').component('navbar', navbar);

// Home Controller with dependency injection using the array method
angular.module('app').controller('NavbarController', ['ExampleService', function (ExampleService) {
    this.exampleVariable = 'Test String';
    this.isActive = true;
    this.logoClr = 'white'
    console.log(this)
}]);
/*--------------------- Home Component ---------------------*/

/*--------------------- Settings Component ---------------------*/
const settings = {
    templateUrl: '',
    controller: 'SettingsController'
}

// Settings Component with Routing (Routed / Stateful)
angular.module('app').component('settings', settings)

// Settings Controller with dependency injection using $inject method
function SettingsController(ExampleService) {

}
SettingsController.$inject = ['ExampleService'];
angular.module('app').controller('SettingsController', SettingsController);
/*--------------------- Settings Component ---------------------*/

/*--------------------- Example Service ---------------------*/
function ExampleService($http) {
    this.getData = getData;
    
    function getData() {
        return $http({
            method: 'GET',
            url: 'data.json'
        })
    }
}
angular.module('app').service('ExampleService', ExampleService)
/*--------------------- Example Service ---------------------*/

