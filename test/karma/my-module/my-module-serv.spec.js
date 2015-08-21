'use strict';

describe('module: myModule, service: MyModule', function () {

  // load the service's module
  beforeEach(module('myModule'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var MyModule;
  var $timeout;
  beforeEach(inject(function (_MyModule_, _$timeout_) {
    MyModule = _MyModule_;
    $timeout = _$timeout_;
  }));

  describe('.changeBriefly()', function () {
    beforeEach(function () {
      MyModule.changeBriefly();
    });
    it('should briefly change', function () {
      expect(MyModule.someData.binding).toEqual('Yeah this was changed');
      $timeout.flush();
      expect(MyModule.someData.binding).toEqual('Yes! Got that databinding working');
    });
  });

});
