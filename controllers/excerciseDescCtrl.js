angular.module('workOutApp')

.controller('getExerciseDesCtrl', function($scope, $stateParams, myService, $sanitize) {
    $scope.exercise = myService.exercises.find(function(cur){
      return cur.name === $stateParams.name;
    })
    console.log($scope.exercise);
    myService.getExerciseImg($scope.exercise.id).then(function(imgArr){
      console.log(imgArr);
      $scope.exerciseImg = imgArr;
    })



})
