 const Engine=Matter.Engine;
 const World=Matter.World;
 const  Bodies=Matter.Bodies;

//var engine,world;

var particles=[];
var divisions=[];
//var particles=[particle];
var plinkos=[];
//var line;


var divisionHeight=200;



function setup() {
  createCanvas(700,700);

  engine = Engine.create();
  world = engine.world;

ground=new Ground(width/2,height,width,60);


division1=new Division(10,650,5,250);



division2=new Division(130,650,5,250);
division3=new Division(250,650,5,250);
division4=new Division(350,650,5,250);
division5=new Division(480,650,5,250);

division6=new Division(580,650,5,250);
division7=new Division(695,650,5,250);


for (var j=30;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75));
}


for (var j=75;j<=width;j=j+50){
  plinkos.push(new Plinko(j,175));
}


for (var j=30;j<=width;j=j+50){
  plinkos.push(new Plinko(j,275));
}

for (var j=75;j<=width;j=j+50){
  plinkos.push(new Plinko(j,375));
}

  
}

function draw() {
  background("black");  


Engine.update(engine);

ground.display();


for(var i=0;i<plinkos.length;i++){
  plinkos[i].display();
}


if(frameCount%50===0){
  particles.push(new Particle(random(100,690),10,10));
}


for(var j=0;j<particles.length;j++){
  particles[j].display();
}

division1.display();
division2.display();
division3.display();
division4.display();
division5.display();
division6.display();
division7.display();

  
}