'use strict';

describe('module: side, controller: SideMenuCtrl', function () {

  // load the controller's module
  beforeEach(module('side'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var SideMenuCtrl;
  beforeEach(inject(function ($controller) {
    SideMenuCtrl = $controller('SideMenuCtrl');
  }));

  it('should do something', function () {
    expect(!!SideMenuCtrl).toBe(true);
  });

});
