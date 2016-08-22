angular.module('starter.controllers', [])

.controller('AvisoController', function($scope) { 
   
    $scope.sair = function() {
        ionic.Platform.exitApp();
    }
    
    $scope.continuar = function(){
        window.location.href = "index.html";
    }
});