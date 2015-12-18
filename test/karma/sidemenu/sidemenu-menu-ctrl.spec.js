'use strict';

describe('module: sidemenu, controller: SidemenuMenuCtrl', function () {

  // load the controller's module
  beforeEach(module('sidemenu'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var SidemenuMenuCtrl;
  beforeEach(inject(function ($controller) {
    SidemenuMenuCtrl = $controller('SidemenuMenuCtrl');
  }));

  it('should do something', function () {
    expect(!!SidemenuMenuCtrl).toBe(true);
  });

});
