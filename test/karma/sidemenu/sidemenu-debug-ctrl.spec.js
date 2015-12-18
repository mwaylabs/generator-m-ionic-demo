'use strict';

describe('module: sidemenu, controller: SidemenuDebugCtrl', function () {

  // load the controller's module
  beforeEach(module('sidemenu'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var SidemenuDebugCtrl;
  beforeEach(inject(function ($controller) {
    SidemenuDebugCtrl = $controller('SidemenuDebugCtrl');
  }));

  describe('.grade()', function () {

    it('should classify asd as weak', function () {
      SidemenuDebugCtrl.password.input = 'asd';
      SidemenuDebugCtrl.grade();
      expect(SidemenuDebugCtrl.password.strength).toEqual('weak');
    });

    it('should classify asdf as medium', function () {
      SidemenuDebugCtrl.password.input = 'asdf';
      SidemenuDebugCtrl.grade();
      expect(SidemenuDebugCtrl.password.strength).toEqual('medium');
    });

    it('should classify asdfasdfasdf as strong', function () {
      SidemenuDebugCtrl.password.input = 'asdfasdfasdf';
      SidemenuDebugCtrl.grade();
      expect(SidemenuDebugCtrl.password.strength).toEqual('strong');
    });
  });

});
