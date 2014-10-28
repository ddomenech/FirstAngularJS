'use strict';

describe('Controller: TareasCtrl', function () {

  // load the controller's module
  beforeEach(module('tareasAsoinApp'));

  var TareasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TareasCtrl = $controller('TareasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
