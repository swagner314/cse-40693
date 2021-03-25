//const { stripLastPathElement } = require("@uirouter/angularjs");

// controller for logging in to an account
function LoginController(AuthService, $state, $scope) {
    const $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.user = {
            email: '',
            password: ''
        }
    }

    $ctrl.validateUser = function (event) {
        event = event['user'];
        AuthService.login(event)
            .then(success => {
                $ctrl.error = "";
                $state.go('puzzle2')
            })
            .catch(error => {
                $ctrl.error = "Lol no";
                $scope.$apply();
            });
        console.log()
    }
}

angular
    .module('components.auth')
    .controller('LoginController', LoginController);