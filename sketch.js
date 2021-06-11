
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var world, img, bgImg;
var paper1;
var gameState = "outside";

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

  engine = Engine.create();
	world = engine.world;

	groundObject = new ground(width/2,570,width,20);
	dustbinObj   = new dustbin(1000,550);

	paper1 = new Paper(230,300,45);
  

	Engine.run(engine);
  
}


function draw() 
{
  Engine.update(engine);
  rectMode(CENTER);
  background("#FFDEAD");
 
  groundObject.display();
  dustbinObj.display();
  paper1.display();

  

}

function keyPressed()
{
  if (keyCode === UP_ARROW && gameState === "outside")
  {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:45, y:-50});
    gameState = "inside"
  }

}
