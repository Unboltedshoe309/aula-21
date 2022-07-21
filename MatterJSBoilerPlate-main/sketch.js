//nao entendi o pq nao deu certo pq eu fiz exatamente oq foi pedido
// as propriedades da bola eu nao sei qual é pq ele nao fala, entao eu criei
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}
function setup() {
		createCanvas(800, 700);
	
		engine = Engine.create();
		world = engine.world;
	
		ball_otions={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
		
		}
		
	
		//Create the Bodies Here.
		Matter.Bodies.circle(20,20,5,ball_otions)
        groundObj=new ground(width/2,670,width,20),
		leftSide=new ground(1100,600,20,120),
		
		Engine.run(engine);
		

	}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.disply();
  drawSprites();
 
}



