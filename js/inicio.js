var imagens = ["img/inicio.jpeg", "img/inicioinvertido.png"],
    contador = 1,

    inverterImagem = function(){
        document.getElementById("imagem").src = imagens[contador % imagens.length];
        contador++;
    },
    
    imagemIntervalo = setInterval(inverterImagem, 30);

angular.module('starter.controllers', [])

.controller('InicioController', function($scope, $ionicPopup, $timeout) { 
   
    $scope.jogar = function() {
        window.location.href = "jogo.html";
    }; 
    
    $scope.pontuacaoMaxima = function(){
        window.location.href = "pontuacao.html";
    };
    
    $scope.aviso = function() {
        window.location.href = "aviso.html";
    };
    
    $scope.dificuldade = function(){
        window.location.href = "dificuldade.html";
    }
    
    $scope.sobre = function(){
        window.location.href = "sobre.html";
    }
});