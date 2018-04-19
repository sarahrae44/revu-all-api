console.log('Front-end working');

var app = angular.module('reviewboard', []);

app.controller('mainController', ['$http', function($http) {
  this.message = "controller works";
  this.reviews = [];
  this.formdata = {};

  $http({
  method: 'GET',
  url: 'http://localhost:3000/reviews',
    }).then(function(response) {
      console.log(response);
      this.reviews = response.data;
      console.log(this.reviews);
    }.bind(this));

    this.processForm = function() {
    console.log('processForm function . . . ');
    console.log('Formdata: ', this.formdata);
    $http({
      method: 'POST',
      url: 'http://localhost:3000/reviews',
      data: this.formdata
    }).then(function(result) {
      console.log('Data from server: ', result);
      this.formdata = {};
      this.reviews.unshift(result.data);
    }.bind(this));
  } // end processForm

}]);
