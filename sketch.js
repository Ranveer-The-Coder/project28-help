
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rock1,boy1,mango1,tree1
var r = r;
function preload()
{
	tree1 = loadImage('Plucking mangoes/tree.png')
}

function setup() {
	createCanvas(1550, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 rock1 = new Rock(190,490)
 boy1 = new boy(270,560,250,300)
 tree1 = new Tree(1120,380,50,50)
 ground1=new ground(650,650,1600,30)

 mango1=new mango(1042,233,10)
  
 mango2=new mango(1191,281,10)

 mango3=new mango(1144,167,10)

 mango4=new mango(960,303,10)

 mango5=new mango(1280,278,10)

 mango6=new mango(1075,315,10)

 sling1 = new sling(rock1.body,{x:190,y:486});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  console.log(mouseX)
  console.log(mouseY)

  imageMode(CENTER);
  //image(tree1,1120,380,600,600)

  detectCollision(rock1,mango1)
  detectCollision(rock1,mango2)
  detectCollision(rock1,mango3)
  detectCollision(rock1,mango4)
  detectCollision(rock1,mango5)
  detectCollision(rock1,mango6)
    
  rock1.display();
  boy1.display();
  //tree1.display();
  ground1.display();
  

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  sling1.display()
   
  
  drawSprites();
 
}

function mouseDragged(){

Matter.Body.setPosition(rock1.body,{x:mouseX,y:mouseY})


}

function mouseReleased(){


sling1.fly();

}

function detectCollision (Lrock,Lmango){
LmangoBodyPosition = Lmango.body.position
LrockBodyPosition = Lrock.body.position


var distance = dist(LrockBodyPosition.x,LrockBodyPosition.y,LmangoBodyPosition.x,LmangoBodyPosition.y)
if(distance<=Lmango.r+Lrock.r){

	Matter.Body.setStatic(Lmango.body,false)
}

}