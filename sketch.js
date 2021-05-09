
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball, ball2, ball3, ball4, ball5;
var std;
var th, th2, th3, th4, th5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	std = new Stand();

	//th = new Thread()

	ball = new Ball(200, 500);
	ball2 = new Ball(250, 500);
	ball3 = new Ball(300, 500);
	ball4 = new Ball(350, 500);
	ball5 = new Ball(400, 500);

	th = new Thread(ball.body , {x:200, y:115})
	th2 = new Thread(ball2.body , {x:250, y:115})
	th3 = new Thread(ball3.body , {x:300, y:115})
	th4 = new Thread(ball4.body , {x:350, y:115})
	th5 = new Thread(ball5.body , {x:400, y:115})

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);

  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  th.display();
  th2.display();
  th3.display();
  th4.display();
  th5.display();

	std.display();

  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}


