'use strict';

describe('module: myModule, controller: MyModuleMenuCtrl', function () {

  // load the controller's module
  beforeEach(module('myModule'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var MyModuleMenuCtrl;
  beforeEach(inject(function ($controller) {
    MyModuleMenuCtrl = $controller('MyModuleMenuCtrl');
  }));

  it('should do something', function () {
    expect(!!MyModuleMenuCtrl).toBe(true);
  });

});
