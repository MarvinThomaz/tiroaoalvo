angular.module('starter.controllers', [])

.controller('PontuacaoController', function($scope) { 
    
    $scope.pontuacao = [
            { text: 'Fácil: ' + (localStorage.getItem("maiorPontuacaoFacil") == null ? 0 : localStorage.getItem("maiorPontuacaoFacil")) }, 
            { text: 'Normal: ' + (localStorage.getItem("maiorPontuacaoNormal") == null ? 0 : localStorage.getItem("maiorPontuacaoNormal")) }, 
            { text: 'Difícil: ' + (localStorage.getItem("maiorPontuacaoDificil") == null ? 0 : localStorage.getItem("maiorPontuacaoDificil")) }, 
            { text: 'Insano: ' + (localStorage.getItem("maiorPontuacaoInsano") == null ? 0 : localStorage.getItem("maiorPontuacaoInsano")) }
        ];
        
    $scope.voltar = function() {
        window.location.href = "index.html";
    }
});