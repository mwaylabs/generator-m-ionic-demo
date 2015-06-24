'use strict';
angular.module('test')
.service('Test', function () {

  console.log('Hello from your Service: Test in module test');
  // TODO: do your service thing

  // some initial data
  this.someData = {
    binding: 'Yes! Got that databinding working'
  };

});
