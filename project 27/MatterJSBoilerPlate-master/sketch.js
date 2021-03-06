var bob =newBob(50,200,20,20);
var bob =newBob(100,200,20,20);
var bob =newBob(150,200,20,20);
var bob =newBob(200,200,20,20);
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



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



