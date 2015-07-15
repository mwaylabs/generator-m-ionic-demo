'use strict';
angular.module('main')
.controller('DebugCtrl', function ($log, Main, Config) {

  // bind data from services
  this.someData = Main.someData;
  this.ENV = Config.ENV;
  this.BUILD = Config.BUILD;

  $log.log('Hello from your Controller: DebugCtrl in module main:. This is your controller:', this);

  this.password = {
    input: '', // by user
    strength: ''
  };
  this.grade = function () {
    var size = this.password.input.length;
    if (size > 8) {
      this.password.strength = 'strong';
    } else if (size > 3) {
      this.password.strength = 'medium';
    } else {
      this.password.strength = 'weak';
    }
  };
});
