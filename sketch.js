var car, wall;
var speed,weight;
function setup() {
  createCanvas(1000,400);

  thickness=random(22,83);
  speed=random(223, 321);
  weight=random(30, 52);

  car=createSprite(50,200,50,20);
  car.velocityX=speed;

  wall=createSprite(950,200,thickness,height/2);
}

function draw() {
  background(0);  

  if(hasCollided(car,wall)){
    car.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if (deformation>10){
      car.shapeColor=color(255,0,0);
      wall.shapeColor=color(255,0,0);
    }
    if(deformation<10){
      car.shapeColor=color(0,255,0);
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}
function hasCollided(movingRect,fixedRect){
  movingRectRight=movingRect.x+movingRect.width;
  fixedRectLeft=fixedRect.x;
  if(movingRectRight>=fixedRectLeft){
      return true;
  }else{
      return false;
  }
}