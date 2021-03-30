const portal = {
    templateUrl: './portal.html',
    controller: 'PortalController'
}

angular
    .module('components.portal')
    .component('portal', portal)
    .config(function($stateProvider){
        $stateProvider
            .state('portal', {
                url: '/portal',
                component: 'portal'
            });
    });