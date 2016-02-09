'use strict';

/**
 * @ngdoc overview
 * @name project1App
 * @description
 * # project1App
 *
 * Main module of the application.
 */
angular
  .module('project1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/git', {
        templateUrl: 'views/git.html',
        controller: 'GitCtrl',
        controllerAs: 'git'
      })
      .when('/yeoman', {
        templateUrl: 'views/yeoman.html',
        controller: 'YeomanCtrl',
        controllerAs: 'yeoman'
      })
      .when('/github', {
        templateUrl: 'views/github.html',
        controller: 'GitHubCtrl',
        controllerAs: 'github'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
