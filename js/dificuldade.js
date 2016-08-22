var itemNivel = localStorage.getItem("nivel");

angular.module('starter.controllers', [])

.controller('DificuldadeController', function($scope) { 
    
    $scope.nivel = [
            { text: 'Fácil', value: 600 }, 
            { text: 'Normal', value: 500 }, 
            { text: 'Difícil', value: 300 }, 
            { text: 'Insano', value: 200 }
        ];
   
    $scope.data = { nivel: itemNivel != null && itemNivel != undefined ? itemNivel : 500 };
   
    $scope.voltar = function() {
        window.location.href = "index.html";
    }

    $scope.confirmar = function(nivel){
        localStorage.setItem("nivel", nivel);
        window.location.href = "index.html";
    }
});