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
    'ngTouch',
    'firebase',
    'ui.bootstrap',
    'ui.date'
  ])
  .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
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
      .when('/empleados', {
        templateUrl: 'views/empleados.html',
        controller: 'EmpleadosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      }); 
     //$resourceProvider.defaults.stripTrailingSlashes=false;
      $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
      $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  }]).
    service('authState', function () {
        return {
            user: undefined
        };
    }).
    factory('api', function($resource){
        function add_auth_header(data, headersGetter){
            var headers = headersGetter();
            headers['Authorization'] = ('Basic ' + btoa(data.username +
                                        ':' + data.password));
        }
        return {
            auth: $resource('http://192.168.1.132:8000/api/auth\\/', {}, {
                login:  {method: 'POST', transformRequest: add_auth_header},
                logout: {method: 'DELETE'}
            }),
            users: $resource('http://192.168.1.132:8000/users\\/', {}, {
                create: {method: 'POST'}
            }),
            empleados: $resource('http://192.168.1.132:8000/empleados/:id') //, {}, {
                //list:   {method: 'GET', isArray:true},
                //create: {method: 'POST'},
                //detail: {method: 'GET', url: 'http://192.168.1.132:8000/empleados/:id'},
                //delete: {method: 'DELETE', url: 'http://192.168.1.132:8000/empleados/:id'}
            
        };
    });