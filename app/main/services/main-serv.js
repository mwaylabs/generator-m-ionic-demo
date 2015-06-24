'use strict';
angular.module('main')
.service('Main', function () {

  console.log('Hello from your Service: Main in module main');
  // TODO: do your service thing

  // some initial data
  this.someData = {
    binding: 'Yes! Got that databinding working'
  };

});
