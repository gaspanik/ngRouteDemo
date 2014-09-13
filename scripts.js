(function() {
  'use strict';

  var app = angular.module('myApp', ['ngRoute']);

  app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    // $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
      })
      .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
      })
      .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'contactController'
      });
  });

  app.controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see my AngularJS.';
    $scope.$parent.cond = {
      pageTitle: '',
      pageDesc: 'Hello my Angular.'
    };
  });

  app.controller('aboutController', function($scope) {
    $scope.message = 'Hello, I am About Page.';
    $scope.$parent.cond = {
      pageTitle: '| About',
      pageDesc: 'Hello about page.'
    };
  });

  app.controller('contactController', function($scope) {
    $scope.message = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';
    $scope.$parent.cond = {
      pageTitle: '| Contact',
      pageDesc: 'Contact me.'
    };
  });

})();
