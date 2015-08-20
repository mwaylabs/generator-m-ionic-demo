'use strict';
angular.module('side', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider) {

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('side', {
      url: '/side',
      abstract: true,
      templateUrl: 'side/templates/menu.html',
      controller: 'SideMenuCtrl as menu'
    })
      .state('side.list', {
        url: '/list',
        views: {
          'pageContent': {
            templateUrl: 'side/templates/list.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('side.listDetail', {
        url: '/list/detail',
        views: {
          'pageContent': {
            templateUrl: 'side/templates/list-detail.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('side.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'side/templates/debug.html',
            controller: 'SideDebugCtrl as ctrl'
          }
        }
      });
});
