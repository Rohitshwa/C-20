function setup() {
  createCanvas(1200,800);
  car = createSprite(1000, 200, 80, 30);
  car.shapeColor = "red";
  car.velocityX = -2;
  wall = createSprite(500,400,50,100)
  wall.shapeColor = "grey";
  car2 = createSprite(200,200,80,30);
  car2.shapeColor = "red";
  car2.velocityX = 2;
}

function draw() {
  background(0,0,0);  
  //car.x = World.mouseX;
  //car.y = World.mouseY;
  //console.log(car.x-wall.x);
  //if(car.x-wall.x < car.width/2+wall.width/2  &&  wall.x-car.x < car.width/2+wall.width/2 &&  car.y-wall.y < car.width/2+wall.width/2  &&  wall.y-car.y < car.width/2+wall.width/2){
    //car.shapeColor = "green";
    //wall.shapeColor = "green";
  //}
  //else{
    //car.shapeColor = "red";
    //wall.shapeColor = "grey";
  //}

  if (car.x-car2.x < car.width/2+car2.width/2  &&  car2.x-car.x < car.width/2+car2.width/2){
    car.velocityX = car.velocityX*(-1);
    car2.velocityX = car2.velocityX*(-1);
  }

  if (car.y-car2.y < car.height/2+car2.height/2  &&  car2.y-car.y < car.height/2+car2.height/2){
    car.velocityY = car.velocityY*(-1);
    car2.velocityY = car2.velocityY*(-1);
  }
  drawSprites();
}