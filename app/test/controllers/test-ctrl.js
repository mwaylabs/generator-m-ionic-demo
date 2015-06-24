'use strict';
angular.module('test')
.controller('TestCtrl', function (Test, TestConfig) {

  // bind data from service
  this.someData = Test.someData;
  this.ENV = TestConfig.ENV;
  this.BUILD = TestConfig.BUILD;

  console.log('Hello from your Controller: TestCtrl in module test:. This is your controller:', this);
  // TODO: do your controller thing

});
