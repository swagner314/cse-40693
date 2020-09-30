const home = {
    templateUrl: './home.html',
    controller: 'HomeController'
}

angular
    .module('components.home')
    .component('home', home)
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){
        $locationProvider.hashPrefix('');
        $stateProvider
            .state('home', {
                url: '/',
                component: 'home'
            });
        $urlRouterProvider.otherwise('/');
    });