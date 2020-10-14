const authForm = {
    templateUrl: './auth-form.html',
    controller: 'AuthFormController',
    bindings: {
        user: '<',
        button: '@',
        message: '@',
        onSubmit: '&'
    }
}

angular
    .module('components.auth')
    .component('authForm', authForm);