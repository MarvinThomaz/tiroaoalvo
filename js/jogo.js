angular.module('starter.controllers', ['ngCordova'])

.controller('AcertoController', function($scope, $rootScope, $ionicPlatform, $cordovaVibration, $interval) { 
    var contexto = $('canvas')[0].getContext("2d");
    var bola = new Image();
    var height = $('.area-jogo').height();
    var width = $('.area-jogo').width(); 
    var velocidade = null;
    var velocidadeinicial = 600;
    var marca = 0;
    var tamanho = obterTamanho();


    $scope.jogo = {};
    $scope.jogo.pontuacao = 0;
    $scope.jogo.tempo = 30;

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
        location.reload();
    };

    $ionicPlatform.ready(function(){       
        bola.src = "img/circulo_" + tamanho + ".gif";

        bola.onload = function(){
            velocidade = $interval(desenhar, velocidadeinicial);
            $interval(tempo, 1000);
        }
    });

    function tempo(){
        $scope.jogo.tempo--;

        if($scope.jogo.tempo == 0){
            $('.final').fadeIn();

            var pontuacao = localStorage.getItem('pontuacao')  == null ? 0 : parseInt(localStorage.getItem('pontuacao'));

            if(pontuacao < $scope.jogo.pontuacao){
                $('.trofeu').show();
                localStorage.setItem('pontuacao', $scope.jogo.pontuacao);
            }
        }
        else if($scope.jogo.pontuacao % 10 == 0 && $scope.jogo.pontuacao != marca)
        {
            marca = $scope.jogo.pontuacao;
            $scope.jogo.tempo += 10;
            $interval.cancel(velocidade);
            velocidadeinicial -= 100;
            velocidade = $interval(desenhar, velocidadeinicial);
        }
    }

    function desenhar(){
        if($('.loading').length > 0)
            $('.loading').remove();

        $scope.jogo.x = Math.floor((Math.random() * (width - (width * 0.05))));
        $scope.jogo.y = Math.floor((Math.random() * (height - (height * 0.07))));

        contexto.canvas.width = width;
        contexto.canvas.height = height;

        contexto.drawImage(bola, $scope.jogo.x, $scope.jogo.y);
    }

    function obterTamanho(){
        if(screen.width > 600 && screen.height > 900)
            return 100;
        else if(screen.width > 400 && screen.height > 700)
            return 75;
        else if(screen.width > 200 && screen.height > 400)     
            return 50;
        else
            return 50;
    }

    voltar(function () { location.href = "index.html" }, $scope, $rootScope, $ionicPlatform);
});