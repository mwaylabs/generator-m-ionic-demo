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
      template: '<ion-view view-title="Test"></ion-view>',
      // templateUrl: 'test/templates/<someTemplate>.html',
      // controller: 'SomeCtrl as ctrl'
    });
});
