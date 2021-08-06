const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,
block18,block19,block20,block16,block17;

var sling;

var ball;

function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(750,750,1500,20);
  block1 = new Box(900, 100, 70, 70);
  block2 = new Box(900, 100, 70, 70); 
  block3 = new Box(900, 100, 70, 70); 
  block4 = new Box(900, 100, 70, 70); 
  block5 = new Box(900, 100, 70, 70); 
  block6 = new Box(900, 100, 70, 70); 
  block7 = new Box(800, 100, 70, 70); 
  block8 = new Box(800, 100, 70, 70); 
  block9 = new Box(800, 100, 70, 70); 
  block10 = new Box(800, 100, 70, 70);
  block11 = new Box(800, 100, 70, 70);
  block12 = new Box(800, 100, 70, 70); 
  block13 = new Box(700, 100, 70, 70);
  block14 = new Box(700, 100, 70, 70); 
  block15 = new Box(700, 100, 70, 70); 
  block16 = new Box(700, 100, 70, 70); 
  block17 = new Box(700, 100, 70, 70); 
  block18 = new Box(700, 100, 70, 70); 
  block19 = new Box(700, 100, 70, 70); 
  block20 = new Box(700, 100, 70, 70);

  ball = new Ball(200,200,80,80)
  sling = new Sling(ball.body,{x:500,y:50});

  
}

function draw() {
  background(0,0,0);  
 Engine.update(engine);

  ground.display();
  block1.display();
  ball.display();
  block2.display();
  block3.display();
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()

 sling.display();

  
  //drawSprites();
  }
  
 
  function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }

