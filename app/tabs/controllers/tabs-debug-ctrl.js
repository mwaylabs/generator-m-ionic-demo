'use strict';
angular.module('tabs')
.controller('TabsDebugCtrl', function (Tabs, TabsConfig) {

  // bind data from services
  this.someData = Tabs.someData;
  this.ENV = TabsConfig.ENV;
  this.BUILD = TabsConfig.BUILD;

  console.log('Hello from your Controller: TabsDebugCtrl in module tabs:. This is your controller:', this);
  // TODO: do your controller thing

});
