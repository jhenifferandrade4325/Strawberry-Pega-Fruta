function executarJogo(){
    background(imgCenario);
    jogador.mova();
    alimento[0].mova();

  //DEIXA A MOVIMENTAÇÃO DAS FRUTAS DE FORMA ALEATÓRIA
 for(let i=0;i<alimento.length;i++){
   
   alimento[i].mova();
   
   //CONDIÇÃO PARA HAJA UM NOVO ALIMENTO
   if (alimento[i].posY > 400){

     alimento[i] = new Frutas (alimento[i].posY);
 }
   //CÓDIGO PARA QUE HAJA A COLISÃO ENTRE O JOGADOR E O OBJETO
  if(
    jogador.xInicial<alimento[i].xFinal &&
    jogador.xFinal>alimento[i].xInicial &&
    jogador.yInicial<alimento[i].yFinal &&
    jogador.yFinal>alimento[i].yInicial
  ){
   if( //COLISÃO COM A BOMBA 
    alimento[i].imagem == imgFrutas [4]
  ){
      alimento[i] = new Frutas  (alimento[i].posY)
      ponto = 0 //ZERAR PONTUAÇÃO
      vidas -= 1;
      somBomba.play();//EXIBIR SOM
     if(vidas == 0){
      cont_tela = "GAMEOVER";
     }
  }
  
  else{ //COLISÃO COM A FRUTA 
    alimento[i] = new Frutas (alimento[i].posY);
    ponto ++ //SOMAR PONTUAÇÃO
    somFruta.play();//EXIBIR SOM 
  }
  } //EXIBIR TEXTO COM A PONTUAÇÃO
   text("Morangos: " + ponto, 150,20)
   text("Vidas: " + vidas, 400,20)
 }
}