var fixedRect,movingRect;
function setup() {
  createCanvas(1200,400);
  fixedRect=createSprite(400,100,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  movingRect=createSprite(400,800,80,20);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  //movingRect.velocityX=-2;
  movingRect.velocityY= -5;

  //fixedRect.velocityX=-2;
  fixedRect.velocityY=  2;
}

function draw() {
  background(0,0,0); 
  //movingRect.x=World.mouseX;
 // movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2) {
    //fixedRect.shapeColor="red";
    //movingRect.shapeColor="red";
    movingRect.velocityX= movingRect.velocityX*(-1);
    fixedRect.velocityX= fixedRect.velocityX*(-1);
  }
 if(movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2 &&
  fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2 ){

    movingRect.velocityY= movingRect.velocityY*(-1);
    fixedRect.velocityY= fixedRect.velocityY*(-1);
 }
  //console.log(movingRect.x-fixedRect.x);
  drawSprites();
}