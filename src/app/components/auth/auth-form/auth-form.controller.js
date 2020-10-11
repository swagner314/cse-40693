function AuthFormController() {
    const $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.isRegister = ($ctr.button === 'Create Account') ? true : false
    }
}