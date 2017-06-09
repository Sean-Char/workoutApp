angular.module('workOutApp', ['ngMaterial', 'ui.router', 'ngSanitize'])

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: "../views/home.html"
    })
    .state('muscleGroup', {
      url: '/muscleGroup/:id',
      templateUrl: '/views/getMuscleTemplate.html',
      controller: 'getExerciseCat'
    })
    .state('exerciseDesc', {
      url: '/exerciseDesc/:name',
      templateUrl: '/views/exerciseDesc.html',
      controller: 'getExerciseDesCtrl'
    })
})
