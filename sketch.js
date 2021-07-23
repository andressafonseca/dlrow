const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world;
var object; 
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  object = Bodies.rectangle(200,100,50,50);
  World.add(world.object);
  console.log(object);
  console.log(world.position.x);
  console.log(world.position.y);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 50, 50);
}