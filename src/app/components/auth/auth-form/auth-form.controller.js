// controller for the authorization form
function AuthFormController() {
    const $ctrl = this;

    $ctrl.$onInit = function() {
        // a flag for the form knowing if it's register or sign in page
        $ctrl.isRegister = ($ctrl.button === 'Create Account') ? true : false
    }

    $ctrl.$onChanges = function(changes) {
        if(changes.user) {
            $ctrl.user = angular.copy($ctrl.user);
        }
    };

    $ctrl.submitForm = function() {
        console.log("user: ", $ctrl.user);
        $ctrl.onSubmit({
            $event: {
                user: $ctrl.user
            }
        });
    };
}

angular
    .module('components.auth')
    .controller('AuthFormController', AuthFormController);