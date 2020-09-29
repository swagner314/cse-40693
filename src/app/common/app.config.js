function init(ParseProvider) {
    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    Parse.initialize(
  'iHNfwPd1n3L8fYlZkWJnQopKKeb9Ib3XcvdTrC0o', // This is your Application ID
  'AIBNr6bwv2BMjI4lbcyfhzqnAGMAec2MMyXgRNi2' // This is your Javascript key
        );
}

angular.module('common').config(init)