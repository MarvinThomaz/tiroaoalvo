angular.module('starter.controllers', ['ngCordova'])
.controller('SobreController', function($scope, $rootScope, $ionicPlatform, $cordovaVibration) {
 
    $scope.vibracao = function(){
        vibrar($cordovaVibration);
    };

    voltar(function () { location.href = "index.html" }, $scope, $rootScope, $ionicPlatform);
});