//LETRA MAIÚSCULA NO INÍCIO = NOME DE UMA CLASSE
class Jogador{
    constructor(){ //COLOCAR PARÂMETROS (COR, TAMANHO, VELOCIDADE) DO OBJETO
      
      //this É USADO PARA ADICIONAR OS ATRIBUTOS NO OBJETO
      this.imagem = loadImage("./jogo/imgJogo/jogador.png");
      this.posX = 260;
      this.posY = 290;
      this.velocidade = 5;
      this.largura = 60;
      this.altura = 100;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
    
    mova(){
       image(this.imagem,this.posX,this.posY,this.largura,this.altura);//COMANDOS PARA EXIBIR A IMAGEM
      
      //keyIsDown É PARA INDICAR A TECLA A SER PRECIONADA E O NÚMERO QUE ESTÁ ENTRE PARENTESES É O CÓDIGO DA TECLA
      if((keyIsDown(39)) && (this.xFinal<600)){
        this.posX += this.velocidade//MOVIMENTO E DIREÇÃO QUE O PERSONAGEM IRÁ REALIZAR
      }
      if((keyIsDown(37)) && (this.xInicial>0)){
        this.posX -= this.velocidade
      }
      
      ////mapeando as posições em que os objetos estão inseridos, com base em um plano cartesiano, em que, a parte de cima é o eixo x e equivale a 0, e a parte do canto esquerdo corresponde ao eixo y e equivale a 0.
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX
      this.xFinal = this.posX + this.largura
    }
  }