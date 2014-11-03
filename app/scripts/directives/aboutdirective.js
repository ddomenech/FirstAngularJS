'use strict';

/**
 * @ngdoc directive
 * @name tareasAsoinApp.directive:aboutdirective
 * @description
 * # aboutdirective
 */
angular.module('tareasAsoinApp')
  .directive('aboutDirective', function () {
return {
			restrict: 'E',
			scope: {
				textoVariable: '=texto'
			},
			templateUrl: 'views/mi-encabezado.html' 

		};
  });
