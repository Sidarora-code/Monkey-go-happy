
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivaltime,score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(660, 370);
  
monkey=createSprite(70,300,20,50);
monkey.addAnimation("running",monkey_running);  
monkey.scale=0.1;  

  banaGroup=new Group(); 
  obsGroup=new Group();
  score=0;
 
}


function draw() {
background(200);
 drawSprites(); 

 ground = createSprite(400,330,900,20);
 ground.velocityX=-7;
 ground.x = ground.width /2;
 console.log(ground.x);  
  
monkey.collide(ground);
if(ground.x<0){
ground.x = ground.width /2;
}
ban()
  ob()
  
      if(keyDown("space")&& monkey.y >= 250  ) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8

  if(monkey.isTouching(banaGroup)){
  banaGroup.destroyEach();
    score=score+1;
  }
  
    if(monkey.isTouching(obsGroup)){
      monkey.collide(obsGroup);
      score=0;
   

  }
  stroke("black");
  textSize(20);
  fill("black");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.round(frameCount/frameRate());
  text("Survival Time:"+survivaltime,100,50);  
  
}

function ban(){
  if(World.frameCount%80===0){      
      banana =createSprite(400,200,20,20);
     banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(120,200));
    banana.velocityX=-7;
    banana.lifetime=55;
      banaGroup.add(banana);
    
  }

}

function ob(){
    if(World.frameCount%100===0){      
      obstacle=createSprite(500,305,20,20);
     obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-7;
     obstacle.lifetime=70;
      obsGroup.add(obstacle);
    }
}


