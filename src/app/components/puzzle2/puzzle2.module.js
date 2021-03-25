angular
    .module('components.puzzle2', [
        'ui.router'
    ])
    .run(function ($transitions, $state, SolutionsModel, $location) {
        // Redirect user to puzzle2 if they are trying to access snake game and haven't completed puzzle2
        $transitions.onStart({
            to: 'snake'
        }, function() {
            console.log(SolutionsModel.data)
            return SolutionsModel.solved('foodHash')
                .then(res => {
                        console.log(res);
                        if (!res)
                        return $state.target('home');
             })
        });
    });