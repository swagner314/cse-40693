function AuthService() {
  // Local storage to keep track of user status
  var usr = null;
  var authData = null;

  // Clears the local storage of known logged in users
  function clearAuthData() {
    authData = null;
  }

  // Logs in user. Called from the auth.login form
  // Returns a promise.
  this.login = function (user) {
    var new_user = new Parse.User()
    new_user.set("password", user.password);
    new_user.set("email", user.email);
    new_user.set("username", user.username);
    return new_user.logIn()
      .then(function(u) {
        authData = u;
        usr = u;
        console.log("Successfully logged in with user: ", u);
        return Promise.resolve(u);
      }).catch(function(error) {
        console.log("Error logging in: ", error);
        return Promise.reject(error);
      });
  };

  // Registers user. Called from the auth.register form
  // Returns a promise.
  this.register = function (user) {
    var new_user = new Parse.User();
    new_user.set("username", user.username);
    new_user.set("password", user.password);
    new_user.set("email", user.email);
    return new_user.signUp()
      .then(function(u) {
        usr = u;
        console.log("user successfully created: ", u);
      }).catch(function(error) {
        console.log("Error signing up: ", error)
        return Promise.reject(error);
      });
  };

  // To be implemented in the future
  // this.logout = function () {
  //   return auth
  //     .$signOut()
  //     .then(clearAuthData);
  // };

  // Utility method to determine if the user is currently logged in
  // Returns a boolean
  this.isAuthenticated = function () {
    return usr && usr
    .authenticated();
  };
}

angular
  .module('components.auth')
  .service('AuthService', AuthService);