'use strict';
angular.module('test', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider) {

  console.log('Allo! Allo from your module: ' + 'test');

  // some basic routing
  $stateProvider
    .state('test', {
      url: '/test',
      templateUrl: 'test/templates/test.html',
      controller: 'TestCtrl as ctrl'
    });
  // TODO: do your thing
});
