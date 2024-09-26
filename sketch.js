var trex,trexCorrendo,chao,imagemChao,subchao,imagemNuvem,cacto, escolherCacto,imagemFim,imagemReiniciar;


function gerarCactos(){
  if(frameCount % 60 == 0){
    cacto = createSprite(600,165,10,40)
    cacto.velocityX = -3
    escolherCacto = Math .round(random(1,6))
    
    switch(escolherCacto){
      case 1 : cacto.addImage(imagemCacto1)
               break;
      case 2 : cacto.addImage(imagemCacto2)
               break;         
      case 3 : cacto.addImage(imagemCacto3)
               break;         
      case 4 : cacto.addImage(imagemCacto4)
               break;   
      case 5 : cacto.addImage(imagemCacto5)
               break;   
      case 6 : cacto.addImage(imagemCacto6)
               break;   
        default : break;
        
        
      imagemFim = loadImage("gameOver.png")
        imagemReiniciar = loadImage("restart.png")
        
   }
cacto.scale = 0.4
cacto.lifetime = 300;
grupoDeCactos.add(cacto);

    
 }
}


var imagemCacto1, imagemCacto2,imagemCacto3,imagemCacto4,imagemCacto5,imagemCacto6

const jogar = 1;
const encerrar = 0;
var estadoJogo = jogar;





function preload(){
  trexCorrendo = loadAnimation("trex1.png","trex2.png","trex3.png")
  
  
  trexColidiu = loadAnimation("trex_collided.png")
  
  imagemChao = loadImage("ground2.png")
  imagemNuvem = loadImage("cloud.png")
  
  imagemCacto1 = loadImage("obstacle1.png")
  imagemCacto2 = loadImage("obstacle2.png")
  imagemCacto3 = loadImage("obstacle3.png")
  imagemCacto4 = loadImage("obstacle4.png")
  imagemCacto5 = loadImage("obstacle5.png")
  imagemCacto6 = loadImage("obstacle6.png")
  
  
 
  
  
}


function setup() {
  createCanvas(600,200)
  
  trex = createSprite(50,100,20,40)
  trex.addAnimation("correndo",trexCorrendo)
  trex.addAnimation("colidiu",trexColidiu)
  trex.scale = 0.5
  
  chao = createSprite(200,180,500,10);
  chao.addAnimation("chao",imagemChao)
  
  subchao = createSprite(200,190,500,10)
  subchao . visible = false
  tempoJogo = 0;
  
  fimDeJogo = createSprite(300,80,30,30)            fimDeJogo.addAnimation("fimdejogo",imagemFim)
  
  fimDeJogo.scale = 0.5
  
  

  reiniciar = createSprite(300,120,30,30)
 reiniciar.addAnimation("reiniciar",imagemReiniciar)
  reiniciar.scale = 0.5
  
  grupoDeCactos = new Group();
  grupoDeNuvens = new Group();

}

function draw() {
  background(180)
  
  text("Tempo: " + tempoJogo,500,30)
  tempoJogo = tempoJogo + Math.round(frameCount / 60)

  if (estadoJogo == jogar){
       tempoJogo = tempoJogo + Math.round(frameCount / 60)
    
    chao.velocityX = -2
    
    if(chao.x < 0){
      chao.x = chao.width / 2
    }
    
    if(keyDown("space") && trex.y > 161){
      trex.velocityY = - 10
    }
     
    trex.velocitY = trex.velocityY + 0.5
    gerarNuvens()
    gerarCactos()
    
    
 
}else if(estadoJogo == encerrar){
  chao.velocityX = 0  
  grupoDeNuvens.setVelocityXEach(0);
   grupoDeCactos.setVelocityXEach(0);
  grupoDeNuvens.setLifetimeEach(-1);
  grupoDeCactos.setLifetimeEach(-1);
    trex.changeAnimation("colidiu",trexColidiu)
  trex.velocityY = 0;
  }
  trex.collide(subchao)
  
  
  
  
  chao.velocityX = -2
  
  
  if(chao.x < 0){
    
    chao.x = chao.width / 2
    
    chao.x = 200
  }
  
  if(keyDown("space") && trex.y > 161){
    trex.velocityY = -10
    
  }
  trex.velocityY = trex.velocityY + 0.5
  trex.collide(subchao)
  
  gerarNuvens()
  
  drawSprites()
}


function gerarNuvens(){
  if(frameCount % 60 == 0){
    nuvem = createSprite(600,100, 50, 10)
    nuvem.velocityX = -3
    nuvem.addAnimation("nuvem passando", imagemNuvem)
    nuvem.y = Math. round(random(60,100))
    
    
    nuvem.depth = trex.depth
    trex.depth = trex.depth +1
    
    nuvem.scale = 0.4
    nuvem.lifetime = 300;
    
  }
  
}








