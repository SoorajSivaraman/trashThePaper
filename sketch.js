var paper, dustbin, ground;
var upArrowPressed = false;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let playSound;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  
	paper = new Paper(150, 673);
	dustbin = new Dustbin(600, 583, 180, 50);
	ground = new Ground(400, 675, 800, 10);

	Engine.run(engine);   
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
  fill(rgb(219, 194, 48));	
  textFont("Lucida Calligraphy");
  textSize(15);
  text("Press UP Arrow to throw the Crumpled Ball into the Dustbin.", 130, 200);
}
function keyPressed()
{ 		
  if(keyCode === UP_ARROW && upArrowPressed === false)
  { 
   Matter.Body.applyForce(paper.body, paper.body.position, {x : 60, y : -100});
  upArrowPressed = true;
  } 
}