'use strict';

/**
 * @ngdoc function
 * @name tareasAsoinApp.controller:EmpleadosCtrl
 * @description
 * # EmpleadosCtrl
 * Controller of the tareasAsoinApp
 */


angular.module('tareasAsoinApp')
  .controller('EmpleadosCtrl', ['$scope', '$modal', 'api', 'authState',
  	function ($scope, $modal, api, authState) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.authState = authState;

    $scope.visible = true;
    //var refEmpleados = new Firebase("https://tareasddp.firebaseio.com/empleados")
    //var syncFireEmp = $firebase(refEmpleados);
    $scope.list = function() {
    	api.empleados.query(function(data){
    		$scope.empleados = data.results;
    	});
    };
    $scope.list();
    //syncFireEmp.$asArray();
    
	$scope.limpiar = function(){
		var nextid = 0;
		$scope.empleado = {
		id: id, 
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
  .controller('EmpleadoSaveCntrl', ['$scope', '$modalInstance', 'empleado', 'api', 'authState',
  	 function ($scope, $modalInstance, empleado, authState) {
 		$scope.authState = authState;

  	 	$scope.empleado = empleado;
  		
  		$scope.dateOptions = {
  			formatYear: 'yyyy',
  			startingDay: 1
  		}
  		$scope.open = function($event) {
    		$event.preventDefault();
	    	$event.stopPropagation();
    		console.log("entra en open");	
    		$scope.opened = true;
  		};
  		$scope.ok = function() {
  			console.log($scope.empleado.fecha);
  			$modalInstance.close($scope.empleado);
  		}

  		$scope.cancel = function() {
  			$modalInstance.dismiss('cancel');
  		}
  }]);
angular.module('tareasAsoinApp').filter('TelefonoFl', function() {
	return function(telefono) {
		return telefono.substr(0,2) + ' ' + telefono.substr(2,3) + ' ' + telefono.substr(5, 2) + ' ' + telefono.substr(7,2);
	}
})