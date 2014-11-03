'use strict';

/**
 * @ngdoc function
 * @name tareasAsoinApp.controller:EmpleadosCtrl
 * @description
 * # EmpleadosCtrl
 * Controller of the tareasAsoinApp
 */
angular.module('tareasAsoinApp')
  .controller('EmpleadosCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.empleados = [
	{
		nombre: 'David', apellidos: 'Domenech Pascual', fechainicio: new Date(), 
		salario: 17000, telefono: 9633344343, recurso: 'Programador Junior', activo: true
	},
	{
		nombre: 'Carlos', apellidos: 'Garcia Paya', fechainicio: new Date(), 
		salario: 27000, telefono: 9533777343, recurso: 'Consultor', activo: true
	},
	{
		nombre: 'Jose Manuel', apellidos: 'ñuñez Esteso', fechainicio: new Date(), 
		salario: 37000, telefono: 9733344343, recurso: 'Comercial', activo: true
	},
	{
		nombre: 'Paco', apellidos: ' Pascual', fechainicio: new Date(),
		salario: 15320, telefono: 92334441343, recurso: 'Programador Senior', activo: true
	},
	{
		nombre: 'Sergio', apellidos: 'Domenech Pascual', fechainicio: new Date(),
		salario: 18800, telefono: 36334444343, recurso: 'Analista', activo: true
	},
	{
		nombre: 'Agustin', apellidos: 'Domenech Pascual', fechainicio: new Date(),
		salario: 17000, telefono: 9633344343, recurso: 'Tecnito', activo: true
	},
	{
		nombre: 'Marta', apellidos: 'Lopez ', fechainicio: new Date(),
		salario: 17000, telefono: 9633344343, recurso: 'Gerente', activo: false
	},
	{
		nombre: 'Rafael', apellidos: 'Villarroya Tormo', fechainicio: new Date(),
		salario: 17000, telefono: 9633344343, recurso: 'Consultor Jefe', activo: false
	},
	{	
		nombre: 'Guillermito', apellidos: 'Puertas y Ventanas', fechainicio: new Date(),
		salario: 17000, telefono: 9633344343, recurso: 'Jefe Programadores', activo: true
	 }
	];

	$scope.ordenar= function(orden){
		$scope.ordenselec = orden;
	};
  });
