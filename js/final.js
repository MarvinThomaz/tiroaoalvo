angular.module('starter.controllers', [])

.controller('FimController', function($scope, $rootScope, $ionicPlatform) { 
   
    voltar(back, $scope, $rootScope, $ionicPlatform);
    
    $scope.voltar = back;
    $scope.dados = {};
    $scope.dados.pontuacao = localStorage.getItem("pontuacaoFinal");
    $scope.dados.nivel = localStorage.getItem("nivel") != null ? localStorage.getItem("nivel") : 500;
    
    var maiorPontuacao = obterMaiorPontuacaoPorNivel($scope.dados.nivel);

    $scope.dados.mensagem = $scope.dados.pontuacao > maiorPontuacao.pontuacao ? "Parabéns! Essa é a sua maior pontuação." : "";

    if($scope.dados.mensagem != "")
        localStorage.setItem(maiorPontuacao.tipo, maiorPontuacao.pontuacao);
    else
        $scope.dados.mensagem = "Pontuação Final"
});

function obterMaiorPontuacaoPorNivel (nivel){
    nivel = parseInt(nivel);
    
    var nome;

    switch(nivel){
        case 600:
            nome = "maiorPontuacaoFacil";
            break;
        case 500:
            nome = "maiorPontuacaoNormal";
            break;
        case 300:
            nome = "maiorPontuacaoDificil";
            break;
        case 200:
            nome = "maiorPontuacaoInsano";
            break;
    }

    var pontuacao = localStorage.getItem(nome);

    return {tipo: nome, pontuacao: pontuacao != "null" ? pontuacao : 0};
}

function back(){
    window.location.href = "index.html";
}