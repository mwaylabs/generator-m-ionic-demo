'use strict';
angular.module('side')
.controller('SideDebugCtrl', function ($log, Side, SideConfig, $cordovaDevice) {

  $log.log('Hello from your Controller: SideDebugCtrl in module side:. This is your controller:', this);

  // bind data from services
  this.someData = Side.someData;
  this.ENV = SideConfig.ENV;
  this.BUILD = SideConfig.BUILD;
  // get device info
  ionic.Platform.ready(function () {
    if (ionic.Platform.isWebView()) {
      this.device = $cordovaDevice.getDevice();
    }
  }.bind(this));

  // PASSWORD EXAMPLE
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
  this.grade();

});
