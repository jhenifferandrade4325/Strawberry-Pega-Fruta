//var É A VARIÁVEL
//LETRA MINÚSCULA NO INÍCIO = NOME DE UMA VARIÁVEL
var imgCenario;
var imgFrutas = []; //[] = CRIAR UMA LISTA, OU SEJA, ARMAZENAR VÁRIO ITENS A UMA VARIÁVEL.
var jogador;
var alimento = [];
var ponto = 0;
var somBomba;
var somFruta;
var telaAbertura;
var fim;
var vidas = 3;
var cont_tela = "INICIO";

//CARREGAR E EXIBIR AS IMAGENS ESCOLHIDAS
function preload(){
  
  //loadImage = CARREGAR AS IMAGENS
  imgCenario = loadImage("jogo/imgJogo/cenario.png");
  imgFrutas[0] = loadImage("jogo/imgJogo/morango.png");
  imgFrutas[1] = loadImage("jogo/imgJogo/cereja.png");
  imgFrutas[2] = loadImage("jogo/imgJogo/uva.png");
  imgFrutas[3] = loadImage("jogo/imgJogo/banana.png");
  imgFrutas[4] = loadImage("jogo/imgJogo/bomba.png");
  jogador = new Jogador();//CRIAR UM NOVO PERSONAGEM
  alimento[0] = new Frutas();//CRIAR UMA NOVA FRUTA
  alimento[1] = new Frutas();
  alimento[2] = new Frutas();
  alimento[3] = new Frutas();
  alimento[4] = new Frutas();
  somBomba = loadSound("jogo/audio/bomba.mp3")//CARREGAR ÁUDIO
  somFruta = loadSound("jogo/audio/som.fruta.mp3")
  telaAbertura = loadImage("./jogo/imgJogo/abertura.gif")
  fim = loadImage("./jogo/imgJogo/final.gif")
  
}

function setup() {
  createCanvas(600, 400).parent("jogo");
  //canvas É A TELA EM QUE OCORRERÁ A EXIBIÇÃO DO JOGO
}

function keyPressed(){
  if(keyCode == 13){
    cont_tela = "JOGO";
  }
  if(keyCode == 32){
    cont_tela = "INICIO";
  }
}

function draw() {//O QUE SERÁ EXIBIDO
  if (cont_tela == "INICIO") {
    Abertura();
  }
  else{
    if (cont_tela == "JOGO") {
      executarJogo();
      
    }
  if(cont_tela == "GAMEOVER"){
    Gameover();
    jogador = new Jogador;
    }
    if (cont_tela == "INICIO") {
      Abertura();
    }
}
}