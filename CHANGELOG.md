# 0.6.0
- Added cypress testing for registration, logging in, puzzle2 solving, and routing
- Added database-side checking for solution to puzzle2, which redirects user when solved correctly
- Added restrictions on page routing, so you must be logged in to submit puzzle 2, and you must have solved puzzle 2 to play the snake game
- Added a javascript snake game which the user is redirected to after they solve puzzle2

# 0.5.0
- Added authorization utilizing Parse
- When trying to access pages that allow the changing of data, like Puzzle 2, the user will not be allowed to access the page unless logged in

# 0.4.0
- Refactored the app's file structure
- Added gulp.js as the build system
- Added routing
- Added parsing

# 0.3.0
- Added data and event bindings
- Added multiple controllers
- Added templates in separate page files
- Added reading from and writing to JSON files
- Added custom service for data methods with $http
- Added user interaction with component 
