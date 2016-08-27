angular.module('starter.controllers', ['ionic', 'ngCordova'])

.controller('AvisoController', function($scope, $cordovaVibration) { 
   
    $scope.sair = function() {
        vibrar($cordovaVibration);
        ionic.Platform.exitApp();
    }

    $scope.vibracao = function(){
        vibrar($cordovaVibration);
    }
});