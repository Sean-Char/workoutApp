angular.module('workOutApp')
.directive('navBarDirective', function() {
  return {
    templateUrl: './views/side-nav.html',
    restrict: 'EA',
    scope: {
      toggleLeft: '&',
      toggleRight: '&'
    },
    controller: function($scope){
      // $scope.toggleLeft = mainCtrl.toggleLeft
    }
  }
});
