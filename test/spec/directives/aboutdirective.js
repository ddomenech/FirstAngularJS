'use strict';

describe('Directive: aboutdirective', function () {

  // load the directive's module
  beforeEach(module('tareasAsoinApp'));

  var element,
    scope;

  beforeEach(module('my.templates'));
  beforeEach(inject(function ($rootScope, $compile) {
    element = angular.element('<about-Directive texto="texto1"></about-Directive>');
    scope = $rootScope;    
    $compile(element)(scope);
    scope.$digest();
  }));

  it('pruebas para ver como va esto...', inject(function ($compile, $rootScope) {
    var titulo = element.find('h1');
    expect(titulo.text().length).toBe(0);
    expect(titulo.text()).toBe('');
  }));

  it('pruebas de datos ', inject(function ($compile, $rootScope){
      scope.$apply(function() {
      scope.texto1 = {titulo: 'pruebas ', subtitulo: 'de karma' };
    });
    var titulo = element.find('h1');
    expect(titulo.text().length).toBe(16);
    expect(titulo.text()).toBe('pruebas de karma');
  }));

  it('subtitulo ', inject(function ($compile, $rootScope) {
      scope.$apply(function() {
      scope.texto1 = {titulo: 'pruebas ', subtitulo: 'de karma' };
    });
    var subtitulo = element.find('small');
    expect(subtitulo.text().length).toBe(8);
    expect(subtitulo.text()).toBe('de karma');
  }));
});
