const home = {
    templateUrl: './home.html',
    controller: 'HomeController'
}

angular
    .module('components.home')
    .component('home', home)
    .config(function($stateProvider){
        $stateProvider
            .state('home', {
                url: '/home',
                component: 'home',
                //resolve: {
                //    deals: function(DealModel)
                //}
            });
    });