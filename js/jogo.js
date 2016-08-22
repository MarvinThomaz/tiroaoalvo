var contador = 1,
    bolaIntervalo,
    bolaX,
    bolaY,
    bolaContador = 1,
    fundoContador = 1,
    tela = document.getElementById('tela'),  
    tempo = 45,    
    cores = ["red", "blue", "yellow", "green", "gray"],
    areaJogo = document.getElementById("areaJogo"),
    raio = ((areaJogo.clientWidth * areaJogo.clientHeight) * 0.0001),
    itemNivel = localStorage.getItem("nivel"),
    velocidade = itemNivel != null && itemNivel != undefined ? itemNivel : 500,
    
    contagem = function(){
        if(tempo > 0){
            document.getElementById("tempo").innerText = tempo;
            tempo --;
        }
        else{
            localStorage.setItem("pontuacaoFinal", parseInt(document.getElementById("pontuacao").innerText));
            clearInterval(tempoIntervalo);
            
            window.location.href = 'final.html';
        }
    },

    criarContexto = function(){
        var ctx = tela.getContext("2d");

        return ctx;
    },

    desenhaBola = function(){
        var ctx = criarContexto(),
            bodyW = areaJogo.clientWidth,
            bodyH = areaJogo.clientHeight;
            
        raio = ((areaJogo.clientWidth * areaJogo.clientHeight) * 0.0001);
        
        tela.width = bodyW;
        tela.height = bodyH;
        
        ctx.fillStyle = cores[bolaContador % cores.length];
        ctx.beginPath();
        ctx.arc(bolaX, bolaY, raio, 0, 2 * Math.PI);
        ctx.fill();              
        clearInterval(bolaIntervalo);
        
        bolaIntervalo = setInterval(desenhaBola, 30);
        bolaContador++;
    },
    
    apagarBola = function(x, y){
        criarContexto().clearRect(0, 0, tela.width, tela.height);
        
        bolaContador = 1;
    },

    desenha = function(){
        apagarBola();
        sorteiaAlvo(contador);    
        
        contador = contador + 1;
    },
    
    sorteiaAlvo = function(contador){  
        bolaX = Math.floor((Math.random() * (areaJogo.clientWidth - (areaJogo.clientWidth * 0.02))));
        bolaY = Math.floor((Math.random() * (areaJogo.clientHeight - (areaJogo.clientHeight * 0.02))));       
        bolaCor = cores[contador % cores.length];
        
        desenhaBola();
    },
    
    alteraFundo = function(){
        var fundos = ["white", "black"];
        
        tela.style.backgroundColor = fundos[fundoContador % fundos.length];
        
        if(fundoContador == 100)
            fundoContador = 0;
            
        fundoContador++;
    },
    
    somarPonto = function(x, y){  
        if(x < bolaX + raio && x > bolaX - raio && y < bolaY + raio && y > bolaY - raio){
            var pontos = parseInt(document.getElementById("pontuacao").innerText);
            document.getElementById("pontuacao").innerText = ++pontos;
        }
    };
    
angular.module('starter.controllers', [])

.controller('AcertoController', function($scope, $rootScope, $ionicPlatform) { 
   
    $scope.pontuar = function() {
        
        var x = event.pageX - areaJogo.offsetLeft;
        var y = event.pageY - areaJogo.offsetTop;
        
        somarPonto(x, y);  
    }
     
    $scope.voltar = back;

    function back(){
        window.location.href = "index.html";
    }

    voltar(back, $scope, $rootScope, $ionicPlatform);
});

var desenhoIntervalo = setInterval(desenha, velocidade),
    tempoIntervalo = setInterval(contagem, 1000);