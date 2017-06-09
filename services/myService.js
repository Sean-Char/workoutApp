//----------------------------get Exercise Category-----------------------

angular.module('workOutApp').service('myService', function($http) {


var self = this;
this.exercises;
this.getExerciseCategory = function(id) {
  //console.log('https://wger.de/api/v2/exercise?language=2&id=' + id);
  return $http.get('https://wger.de/api/v2/exercise?language=2&category=' + id).then(function(exercise){
    self.exercises = exercise.data.results
    return exercise
  })
}


//---------------------------------get Image Services-------------------------------

this.getExerciseImg = function(id){
  return $http.get('https://wger.de/api/v2/exerciseimage/?exercise=' + id).then(function(response){
    return response.data.results.map(function(cur){
      console.log(cur);
      return cur.image;
    })
  })
}



});
