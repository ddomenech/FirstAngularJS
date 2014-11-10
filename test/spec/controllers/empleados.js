'use strict';

describe('Controller: EmpleadosCtrl', function () {

  // load the controller's module
  beforeEach(module('tareasAsoinApp'));

  var EmpleadosCtrl,
    scope, telefon;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $filter) {
    scope = $rootScope.$new();
    EmpleadosCtrl = $controller('EmpleadosCtrl', {
      $scope: scope
    });
    telefon = $filter('TelefonoFl');
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('telefon: debe ser formato XX XXX XX XX', function(){
      var tel = '912344567';
      expect(telefon(tel)).toBe('91 234 45 67');
  });  

});
