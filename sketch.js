
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin;
var r;
var radius;

function preload()
{
	
}

function setup() {
	createCanvas(900,800);


	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
  
  paper = new Paper(700,240,50,50); 
  ground = new Ground(450,700,900,25);
  dustbin = new Dustbin(700,500,300,100);
  paper.debug = true;
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObect.body,position,{x:85,y:-85});
  }
}

