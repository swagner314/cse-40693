const authForm = {
    bindings: {
        user: '<',
        button: '@',
        message: '@',
        onSubmit: '&'
    },
    templateUrl: './auth-form',
    controller: 'AuthFormController'
}

angular
    .module('components.auth')
    .component('authForm', authForm);