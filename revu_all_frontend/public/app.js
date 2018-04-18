console.log('Front-end working');

var app = angular.module('reviewboard', []);

app.controller('mainController', ['$http', function($http) {
  this.message = "controller works"
}]);
