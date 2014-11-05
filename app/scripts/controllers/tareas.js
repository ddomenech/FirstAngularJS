'use strict';

/**
 * @ngdoc function
 * @name tareasAsoinApp.controller:TareasCtrl
 * @description
 * # TareasCtrl
 * Controller of the tareasAsoinApp
 */
angular.module('tareasAsoinApp')
  .controller('TareasCtrl', function ($scope, $firebase) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var refTareas = new Firebase('https://tareasddp.firebaseio.com/tareas');
    //$scope.tareas = [{texto: 'Prevision Demanda', hecho: true, porcentaje: 100}, 
		//			{texto: 'Generacion Pedidos EDI', hecho: false, porcentaje: 0}];
    var sync = $firebase(refTareas);
    $scope.tareas = sync.$asArray();//$firebase(refTareas);
    //console.log($scope.tareas.$getIndex().length);

    $scope.agregarTarea= function() {
		/*$scope.tareas.push({texto: $scope.textoNuevaTarea, hecho: false, porcentaje: 0});
		$scope.textoNuevaTarea ='';*/
      $scope.tareas.$add({texto: $scope.textoNuevaTarea, hecho: false});
      $scope.textoNuevaTarea ='' ;
    }

    $scope.restantes = function() {
    //var tareasX = $scope.tareas.$asObject();  
		var cuenta = 0;
	 	angular.forEach($scope.tareas , function(tarea) {
			cuenta += tarea.hecho ? 0 : 1;
		});
		return cuenta;
    //  return $scope.tareas.length; //version firebase
    }

    $scope.eliminar = function() {
        var temptareas = $scope.tareas;
    		angular.forEach(temptareas, function(tarea) {
				if (tarea.hecho) $scope.tareas.$remove(tarea);
    		});
    }
  });
