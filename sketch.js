var fixedRect, movingRect,ghi,jkl;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ghi=createSprite(200,200,50,50);
  ghi.shapeColor="green";
  jkl=createSprite(400,200,50,50);
  jkl.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  isTouching(movingRect,ghi);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  isTouching(movingRect,jkl);
  isTouching(movingRect,fixedRect);
  drawSprites();
 /* if(isTouching()){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
   
    }
    else {
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
    }*/
  }
  

