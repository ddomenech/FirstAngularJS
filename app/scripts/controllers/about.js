'use strict';

/**
 * @ngdoc function
 * @name tareasAsoinApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tareasAsoinApp
 */
var miapp = angular.module('tareasAsoinApp');
  miapp.controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.visible = true;
    $scope.texto1 = {titulo: 'Directiva ', subtitulo:' AngularJs'};
	$scope.texto2 = {titulo: 'Otro codigo ', subtitulo:' Como parametro'};
  });
  
  miapp.animation('.animar', function() {
	return {
		leave: function(element, done) {
			element.text('Adios!');
			element.addClass('difuminar');
			done();
		},
		enter: function(element, done) {
			element.text('Hola!');
			element.addClass('difuminar');
			done();
		}
	}

  }); 
