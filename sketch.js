const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper, paperImg;
var dustbin, dustbinImg;
var lB, rB, bB;

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;
  
  paper = new Paper(200, 200, 20);

  ground = new Ground(width/2, 470, width, 20);

  lB = new Dustbin(635, 405, 20, 105);

  rB = new Dustbin(765, 405, 20, 105);

  bB = new Dustbin(700, 450, 150, 20);

	Engine.run(engine);
}

function draw() {
  background("255");

  Engine.update(engine);
  
  paper.display();

  ground.display();

  lB.display();

  rB.display();

  bB.display();

  drawSprites();
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position, {x : 70, y : -50});
  }
}