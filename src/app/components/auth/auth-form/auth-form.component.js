// component for authorization form
const authForm = {
    templateUrl: './auth-form.html',
    controller: 'AuthFormController',
    // data bindings
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