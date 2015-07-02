'use strict';
angular.module('side')
.controller('SideDebugCtrl', function (Side, SideConfig) {

  // bind data from services
  this.someData = Side.someData;
  this.ENV = SideConfig.ENV;
  this.BUILD = SideConfig.BUILD;

  console.log('Hello from your Controller: SideDebugCtrl in module side:. This is your controller:', this);
  // TODO: do your controller thing

});
