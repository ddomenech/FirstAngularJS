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
    /*[
	{
		id: 1, nombre: 'David', apellidos: 'Domenech Pascual', fechainicio: new Date(), 
		salario: 17000, telefono: 9633344343, recurso: 'Programador Junior', activo: true
	},
	{
		id: 2, nombre: 'Carlos', apellidos: 'Garcia Paya', fechainicio: new Date(), 
		salario: 27000, telefono: 9533777343, recurso: 'Consultor', activo: true
	},
	{
		id: 3, nombre: 'Jose Manuel', apellidos: 'ñuñez Esteso', fechainicio: new Date(), 
		salario: 37000, telefono: 9733344343, recurso: 'Comercial', activo: true
	},
	{
		id: 4, nombre: 'Paco', apellidos: ' Pascual', fechainicio: new Date(),
		salario: 15320, telefono: 92334441343, recurso: 'Programador Senior', activo: true
	},
	{
		id: 5, nombre: 'Sergio', apellidos: 'Domenech Pascual', fechainicio: new Date(),
		salario: 18800, telefono: 36334444343, recurso: 'Analista', activo: true
	},
	{
		id: 6, nombre: 'Agustin', apellidos: 'Domenech Pascual', fechainicio: new Date(),
		salario: 17000, telefono: 9633344343, recurso: 'Tecnito', activo: true
	},
	{
		id: 7, nombre: 'Marta', apellidos: 'Lopez ', fechainicio: new Date(),
		salario: 17000, telefono: 9633344343, recurso: 'Gerente', activo: false
	},
	{
		id: 8, nombre: 'Rafael', apellidos: 'Villarroya Tormo', fechainicio: new Date(),
		salario: 17000, telefono: 9633344343, recurso: 'Consultor Jefe', activo: false
	},
	{	
		id: 9, nombre: 'Guillermito', apellidos: 'Puertas y Ventanas', fechainicio: new Date(),
		salario: 17000, telefono: 9633344343, recurso: 'Jefe Programadores', activo: true
	 }
	];*/
	$scope.limpiar = function(){
		$scope.empleado = {
		id: 0, 
		nombre: '', 
		apellidos: '', 
		fecha: new Date(),
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
  		
  		$scope.fecha = {
  			dateFormat: 'dd-mm-yy'
  		}
  		$scope.ok = function() {
  			$modalInstance.close($scope.empleado);
  		}

  		$scope.cancel = function() {
  			$modalInstance.dismiss('cancel');
  		}
  }])
