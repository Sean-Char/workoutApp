angular.module('workOutApp')

.controller('getExerciseCat', function($scope, $stateParams, myService, $sanitize) {
  myService.getExerciseCategory($stateParams.id).then(function(res){
    $scope.exercises = res.data.results;

  })


})
