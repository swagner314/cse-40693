function HomeController() {
    //const $ctrl = this;
    this.currentTab = 'home'
    this.updateTab = function (event) {
        this.currentTab = event.tab
    }
}

angular
    .module('components.home')
    .controller('HomeController', HomeController)
    .config(function($stateProvider){
        $stateProvider
            .state('home', {
                url: '/home',
                component: 'home'
            });
    });