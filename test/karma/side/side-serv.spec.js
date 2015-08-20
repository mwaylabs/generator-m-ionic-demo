'use strict';

describe('module: side, service: Side', function () {

  // load the service's module
  beforeEach(module('side'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Side;
  var $timeout;
  beforeEach(inject(function (_Side_, _$timeout_) {
    Side = _Side_;
    $timeout = _$timeout_;
  }));

  describe('.changeBriefly()', function () {
    beforeEach(function () {
      Side.changeBriefly();
    });
    it('should briefly change', function () {
      expect(Side.someData.binding).toEqual('Yeah this was changed');
      $timeout.flush();
      expect(Side.someData.binding).toEqual('Yes! Got that databinding working');
    });
  });

});
