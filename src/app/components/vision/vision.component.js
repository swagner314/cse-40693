const vision = {
    templateUrl: './vision.html',
    controller: 'VisionController'
}

angular
    .module('components.vision')
    .component('vision', vision)
    .config(function($stateProvider){
        $stateProvider
            .state('vision', {
                url: '/vision',
                component: 'vision'
            });
    });