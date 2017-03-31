'use strict';
angular.module('main')
.component('mini', {
  templateUrl: 'main/components/mini/mini-component.html',
  restrict: 'EA',
  transclude: true,
  bindings: {
    content: '=',
  },
  controllerAs: 'ctrl',
  controller: function (
    $scope,
    $state
  ) {
    this.currentState = $state.current.name;
  }
});
