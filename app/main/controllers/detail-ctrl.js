'use strict';
angular.module('main')
.controller('DetailCtrl', function ($log, $cordovaDevice, $window, $ionicPopup) {

  $log.log('Hello from your Controller: DetailCtrl in module main:. This is your controller:', this);

  this.device = function () {
    $ionicPopup.alert({
      title: 'device',
      template: JSON.stringify($cordovaDevice.getDevice(), null, 2)
    });
  };

});
