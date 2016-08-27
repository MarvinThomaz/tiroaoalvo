angular.module('starter.controllers', ['ngCordova'])

    .controller('PontuacaoController', function ($scope, $rootScope, $ionicPlatform, $cordovaVibration) {

        $scope.vibracao = function () {
            vibrar($cordovaVibration);
        };

        $scope.pontuacao = [
            { modo: 'Pontuação', pontuacao: (get("pontuacao") == null ? 0 : get("pontuacao")) }
        ];

        voltar(function () { location.href = "index.html" }, $scope, $rootScope, $ionicPlatform);

        function get(nome){
            return JSON.parse(localStorage.getItem(nome));
        }
    });