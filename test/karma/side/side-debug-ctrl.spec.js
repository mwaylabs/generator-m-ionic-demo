'use strict';

describe('module: side, controller: SideDebugCtrl', function () {

  // load the controller's module
  beforeEach(module('side'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var SideDebugCtrl;
  beforeEach(inject(function ($controller) {
    SideDebugCtrl = $controller('SideDebugCtrl');
  }));

  describe('.grade()', function () {

    it('should classify asd as weak', function () {
      SideDebugCtrl.password.input = 'asd';
      SideDebugCtrl.grade();
      expect(SideDebugCtrl.password.strength).toEqual('weak');
    });

    it('should classify asdf as medium', function () {
      SideDebugCtrl.password.input = 'asdf';
      SideDebugCtrl.grade();
      expect(SideDebugCtrl.password.strength).toEqual('medium');
    });

    it('should classify asdfasdfasdf as strong', function () {
      SideDebugCtrl.password.input = 'asdfasdfasdf';
      SideDebugCtrl.grade();
      expect(SideDebugCtrl.password.strength).toEqual('strong');
    });
  });

});
