'use strict';
angular.module('main')
.filter('myFilter', function () {
  return function (input) {
    return 'myFilter filter: ' + input;
  };
});
