var itemNivel = localStorage.getItem("nivel");

angular.module('starter.controllers', ['ngCordova'])

.controller('DificuldadeController', function($scope, $rootScope,  $ionicPlatform, $cordovaVibration) { 

    $scope.nivel = [
            { text: 'Fácil', value: 600 }, 
            { text: 'Normal', value: 500 }, 
            { text: 'Difícil', value: 300 }, 
            { text: 'Insano', value: 200 }
        ];
   
    $scope.data = { nivel: itemNivel != null && itemNivel != undefined ? itemNivel : 500 };
   
    $scope.vibracao = function(){
        vibrar($cordovaVibration);
    };

    $scope.confirmar = function(nivel){
        vibrar($cordovaVibration);
        localStorage.setItem("nivel", nivel);
        window.location.href = "index.html";
    }

    voltar(function () { location.href = "index.html" }, $scope, $rootScope, $ionicPlatform);
});