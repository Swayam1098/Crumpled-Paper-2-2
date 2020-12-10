
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}


function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

bottomBase = new Wall(1200,645,200,15)
leftWall = new Wall(1090,565,20,180);
rightWall =new Wall(1310,565,20,180)

paper1 = new Paper(100,100,50)
ground = new Ground(710,657,1600,10)

Engine.run


	Engine.run(engine);
  
}


function draw() {
  background(0);
  paper1.display();
  leftWall.display();
  rightWall.display();
  bottomBase.display();
  ground.display();


 
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:45,y:-70})
	}
}



