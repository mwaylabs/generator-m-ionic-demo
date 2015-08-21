'use strict';

describe('module: main, service: MyService', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var MyService;
  beforeEach(inject(function (_MyService_) {
    MyService = _MyService_;
  }));

  it('should do something', function () {
    expect(!!MyService).toBe(true);
  });

});
