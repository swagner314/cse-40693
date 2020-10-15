//const { stripLastPathElement } = require("@uirouter/angularjs");

// controller for signing up for an account
function RegisterController(AuthService, $state, $scope) {
    const $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.error = null;
        $ctrl.user = {
            username: '',
            email: '',
            password: ''
        }
    }

    $ctrl.createUser = function (event) {
        event = event['user'];
        AuthService.register(event)
            .then(success => {
                $ctrl.error = "";
                $state.go('puzzle2')
            })
            .catch(error => {
                $ctrl.error = "Could not create account";
                $scope.$apply();
            });
    }
}

angular
    .module('components.auth')
    .controller('RegisterController', RegisterController);