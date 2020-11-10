var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,l1,l2,l3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	h=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(h)
	helicopterSprite.scale=0.6

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

		packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, density:3, friction:2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 l1 = Bodies.rectangle( 400, 640 , 200 ,40, {restitution:0.3, density:3, friction:2, isStatic:true});
	World.add(world, l1);
	l2 = Bodies.rectangle( 300, 620 , 40 ,100, {restitution:0.3, density:3, friction:2, isStatic:true});
	World.add(world, l2);
	l3 = Bodies.rectangle( 500, 620 , 40 ,100, {restitution:0.3, density:3, friction:2, isStatic:true});
	World.add(world, l3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  rect(l1.position.x,l1.position.y,200,40)
  rect(l2.position.x,l2.position.y,40,100)
  rect(l3.position.x,l3.position.y,40,100)
  drawSprites();

  Engine.update(engine);

  keyPressed()
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Body.setStatic(packageBody,false)
  }
}



