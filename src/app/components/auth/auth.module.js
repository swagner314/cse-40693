angular
    .module('components.auth', [
        'ui.router'
    ])
    .run(function ($transitions, $state, AuthService) {
        // Redirect user to login if they are not authenticated and they are trying to access puzzle2
        $transitions.onStart({
            to: 'puzzle2'
        }, function() {
            if (!AuthService.isAuthenticated()) {
                return $state.target('auth.login');
            }
        });
        // Redirect user to puzzle2 if they are authenticated and they are tryin to access login/register
        $transitions.onStart({
          to: 'auth.*'
        }, function () {
          if (AuthService.isAuthenticated()) {
            return $state.target('puzzle2');
          }
        });
    });