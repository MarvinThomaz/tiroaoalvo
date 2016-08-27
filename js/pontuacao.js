angular.module('starter.controllers', ['ngCordova'])

    .controller('PontuacaoController', function ($scope, $rootScope, $ionicPlatform, $cordovaVibration) {

        $scope.vibracao = function () {
            vibrar($cordovaVibration);
        };

        $scope.pontuacao = [
            { modo: 'Fácil', pontuacao: (get("maiorPontuacaoFacil") == null ? 0 : get("maiorPontuacaoFacil")) },
            { modo: 'Normal', pontuacao: (get("maiorPontuacaoNormal") == null ? 0 : get("maiorPontuacaoNormal")) },
            { modo: 'Difícil', pontuacao: (get("maiorPontuacaoDificil") == null ? 0 : get("maiorPontuacaoDificil")) },
            { modo: 'Insano', pontuacao: (get("maiorPontuacaoInsano") == null ? 0 : get("maiorPontuacaoInsano")) }
        ];

        voltar(function () { location.href = "index.html" }, $scope, $rootScope, $ionicPlatform);

        function get(nome){
            return JSON.parse(localStorage.getItem(nome));
        }
    });