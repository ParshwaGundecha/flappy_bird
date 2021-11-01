var Background,BackgroundImg;
var obstacle1;
var obstacle2;
var bird,birdImg;
var score=0;
var btn1;
var logo;

var gameState=PLAY;
var PLAY;
var END;

function preload(){
 birdImg=loadImage("bird.png");    
 BackgroundImg=loadImage("background.jpg");    
}

function setup(){
   
createCanvas(700,590);

Background=createSprite(390,320);
Background.addImage(BackgroundImg);
Background.scale=3;

bird=createSprite(90,300,20,20);
bird.addImage(birdImg);
bird.scale=0.21;
bird.velocityY=0;

obstacle1=createSprite(400,80,50,300);
obstacle1.velocityX=0;
obstacle1.shapeColor="green";

obstacle2=createSprite(400,520,50,300);
obstacle2.velocityX=0;
obstacle2.shapeColor="green";

}

function draw(){
 background('skyblue');

 textSize(20);
 text("Score:"+score,590,18);
 

   if(keyDown("space") || touches.lenght<0){
    bird.velocityY+=0;
    obstacle1.velocityX=-4;
    obstacle2.velocityX=-4;
    
   }
   
   if(keyDown("space")){
      bird.velocityY=-5;
    }
     bird.velocityY+=1

    if(obstacle1.isTouching(bird) || obstacle2.isTouching(bird)){
      obstacle1.velocityX=0;
      obstacle2.velocityX=0;
      bird.velocityY=0;
      gameState=END;
      btn1=createImg("restart.png");
      btn1.position(350,290);
      btn1.size(60,40)
      btn1.mousePressed(gameOver);
      bird.bounceOff(obstacle1);
      bird.bounceOff(obstacle2);
      
      
    }

    if(frameCount%150===0 ){
      obstacle1=createSprite(width+40,100,50,300);
      obstacle1.velocityX=-3;
      obstacle1.shapeColor="green";
  
      if(obstacle1.y===150){
        obstacle1.y=Math.round(random(100,200));
      }
  
      obstacle2=createSprite(width+40,500,50,300);
      obstacle2.velocityX=-3;
      obstacle2.shapeColor="green";
  
      if(obstacle2.y==500){
        obstacle2.y=Math.round(random(500,600));
      }
      score=score+5; 
      
     }
drawSprites();
}

function gameOver(){
  location.reload();
}