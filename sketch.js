var black,white,green,purple,blue,yellow;

function setup() {
  createCanvas(600,400);

  white=createSprite(50, 200, 60, 100);
  black=createSprite(550, 200, 80, 50);

  black.shapeColor="black";
  white.shapeColor="white";

  black.debug=true;
  white.debug=true;
 
  black.velocityX=-4;
  white.velocityX=4;
  
}

function draw() {
  background("lightblue");
  
  bounceOffBySwapnil(black,white);
  
  drawSprites();
}

function bounceOffBySwapnil(a,b){
if(a.x-b.x<a.width/2+b.width/2 &&
  b.x-a.x<b.width/2+a.width/2){
  a.velocityX=a.velocityX*(-1);
  b.velocityX=b.velocityX*(-1);
  }
}




