class Frutas{
    constructor(){
      //ADICIONAR OS ATRIBUTOS
      this.imagem = imgFrutas[int(random(0,4.9))]
      this.posX = random(0,600);
      this.posY = 0;
      this.velocidade = random(1,2 +ponto);
      this.largura = 50;
      this.altura = 50;
      this.yInicial = this.posY
      this.yFinal = this.posY + this.altura
      this.xInicial = this.posX
      this.xFinal = this.posX + this.largura
    }
    
    mova(){//MOVIMENTAR OS OBJETOS
          this.posY += this.velocidade;
          image(this.imagem,this.posX,this.posY,this.largura,this.altura)   //POSIÇÃO DO OBJETO
      this.yInicial = this.posY
      this.yFinal = this.posY + this.altura
    
    }
  }
  