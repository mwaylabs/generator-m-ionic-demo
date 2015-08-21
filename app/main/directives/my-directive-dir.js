'use strict';
angular.module('main')
.directive('myDirective', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink (scope, element, attrs) {
      element.text('this is the myDirective directive', attrs);
    }
  };
});
