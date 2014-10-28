'use strict';

/**
 * @ngdoc function
 * @name tareasAsoinApp.controller:TareasCtrl
 * @description
 * # TareasCtrl
 * Controller of the tareasAsoinApp
 */
angular.module('tareasAsoinApp')
  .controller('TareasCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.tareas = [{texto: 'Prevision Demanda', hecho: true, porcentaje: 100}, 
					{texto: 'Generacion Pedidos EDI', hecho: false, porcentaje: 0}];

    $scope.agregarTarea= function() {
		$scope.tareas.push({texto: $scope.textoNuevaTarea, hecho: false, porcentaje: 0});
		$scope.textoNuevaTarea ='';
    };

    $scope.restantes = function() {
		var cuenta = 0;
	 	angular.forEach($scope.tareas , function(tarea) {
			cuenta += tarea.hecho ? 0 : 1;
		});
		return cuenta;
    };

    $scope.eliminar = function() {
    	var tareasTemp = $scope.tareas;
    		$scope.tareas = [];    		
    		angular.forEach(tareasTemp, function(tarea) {
				if (!tarea.hecho) $scope.tareas.push(tarea);
    		});
    };
  });
