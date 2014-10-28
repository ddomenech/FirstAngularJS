'use strict';

/**
 * @ngdoc overview
 * @name tareasAsoinApp
 * @description
 * # tareasAsoinApp
 *
 * Main module of the application.
 */
angular
  .module('tareasAsoinApp', [
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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/tareas', {
        templateUrl: 'views/tareas.html',
        controller: 'TareasCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
