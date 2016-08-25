angular.module('starter.controllers', [])

    .controller('PontuacaoController', function ($scope, $rootScope, $ionicPlatform) {

        $scope.voltar = back;
        $scope.pontuacao = [
            { modo: 'Fácil', pontuacao: (localStorage.getItem("maiorPontuacaoFacil") == null ? 0 : localStorage.getItem("maiorPontuacaoFacil")) },
            { modo: 'Normal', pontuacao: (localStorage.getItem("maiorPontuacaoNormal") == null ? 0 : localStorage.getItem("maiorPontuacaoNormal")) },
            { modo: 'Difícil', pontuacao: (localStorage.getItem("maiorPontuacaoDificil") == null ? 0 : localStorage.getItem("maiorPontuacaoDificil")) },
            { modo: 'Insano', pontuacao: (localStorage.getItem("maiorPontuacaoInsano") == null ? 0 : localStorage.getItem("maiorPontuacaoInsano")) }
        ];

        voltar(back, $scope, $rootScope, $ionicPlatform);
    });

function back() {
    window.location.href = "index.html";
}