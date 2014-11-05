'use strict';

/**
 * @ngdoc function
 * @name tareasAsoinApp.controller:EmpleadosCtrl
 * @description
 * # EmpleadosCtrl
 * Controller of the tareasAsoinApp
 */
angular.module('tareasAsoinApp')
  .controller('EmpleadosCtrl', ['$scope', '$modal', '$firebase', 
  	function ($scope, $modal, $firebase) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var refEmpleados = new Firebase("https://tareasddp.firebaseio.com/empleados")
    var syncFireEmp = $firebase(refEmpleados);
    $scope.empleados = syncFireEmp.$asArray();
    
	$scope.limpiar = function(){
		var nextid = 0;
		nextid = $scope.empleados.length;
		$scope.empleado = {
		id: nextid+1, 
		nombre: '', 
		apellidos: '', 
		fecha: null,	
		salario: 0, 
		telefono: 0,
		tipo: '',
		activo: false
		}
	}
	$scope.crear = function(){
		$scope.limpiar();
		$scope.abrir();
	}
	$scope.actualizar = function(id){
		$scope.abrir(id);
	}

	$scope.abrir= function(id){
		
		var empleadoSalvado = $modal.open({
			templateUrl: "Empleado-form.html",
			controller: "EmpleadoSaveCntrl", 
			resolve: {
			 	empleado: function() {
			 		return $scope.empleado;
			 	}
			 }
		})
		empleadoSalvado.result.then(function (entity){
			$scope.empleados.$add(entity);
		})	
	}

	$scope.ordenar= function(orden) {
		$scope.ordenselec = orden;
	};

	$scope.eliminar= function(tarea) {
		$scope.tareas.$remove(tarea);
	}
	
  }])
  .controller('EmpleadoSaveCntrl', ['$scope', '$modalInstance', 'empleado',
  	 function ($scope, $modalInstance, empleado) {
  	 	$scope.empleado = empleado;
  		
  		$scope.dateOptions = {
  			dateFormat: 'dd-MM-yyyy',
  			startingDay: 1
  		}
  		$scope.open = function($event) {
    		$event.preventDefault();
	    	$event.stopPropagation();

    		$scope.opened = true;
  		};
  		$scope.ok = function() {
  			$modalInstance.close($scope.empleado);
  		}

  		$scope.cancel = function() {
  			$modalInstance.dismiss('cancel');
  		}
  }])
