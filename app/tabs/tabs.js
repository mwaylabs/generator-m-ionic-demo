'use strict';
angular.module('tabs', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider) {

  console.log('Allo! Allo from your module: ' + 'tabs');

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl: 'tabs/templates/tabs.html'
    })
      .state('tabs.list', {
        url: '/list',
        views: {
          'tab-list': {
            templateUrl: 'tabs/templates/list.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      })
      .state('tabs.listDetail', {
        url: '/list/detail',
        views: {
          'tab-list': {
            templateUrl: 'tabs/templates/list-detail.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      })
      .state('tabs.debug', {
        url: '/debug',
        views: {
          'tab-debug': {
            templateUrl: 'tabs/templates/debug.html',
            controller: 'TabsDebugCtrl as ctrl'
          }
        }
    });
});
