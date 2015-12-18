'use strict';

describe('module: sidemenu, service: Sidemenu', function () {

  // load the service's module
  beforeEach(module('sidemenu'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Sidemenu;
  var $timeout;
  beforeEach(inject(function (_Sidemenu_, _$timeout_) {
    Sidemenu = _Sidemenu_;
    $timeout = _$timeout_;
  }));

  describe('.changeBriefly()', function () {
    beforeEach(function () {
      Sidemenu.changeBriefly();
    });
    it('should briefly change', function () {
      expect(Sidemenu.someData.binding).toEqual('Yeah this was changed');
      $timeout.flush();
      expect(Sidemenu.someData.binding).toEqual('Yes! Got that databinding working');
    });
  });

});
