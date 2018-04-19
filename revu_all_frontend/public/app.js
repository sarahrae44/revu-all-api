console.log('Front-end working');

var app = angular.module('reviewboard', []);

app.controller('mainController', ['$http', function($http) {
  this.message = "controller works"

  $http({
  method: 'GET',
  url: 'http://localhost:3000/reviews',
    }).then(function(response) {
      console.log(response);
    });

}]);
