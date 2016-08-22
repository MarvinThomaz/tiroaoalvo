angular.module('starter.controllers', [])

.controller('SobreController', function($scope) { 
    $scope.voltar = function () {
        window.location.href = "index.html";
    }
});