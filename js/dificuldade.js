var itemNivel = localStorage.getItem("nivel");

angular.module('starter.controllers', [])

.controller('DificuldadeController', function($scope, $rootScope,  $ionicPlatform) { 

    $scope.nivel = [
            { text: 'Fácil', value: 600 }, 
            { text: 'Normal', value: 500 }, 
            { text: 'Difícil', value: 300 }, 
            { text: 'Insano', value: 200 }
        ];
   
    $scope.data = { nivel: itemNivel != null && itemNivel != undefined ? itemNivel : 500 };
   
    $scope.voltar = back;

    $scope.confirmar = function(nivel){
        localStorage.setItem("nivel", nivel);
        window.location.href = "index.html";
    }

    function back(){
        window.location.href = "index.html";
    }

    voltar(back, $scope, $rootScope, $ionicPlatform);
});