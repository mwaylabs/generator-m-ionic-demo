'use strict';
angular.module('main')
.controller('MyCtrl', function ($log) {

  $log.log('Hello from your Controller: MyCtrl in module main:. This is your controller:', this);

});
