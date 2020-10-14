const navbar = {
    templateUrl: './navbar.html',
    controller: 'NavbarController',
    bindings: {
        onUpdate: '&'
    }
}

angular
    .module('common.navbar')
    .component('navbar', navbar)