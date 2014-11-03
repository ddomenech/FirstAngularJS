'use strict';

describe('Controller: EmpleadosCtrl', function () {

  // load the controller's module
  beforeEach(module('tareasAsoinApp'));

  var EmpleadosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmpleadosCtrl = $controller('EmpleadosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
