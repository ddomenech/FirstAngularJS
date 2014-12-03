'use strict';

/**
 * @ngdoc function
 * @name tareasAsoinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tareasAsoinApp
 */
angular.module('tareasAsoinApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }).
  controller('authController', function($scope, api, authState) {
        
        $('#id_auth_form input').checkAndTriggerAutoFillEvent();

        $scope.authState = authState;
        console.log(authState.user);
        $scope.getCredentials = function(){
            return {username: $scope.username, password: $scope.password};
        };
        $scope.login = function(){
            api.auth.login($scope.getCredentials()).
                $promise.
                    then(function(data){
                        authState.user = data.username;
                        console.log(data.username);
                    }).
                    catch(function(data){
                        alert(data.data.detail);
                    });
        };
        $scope.logout = function(){
            api.auth.logout(function(){
                authState.user = undefined;
            });
        };
        $scope.register = function($event){
            $event.preventDefault();
            api.users.create($scope.getCredentials()).
                $promise.
                    then($scope.login).
                    catch(function(data){
                        alert(data.data.username);
                    });
        };
  });
