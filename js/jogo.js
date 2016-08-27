angular.module('starter.controllers', ['ngCordova'])

.controller('AcertoController', function($scope, $rootScope, $ionicPlatform, $cordovaVibration, $interval) { 
    var contexto = $('canvas')[0].getContext("2d");
    var bola = new Image();
    var height = $('.area-jogo').height();
    var width = $('.area-jogo').width(); 

    $scope.jogo = {};
    $scope.jogo.pontuacao = 0;
    $scope.jogo.tempo = 45;

    $scope.pontuar = function() {
        var x = event.pageX - $('.area-jogo').offset().left;
        var y = event.pageY - $('.area-jogo').offset().top;
        var raio = 50;
        
        if(x < $scope.jogo.x + raio && x > $scope.jogo.x - raio && y < $scope.jogo.y + raio && y > $scope.jogo.y - raio){
            vibrar($cordovaVibration); 

            $scope.jogo.pontuacao++;
        }
    };
     
    $scope.vibracao = function(){
        vibrar($cordovaVibration);
    };

    $scope.recomecar = function(){
        vibrar($cordovaVibration);
        __doPostBack();
    };

    $ionicPlatform.ready(function(){       
        bola.src = "img/googleplus.png";

        bola.onload = function(){
            $interval(desenhar, 600);
            $interval(tempo, 1000);
        }
    });

    function tempo(){
        $scope.jogo.tempo--;

        if($scope.jogo.tempo == 0){
            $('.final').fadeIn();

            var pontuacao = parseInt(localStorage.getItem('pontuacao'));

            if(pontuacao < $scope.jogo.pontuacao){
                $('.trofeu').show();
                localStorage.setItem('pontuacao', $scope.jogo.pontuacao);
            }
        }
    }

    function desenhar(){
        $scope.jogo.x = Math.floor((Math.random() * (width - (width * 0.05))));
        $scope.jogo.y = Math.floor((Math.random() * (height - (height * 0.07))));

        contexto.canvas.width = width;
        contexto.canvas.height = height;

        contexto.drawImage(bola, $scope.jogo.x, $scope.jogo.y);
    }

    voltar(function () { location.href = "index.html" }, $scope, $rootScope, $ionicPlatform);
});