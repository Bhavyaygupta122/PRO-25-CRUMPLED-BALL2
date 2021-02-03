
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(70,1000,20,100);
	groundObject=new ground(width/2,665,width,20);
	dustbinObj=new Dustbin(1200,655);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paper.display();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW) {	
	Matter.Body.applyForce(paper.body,paper.body.position,{x:17,y:-24});	
	}
}
