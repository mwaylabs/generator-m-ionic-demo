'use strict';

describe('module: myModule, controller: MyModuleDebugCtrl', function () {

  // load the controller's module
  beforeEach(module('myModule'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var MyModuleDebugCtrl;
  beforeEach(inject(function ($controller) {
    MyModuleDebugCtrl = $controller('MyModuleDebugCtrl');
  }));

  describe('.grade()', function () {

    it('should classify asd as weak', function () {
      MyModuleDebugCtrl.password.input = 'asd';
      MyModuleDebugCtrl.grade();
      expect(MyModuleDebugCtrl.password.strength).toEqual('weak');
    });

    it('should classify asdf as medium', function () {
      MyModuleDebugCtrl.password.input = 'asdf';
      MyModuleDebugCtrl.grade();
      expect(MyModuleDebugCtrl.password.strength).toEqual('medium');
    });

    it('should classify asdfasdfasdf as strong', function () {
      MyModuleDebugCtrl.password.input = 'asdfasdfasdf';
      MyModuleDebugCtrl.grade();
      expect(MyModuleDebugCtrl.password.strength).toEqual('strong');
    });
  });

});
