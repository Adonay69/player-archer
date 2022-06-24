var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      

	Engine.run(engine);
  
	var ball_options={
		iStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(10,10,10,ball_options)
	World.add(world,ball)
}
 function keyPressed() {
	 if (keyCode === UP_ARROW) {



	 }
	}
   function hForce()
   {
	   matter.body.applyForce(ball,{x:0,y:0},{x:0,y:-0.5});
   }   

function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(0,0,10,10)
  drawSprites();
 
}



