angular
    .module('components.puzzle2', [
        'ui.router'
    ])
    .run(function ($transitions, $state, SolutionsModel) {
        // Redirect user to puzzle2 if they are trying to access snake game and haven't completed puzzle2
        /*$transitions.onStart({
            to: 'snake'
        }, function() {
            if (!SolutionsModel.solved('fruit')) {
                return $state.target('home');
            }
        });*/
    });