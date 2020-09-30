var root = {
  templateUrl: './root.html'
};

angular
  .module('root')
  .component('root', root)/*
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('root', {
                url: '/',
                component: 'root'
            });
        $urlRouterProvider.otherwise('/');
    });*/