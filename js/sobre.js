angular.module('starter.controllers', [])
.controller('SobreController', function($scope, $rootScope, $ionicPlatform) {
 
    $scope.voltar = back;

    function back(){
        window.location.href = "index.html";
    }

    voltar(back, $scope, $rootScope, $ionicPlatform);
});