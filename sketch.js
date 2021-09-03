/*
Autores: Efrain Marcelo Pulgar Pantaleon
         Francisco Paiva da Silva Neto
*/

//Variaveis de controle
var tela = false;
var inicio = false;
var tutorial = false;

//Variaveis do menu
var ytext = 410;//Sobe o texto na tela

//Variaveis dos personagens e dos itens
var xpersonagem = 350, ypersonagem = 370;
var xitem, yitem;
var f = 0;
var certo = [];
var xobs1 , yobs1
var xobs2 , yobs2
var xobs3 , yobs3
var h = 0;
var g = 1;
var o = 2;
//Distancia dos pontos ao jogador
var distancia;
var dist1 , dist2, dist3;
//Variavel do tiro
var xtiro = xpersonagem, ytiro = ypersonagem;

//Variaveis dos obstaculos
var xobs = [];
var yobs = [];
var qobs = 1;
var i, j = 0;
  var h = 0
//Distancia dos obstaculos ao jogador
var d1;

//Contar o tempo no jogo
var tempo = 0;
var minutos = 0;

//Vida e pontuacao
var pontos = 0;
var vidas = 100;

//Distancia do personagem aos obstaculos 1 e 2
var disterro;

//Condicao para o tiro e o pulo
var pulo = false;
var ypulo = 0;
var pulof = 0;
var ed = false
var dtiro1 , dtiro2 , dtiro3
//Contador de pontos
var cont = 0;

//Imagens
var img;
var fundo1;
var fundo2;
var fundo3;
var personagem = [];
var personagem2 = [];
var obstacle = [];
var calc = [];

//Sons do jogo
var som;
var som1;

//Carregar arquivos
function preload() {
  //Obstaculos
  for(i = 0; i < 12; i++){
      obstacle[i] = loadImage("Obstacles/calc"+i+".jpeg");
  }
  //Itens
  for(i = 0; i < 14; i++){
      certo[i] = loadImage("certo/certo"+i+".jpeg");
  }
  
  //Parado
  for(i = 0; i < 15; i++){
      personagem[i] = loadImage("player/Idle("+i+").png");
  }
  
  //Gameover
  for(i = 0; i < 15; i++){
      personagem2[i] = loadImage("player/Dead(" + i + ").png");
  }
  
  img = loadImage("calculadora.png");
  fundo1 = loadImage("background/background0.png");
  fundo2 = loadImage("background/rock.png");
  fundo3 = loadImage("background/snow.png");
  
  som = loadSound("sounds/b423b42.wav");
}

//Funcoes do jogo
  //Tela do começo
  function telainicial(){
    background(227, 159, 14);
      // Imprimindo mensagem de introducao na tela
      fill(255, 255, 255);
      textFont("Times New Roman");
      textSize(30);
      text("Seja bem- vindo, invocador, a" + "\n", 15, 150);
    
      textSize(40);
      text("Aprovando na trindade", 10, 200);
    
      textSize(30);
      text("Aperte 'ENTER' para começar", 15, 300);
      
  //Parar a execução da função
    return;
  }

  //Menu
  function menu(){
    clear();
      // Imprimindo mensagem de introducao na tela
      fill(255, 255, 255);
      textFont("Times New Roman");
      textSize(21.5);
      text("Reza a lenda de que existia uma Trindade de" + "\n" + "professores carrascos de uma Universidade" + "\n" + "em uma cidade distante, os quais realizavam" + "\n" + "competições para reprovar o maior número de" + "\n" + "alunos. Esse evento ocorria a cada ciclo lunar" + "\n" + "e era chamado de 'Semana de Provas' , " + " \n" + "o período mais temido pelos universitários já " + "\n" + "que a reprovação era mais do que certa." + "\n" + "Entretanto, havia uma lenda propagada desde" + "\n" + "a fundação da instituição de que um dia um" + "\n" + "aluno mudaria a história passando por todas as" + "\n" + "provas e superando os desafios até o momento dados como impossíveis." + "\n" + "Os professores da Trindade temiam que esse " + "\n" + " dia chegasse, então prepararam várias " + "\n" + "armadilhas para o escolhido." + "\n" + "Agora que  você entrou na Universidade, cabe " + "\n" +" a você desafiar a Trindade e provar ser " + "\n" + "o escolhido! Para isso você precisa desviar " + "\n" + " das pegadinhas e coletar os cálculos " + "\n" + "corretamente para evitar o jubilamento e salvar o semestre." + "\n" + "\n" + "    Aperte 'SHIFT' para jogar" , 0, ytext);
      
    //Sobe o texto na tela
    ytext -= 0.5;
      
  //Parar a execução da função
    return;
  }

  //Introducao
    function intro(){
      background(87,4,10);
      imageMode(CENTER);
      // Imprimindo comandos do jogo na tela
      fill(255, 255, 255);
      
      textSize(30);
      text("TUTORIAL", 120, 30);
      
      textSize(20);
      text("Mover à esquerda: Seta para a direita" , 30, 100);
      
      text("Mover à direita: Seta para a esquerda" , 30, 150);
      
      text("Pular(A partir do nível 2): Seta para cima" , 30, 200);
      text("Atirar(A partir do nível 3): Barra de Espaço" , 30, 250);
      
      text("APERTE 'CTRL' PARA JOGAR" , 90, 350);
      
      //Parar a execução da função
        return;
    }

  //Fases
    //Fase1
  function fase1(){
    clear();
    imageMode(CENTER);
    
    //Imagem de fundo
    image(fundo1,200, 200, 400, 400);
    
    //Imagem do personagem
    image(personagem[i],xpersonagem,ypersonagem + ypulo, 50, 70);
    i++;
    if(i >= 15)
      i = 0;
        
    //Movimentação horizontal do personagem
    if (keyIsDown(RIGHT_ARROW)) {
      xpersonagem += 4;
    }
    
   if (keyIsDown(LEFT_ARROW)) {
      xpersonagem -= 4;
    }
    
  //Limitando personagem no nosso cenário
  if(xpersonagem > width){
    xpersonagem = width;
  }
  if(xpersonagem < 25){
    xpersonagem = 25;
  }
  // Criando item para o personagem pegar que cai de cima
  image(certo[f], xitem, yitem, 100, 60);
    
  //Queda do item
    yitem += 1;
    
    if(yitem > height){
      xitem = random(0, 300);
      yitem = 0;
      f = parseInt(random(0,13))
    }
    
    //Obstaculo
    image(obstacle[h], xobs1, yobs1, 100, 60);
    
  //Queda do obstaculo
    yobs1 += 1;
    
    if(yobs1 > height){
      xobs1 = random(30, 300);
      yobs1 = 0;
      h = parseInt(random(0,11))
    }
    dist1 = dist(xpersonagem + 20 ,ypersonagem + ypulo ,xobs1 + 50 ,yobs1 + 30);
    image(obstacle[g], xobs2, yobs2, 100, 60);
    
  //Queda do obstaculo
    yobs2 += 1;
    
    if(yobs2 > height){
      xobs2 = random(30, 300);
      yobs2 = 0;
      g = parseInt(random(0,11))
    }
    dist2 = dist(xpersonagem + 20,ypersonagem +ypulo,xobs2 + 50 ,yobs2 + 30);
    image(obstacle[o], xobs3, yobs3, 100, 60);
    
  //Queda do obstaculo
    yobs3 += 1;
    
    if(yobs3 > height){
      xobs3 = random(30, 300);
      yobs3 = 0;
      o = parseInt(random(0,11))
    }
    dist3 = dist(xpersonagem + 20,ypersonagem + ypulo,xobs3 + 50 ,yobs3 + 30);
    if(dist1 < 30){
      xobs1 = random(0, 400);
      yobs1 = - random(100,1300) ;
      vidas -= 5 ;
    }
    if(dist1 < 30){
      xobs2 = random(0, 400);
      yobs2 = - random(100,1300) ;
      vidas -= 5 ;
    }
    if(dist2 < 30){
      xobs2 = random(0, 400);
      yobs2 = - random(100,1300) ;
      vidas -= 5 ;
    }
    
  //Distancia entre o personagem e o item
  d = int(dist(xpersonagem, ypersonagem + ypulo, xitem, yitem));
    
  if (d < 25) {
      //  Voltando o item para a altura 0
        xitem = random(20, 310);
        yitem = 0;
  //Contador de pontos que vai entrar na condição de vitória
        pontos += 10;
    f = parseInt(random(0,13))
    }
    
    //Parar a execução da função
    return;
}

  //Fase2
  function fase2(){
    clear();
    imageMode(CENTER);
    
    //Imagem de fundo
     image(fundo2, 200,200, 400, 400);
    
    //Imagem do personagem
    image(personagem[i], xpersonagem, ypersonagem + ypulo, 50, 70);
    i++;
    if(i >= 15)
      i = 0;
    
  //Movimentação horizontal do nosso personagem
  //Para a direita
  if (keyIsDown(RIGHT_ARROW)) {
      xpersonagem += 4;
  }
  //Para a esquerda
  if (keyIsDown(LEFT_ARROW)) {
      xpersonagem -= 4;
  }
  //Movimentação vertical do nosso personagem  
  //Pulo do personagem
    if (keyIsDown(UP_ARROW) && (! pulo) ){ 
		pulo = true; 
		pulof = 0;	
	}
    if (pulo) {
	  pulof++;
	ypulo = 0.5*(pulof)*(pulof - 30);
		//Caso o personagem saia da tela 
		if (ypulo > 0) {
			pulo = false;
			ypulo = 0;
        }
    }
  
  //Limitando Paredes do nosso cenário
  if(xpersonagem > width){
    xpersonagem = width;
  }
  if(xpersonagem < 25){
    xpersonagem = 25;
  }
    
  // Criando item para o personagem pegar que cai de cima
  image(certo[f], xitem, yitem, 100, 60);
    
  //Queda do item
    yitem += 1;
    
    if(yitem > height){
      xitem = random(0, 300);
      yitem = 0;
      f = parseInt(random(0,13))
    }
    
    //Obstaculo
    image(obstacle[h], xobs1, yobs1, 100, 60);
    
  //Queda do obstaculo
    yobs1 += 1;
    
    if(yobs1 > height){
      xobs1 = random(30, 300);
      yobs1 = 0;
      h = parseInt(random(0,11))
    }
    dist1 = dist(xpersonagem + 20 ,ypersonagem + ypulo,xobs1 + 50 ,yobs1 + 30);
    image(obstacle[g], xobs2, yobs2, 100, 60);
    
  //Queda do obstaculo
    yobs2 += 1;
    
    if(yobs2 > height){
      xobs2 = random(30, 300);
      yobs2 = 0;
      g = parseInt(random(0,11))
    }
    dist2 = dist(xpersonagem + 20,ypersonagem + ypulo,xobs2 + 50 ,yobs2 + 30);
    image(obstacle[o], xobs3, yobs3, 100, 60);
    
  //Queda do obstaculo
    yobs3 += 1;
    
    if(yobs3 > height){
      xobs3 = random(30, 300);
      yobs3 = 0;
      o = parseInt(random(0,11))
    }
    dist3 = dist(xpersonagem + 20,ypersonagem + ypulo,xobs3 + 50 ,yobs3 + 30);
    if(dist1 < 30){
      xobs1 = random(30, 350);
      yobs1 = - random(100,1300) ;
      vidas -= 5 ;
    }
    if(dist1 < 30){
      xobs2 = random(30, 350);
      yobs2 = - random(100,1300) ;
      vidas -= 5 ;
    }
    if(dist2 < 30){
      xobs2 = random(30, 350);
      yobs2 = - random(100,1300) ;
      vidas -= 5 ;
    }
    
  //Distancia entre o personagem e o item
  d = int(dist(xpersonagem, ypersonagem + ypulo, xitem, yitem));
    
  if (d < 25) {
      //  Voltando o item para a altura 0
        xitem = random(20, 310);
        yitem = 0;
  //Contador de pontos que vai entrar na condição de vitória
        pontos += 10;
    f = parseInt(random(0,13))
    }
      
  //Para a execução da função
    return;
    
}
  
  //Fase3
    function fase3(){
        clear();
    imageMode(CENTER);
    
    //Imagem de fundo
     image(fundo3, 200,200, 400, 400);
    
    //Imagem do personagem
    image(personagem[i], xpersonagem, ypersonagem + ypulo, 40, 40);
      i++;
    if(i >= 15)
      i = 0;
    
  //Movimentação Horizontal do nosso personagem
  //Para a direita
  if (keyIsDown(RIGHT_ARROW)) {
      xpersonagem += 4;
  }
    
     //Para a esquerda
  if (keyIsDown(LEFT_ARROW)) {
      xpersonagem -= 4;
  }
    
  //Pulo do personagem
    if (keyIsDown(UP_ARROW) && (! pulo) ){ 
		pulo = true; 
		pulof = 0;	
	}
    
	if (pulo) {
	  pulof++; 
		// movimenta o pulo / tiro 
		ypulo = 0.5*(pulof)*(pulof - 30);
		//Caso o personagem saia da tela 
		if (ypulo > 0) {
			pulo = false;
			ypulo = 0;
        }
    }
  
  //Limitando paredes do nosso cenário
  if(xpersonagem > width){
    xpersonagem = width;
  }
  if(xpersonagem < 25){
    xpersonagem = 25;
  }
  // Criando item para o personagem pegar que cai de cima
  image(certo[f], xitem, yitem, 100, 60);
    
  //Queda do item
    yitem += 1;
    
    if(yitem > height){
      xitem = random(0, 300);
      yitem = 0;
      f = parseInt(random(0,13))
    }
    
    //Obstaculo
    image(obstacle[h], xobs1, yobs1, 100, 60);
    
  //Queda do obstaculo
    yobs1 += 1;
    
    if(yobs1 > height){
      xobs1 = random(30, 300);
      yobs1 = 0;
      h = parseInt(random(0,11))
    }
    dist1 = dist(xpersonagem + 20 ,ypersonagem + ypulo,xobs1 + 50 ,yobs1 + 30);
    image(obstacle[g], xobs2, yobs2, 100, 60);
    
  //Queda do obstaculo
    yobs2 += 1;
    
    if(yobs2 > height){
      xobs2 = random(30, 300);
      yobs2 = 0;
      g = parseInt(random(0,11))
    }
    dist2 = dist(xpersonagem + 20,ypersonagem + ypulo,xobs2 + 50 ,yobs2 + 30);
    image(obstacle[o], xobs3, yobs3, 100, 60);
    
  //Queda do obstaculo
    yobs3 += 1;
    
    if(yobs3 > height){
      xobs3 = random(30, 300);
      yobs3 = 0;
      o = parseInt(random(0,11))
    }
    dist3 = dist(xpersonagem + 20,ypersonagem + ypulo,xobs3 + 50 ,yobs3 + 30);
    if(dist1 < 30){
      xobs1 = random(30, 350);
      yobs1 = - random(100,1300) ;
      vidas -= 5 ;
    }
    if(dist1 < 30){
      xobs2 = random(30, 350);
      yobs2 = - random(100,1300) ;
      vidas -= 5 ;
    }
    if(dist2 < 30){
      xobs2 = random(30, 350);
      yobs2 = - random(100,1300) ;
      vidas -= 5 ;
    }
    
  //Distancia entre o personagem e o item
  d = int(dist(xpersonagem, ypersonagem + ypulo, xitem, yitem));
    
  if (d < 25) {
      //  Voltando o item para a altura 0
        xitem = random(20, 310);
        yitem = 0;
  //Contador de pontos que vai entrar na condição de vitória
        pontos += 10;
    f = parseInt(random(0,13))
    }
    
  //Condicao para o tiro aos obstaculos 1 e 2
  if (keyIsDown(32) && ed === false) {
    xtiro = xpersonagem;
    ytiro = ypersonagem + ypulo;
    ed = true;
  }
  if (ed === true) {
    ytiro -= 5;
    //Imagem do tiro
    image(img, xtiro, ytiro, 40, 40);
  }
      
  //Distancia entre o tiro e os obstaculos
      dtiro1 = dist(xtiro , ytiro , xobs1 , yobs1);
      dtiro2 = dist(xtiro , ytiro , xobs2 , yobs2);
      dtiro3 = dist(xtiro , ytiro , xobs3 , yobs3);
      if(dtiro1 < 25 || ytiro < 0){
       if(dtiro1 < 25){
         xobs1 = random(30,350) 
         yobs1 = -random(30,350)
       }
        ed = false
      }
      if(dtiro2 < 25 || ytiro < 0){
       if(dtiro2 < 25){
         xobs2 = random(30,350) 
         yobs2 = -random(30,350)
       }
        ed = false
      }
      if(dtiro3 < 25 || ytiro < 0){
       if(dtiro3 < 25){
         xobs3 = random(30,350) 
         yobs3 = -random(30,350)
       }
        ed = false
      }
    
    //Parar a execução da função
    return; 
}

  //Game Over
  function endgame(){
    //Condicao de derrota
      clear();
      frameRate(25);
      background(214, 102, 21);
      imageMode(CENTER);
      // Imprimindo mensagem de game over
      fill(255, 255, 255);
      textAlign(CENTER);
      textFont("Times New Roman");
      textSize(30);
      text("Que pena, você foi reprovado!" + "\n" + "Tente   novamente" + "\n " + "Sua pontuação: " + pontos, 200, 150);
      
      //Imagem do jogador morrendo
      image(personagem2[j], 200, 300, 150, 150);
      j++;
      if(j >= 15)
        j = 0;
    
    
    return;
  }

  //Vitoria
  function victory(){
    background(0);
   //Condicao de vitoria do jogo
    if(pontos >= 300){
      // Imprimindo esse contador de pontos na tela
      fill(random(100, 255), random(100, 255), random(100, 255) );
      textSize(30);
      textAlign(CENTER);
      text("Parabéns!!!" + "\n" + "Você salvou o semestre!" , 200, 200);
    }
    
    //Para a função não executar mais
    return;
  }
  
//Executa apenas uma vez
function setup() {
  createCanvas(400, 400);
  xitem = random(0,400);
  yitem = random(0,400);
  xobs1 = random(30,350)
  yobs1 = -random(30,100)
  xobs2 = random(30,350)
  yobs2 = -random(30,100)
  xobs3 = random(30,350)
  yobs3 = -random(30,100)

  for( i = 0; i < qobs; i++){
    xobs[i] = random(0 , 400);
    yobs[i] = -random(0 , 400);
  }
  
  frameRate(60);
}

//Controla as passagens do jogo
function keyPressed() {
  if (keyCode === ENTER){
    tela = true;
  }
  if (keyCode === SHIFT) {
    inicio = true;
  }
  if (keyCode === CONTROL) {
    tutorial = true;
    som.loop();
  }
}

//Executa constantemente
function draw() {
  telainicial();
  if(tela === true){
    menu();
    if(inicio === true){
      intro();
      if(tutorial === true){
        if(vidas > 0){
          if(pontos >= 0 && pontos < 100){
          fase1();
          }
          if(pontos >= 100 && pontos < 200){
            fase2();
          }
          if(pontos >= 200 && pontos < 300){
            fase3();
          }
          if(pontos >= 300){
            victory();
            som.stop();    
          }
          
          //Contando tempo do jogo
    if(frameCount % 60 === 0){
      tempo++;
    }
    
   if(tempo >= 60){
      tempo = 0;
      minutos++;
   }
      
    // Imprimindo esse contador de pontos na tela
      fill(0);
      textSize(20);
      text(" Tempo: " + minutos + " min " + tempo + " seg" + "\n" + " Pontos: " + pontos + "\n" + " Vidas : " + vidas , 0, 30);
        }
        else{
          endgame();
          som.stop();  
        }
      }
    }
  }
}
