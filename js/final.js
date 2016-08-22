angular.module('starter.controllers', [])

.controller('FimController', function($scope) { 
   
    $scope.reiniciar = function() {
        window.location.href = "jogo.html";
    };
    
    $scope.voltar = function() {
        window.location.href = "index.html";
    }; 
    
    $scope.carregarPontuacao = function(){ 
        var pontuacao = localStorage.getItem("pontuacaoFinal"); 
        var itemNivel = localStorage.getItem("nivel");
        var nivel = itemNivel != null && itemNivel != undefined ? itemNivel : 500;
        
        insertirPontuacao(nivel, pontuacao);
    };
});

var insertirPontuacao = function(nivel, pontuacao){
    nivel = parseInt(nivel);
    
    switch(nivel){
        case 600:
            verificarMaiorPontuacao(localStorage.getItem("maiorPontuacaoFacil"), pontuacao, "maiorPontuacaoFacil");
            break;
        case 500:
            verificarMaiorPontuacao(localStorage.getItem("maiorPontuacaoNormal"), pontuacao, "maiorPontuacaoNormal");
            break;
        case 300:
            verificarMaiorPontuacao(localStorage.getItem("maiorPontuacaoDificil"), pontuacao, "maiorPontuacaoDificil");
            break;
        case 200:
            verificarMaiorPontuacao(localStorage.getItem("maiorPontuacaoInsano"), pontuacao, "maiorPontuacaoInsano");
            break;
    }
},

verificarMaiorPontuacao = function(maiorPontuacao, pontuacao, nome){
    if(maiorPontuacao < pontuacao){
        var pontuacaoTexto = document.getElementById("pontuacaoFinalMensagem"); 
        var elementoPontuacao = document.getElementById("pontuacaoFinal");
        localStorage.setItem(nome, pontuacao);
        pontuacaoTexto.innerText = "Parabéns! Essa é a sua maior pontuação.";
        elementoPontuacao.innerText = pontuacao;
    }
};