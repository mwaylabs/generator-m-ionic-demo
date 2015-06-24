'use strict';
angular.module('main')
.controller('MainCtrl', function (Main, Config) {

  // bind data from service
  this.someData = Main.someData;
  this.ENV = Config.ENV;
  this.BUILD = Config.BUILD;

  console.log('Hello from your Controller: MainCtrl in module main:. This is your controller:', this);
  // TODO: do your controller thing

});
