'use strict';

describe('Service: Main', function () {

  // load the service's module
  beforeEach(module('main'));
  beforeEach(module('myViews'));

  // instantiate service
  var Main;
  var $timeout;
  var $httpBackend;
  beforeEach(inject(function (_Main_, _$timeout_, _$httpBackend_) {
    Main = _Main_;
    $timeout = _$timeout_;
    $httpBackend = _$httpBackend_;

    // $httpBackend.whenGET('main/templates/debug.html').respond('<h1></h1>');
    // $httpBackend.expectGET('main/templates/debug.html');
    // $httpBackend.whenGET('main/templates/list-detail.html').respond('<h1></h1>');
    // $httpBackend.expectGET('main/templates/list-detail.html');
    // $httpBackend.whenGET('main/templates/list.html').respond('<h1></h1>');
    // $httpBackend.expectGET('main/templates/list.html');
    // $httpBackend.whenGET('main/templates/tabs.html').respond('<h1></h1>');
    // $httpBackend.expectGET('main/templates/tabs.html');
  }));

  it('should do something', function () {
    expect(!!Main).toBe(true);
  });

  describe('.changeBriefly()', function () {
    beforeEach(function () {
      Main.changeBriefly();
    });
    it('should briefly change', function () {
      expect(Main.someData.binding).toEqual('Yeah this was changed');
      $timeout.flush();
      expect(Main.someData.binding).toEqual('Yes! Got that databinding working');
    });
  });

});
