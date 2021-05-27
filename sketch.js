
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1,log2,log3,gro1,ball1,Ig;

function preload()
{
	Ig=loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	log1 = new log(480,610,20,120);
	log3 = new log(720,610,20,120);
	log2 = new log(600,660,260,20);
	gro1 = new ground();
	ball1 = new ball(100,600,70,60);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(400); 
  log1.display();
  log3.display();
  log2.display();

  gro1.display();
  ball1.display();
  imageMode(CENTER);
  image(Ig,600,540,300,300);




  
  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.ba,ball1.ba.position,{x:60,y:-120});
		
	}
}



