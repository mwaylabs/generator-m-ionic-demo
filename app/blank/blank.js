'use strict';
angular.module('blank', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider) {

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('blank', {
      url: '/blank',
      template: '<ion-view view-title="blank"></ion-view>',
      // templateUrl: 'blank/templates/<someTemplate>.html',
      // controller: 'SomeCtrl as ctrl'
    });
});
