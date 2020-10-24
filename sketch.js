var fixedRect
var movableRect




function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  movableRect = createSprite(500, 200, 20, 20);
  movableRect.shapeColor = "green";
  
 movableRect.velocityX = -1;
 movableRect.velociyY  = 0;
 fixedRect.velocityX = 1;
 fixedRect.velocityY = 0;

}

function draw() {
  background(255,255,255);  
  //movableRect.x = World.mouseX;
  //movableRect.y = World.mouseY;
  
  
  
  
  
  bounceOff();
  
  drawSprites();
  
}

function bounceOff() {
  if(
    (movableRect.x - fixedRect.x < movableRect.width/2 + fixedRect.width/2)
    &&
    (fixedRect.x - movableRect.x < movableRect.width/2 + fixedRect.width/2)
  )
  {
    movableRect.velocityX = movableRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }

  if(
    (movableRect.y - fixedRect.y < movableRect.height/2 + fixedRect.height/2)
    &&
    (fixedRect.y - movableRect.y < movableRect.height/2 + fixedRect.height/2)
  )
  {
    movableRect.velocityY = movableRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
}

function detectCollision() {

  if(
    (movableRect.x - fixedRect.x < movableRect.width/2 + fixedRect.width/2)
    &&
    (fixedRect.x - movableRect.x < movableRect.width/2 + fixedRect.width/2)
    &&
    (fixedRect.y - movableRect.y < movableRect.height/2 + fixedRect.height/2)
    &&
    (movableRect.y - fixedRect.y < movableRect.height/2 + fixedRect.height/2)
    
  )
    { 
    movableRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  
  
    }
    else {
      movableRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
    
  
    }

}
