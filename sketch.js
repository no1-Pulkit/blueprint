
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

	


function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

stone1 =new Stone(800,650,40)
stone2 =new Stone(900,700,40)
hammer1 =new Hammer(970,740)
rubber1 =new Rubber(760,800)
plane1 =new Plane(950,850,40,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone1.display()
  stone2.display();
  hammer.display()
  rubber.display()
  Plane.display()
  drawSprites();
 
}



