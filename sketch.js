
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball=new Paper(50,625,10,10)
	floor=new Ground(350,659.5,700,34.5)
	box=new Bucket(600,625,50,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperball.display();
  floor.display();
  box.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed()
{
	if (keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paperball.body,papperball.body.position, {x:85,y:-85})
	}
}



