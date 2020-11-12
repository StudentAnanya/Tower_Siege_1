const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2,ground3;
var polygon;
var slingshot;
var block1, block2, block3, block4, block5;
var block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15;
var block16, block17, block18, block19, block20;
var block21, block22, block23, block24, block25;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  polygon = new Polygon(200,380,20);
  slingshot = new SlingShot(polygon.body,{x:200, y:380});

  ground1 = new Ground(600,height,1200,20);
  ground2 = new Ground(600,480,300,20);
  ground3 = new Ground(1000,300,300,20);

  block1 = new Box(500,450,30,40);
  block2 = new Box(530,450,30,40);
  block3 = new Box(560,450,30,40);
  block4 = new Box(590,450,30,40);
  block5 = new Box(620,450,30,40);
  block6 = new Box(650,450,30,40);
  block7 = new Box(680,450,30,40);
  block8 = new Box(530,410,30,40);
  block9 = new Box(560,410,30,40);
  block10 = new Box(590,410,30,40);
  block11 = new Box(620,410,30,40);
  block12 = new Box(650,410,30,40);
  block13 = new Box(560,370,30,40);
  block14 = new Box(590,370,30,40);
  block15 = new Box(620,370,30,40);
  block16 = new Box(590,330,30,40);
  block17 = new Box(930,270,30,40);
  block18 = new Box(960,270,30,40);
  block19 = new Box(990,270,30,40);
  block20 = new Box(1020,270,30,40);
  block21 = new Box(1050,270,30,40);
  block22 = new Box(960,230,30,40);
  block23 = new Box(990,230,30,40);
  block24 = new Box(1020,230,30,40);
  block25 = new Box(990,190,30,40);

  Engine.run(engine);
}

function draw() {
  background(0); 
  ground1.display(); 
  ground2.display();
  ground3.display();
  fill("yellow");
  polygon.display();
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block22.display();
  block23.display();
  block24.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block25.display();
  fill("grey");
  block16.display();
  
  detectCollision(polygon,block1);
  detectCollision(polygon,block2);
  detectCollision(polygon,block3);
  detectCollision(polygon,block4);
  detectCollision(polygon,block5);
  detectCollision(polygon,block6);
  detectCollision(polygon,block7);
  detectCollision(polygon,block8);
  detectCollision(polygon,block9);
  detectCollision(polygon,block10);
  detectCollision(polygon,block11);
  detectCollision(polygon,block12);
  detectCollision(polygon,block13);
  detectCollision(polygon,block14);
  detectCollision(polygon,block15);
  detectCollision(polygon,block16);
  detectCollision(polygon,block17);
  detectCollision(polygon,block18);
  detectCollision(polygon,block19);
  detectCollision(polygon,block20);
  detectCollision(polygon,block21);
  detectCollision(polygon,block22);
  detectCollision(polygon,block23);
  detectCollision(polygon,block24);
  detectCollision(polygon,block25);
  textSize(25);
  text("Drag the Yellow Stone and Release it, to launch it towards the blocks...",200,50);
  stroke("lightgreen");
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function detectCollision(lpolygon,lbox){
  boxBodyPosition=lbox.body.position;
  polygonBodyPosition=lpolygon.body.position;
  
  distance = dist(polygonBodyPosition.x,polygonBodyPosition.y,boxBodyPosition.x,boxBodyPosition.y);
  if(distance<=lbox.width+lpolygon.r){
    Matter.Body.setStatic(lbox.body,false);
   }
  }