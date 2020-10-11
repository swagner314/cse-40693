const { stripLastPathElement } = require("@uirouter/angularjs");

function LoginController() {
    const $ctrl = this;

    $ctrl.$onInit = function() {
        ctrl.user = {
            name: '',
            email: '',
            password: ''
        }

        $ctrl.loginUser = function (event) {

        }
    }
}

angular
    .module('components.auth')
    .controller('LoginController', LoginController);