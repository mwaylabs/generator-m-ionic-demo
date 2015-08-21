'use strict';

describe('module: main, controller: MyCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var MyCtrl;
  beforeEach(inject(function ($controller) {
    MyCtrl = $controller('MyCtrl');
  }));

  it('should do something', function () {
    expect(!!MyCtrl).toBe(true);
  });

});
