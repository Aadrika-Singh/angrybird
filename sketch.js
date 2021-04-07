const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine, world;

var box1,ground,box2,pig1,stick1;

function setup(){
    createCanvas(1200,600);   
    engine=Engine.create();
    world=engine.world;    
    
    box1=new Box(700,520,70,70);
    box2=new Box(920,520,70,70);  
    
    ground=new Ground(600,height,1200,20);

    pig1=new Pig(810,550);

    stick1=new Stick(810,460,300,PI/2);
}
function draw(){
    background(200,70,300);
    Engine.update(engine);   
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    stick1.display();
}