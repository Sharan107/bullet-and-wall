var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,50);
  bullet.velocityX = speed;
  bullet.weight=weight;
  bullet.shapeColor=color(255);

  wall=createSprite(900,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background("black"); 
  
if (hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

  if (damage>10);{
    wall.shapeColor=color(255,0,0);
  }

  if (damage<10){
    wall.shapeColor=color(0,255,0);
  }
}

drawSprites();
}

function hasCollided(bullet,wall){

  bulletRightEdge=bullet.x + bullet.width;
  wallleftEdge=wall.x;

  if (bulletRightEdge>= wallleftEdge){

    return true;
  }
  return false;
}
