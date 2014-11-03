'use strict';

/**
 * @ngdoc function
 * @name tareasAsoinApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tareasAsoinApp
 */
angular.module('tareasAsoinApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.texto1 = {titulo: 'Directiva ', subtitulo:' AngularJs'};
	$scope.texto2 = {titulo: 'Otro codigo ', subtitulo:' Como parametro'};
  });
