var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var myEngine,myWorld;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
	  //myWorld = myEngine.world

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	myEngine = Engine.create();
	myWorld = myEngine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(myWorld, starBody);
	
	Engine.run(myEngine);

}


function draw() {
  background(bgImg);
  Engine.update(myEngine);
  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if(star.y> 470 && starBody.position.y> 470 )  {
	  Matter.Body.setStatic(starBody,true);
	  

  }
 

  drawSprites();

}

function keyPressed() {
	//write code here
	console.log(fairy.x);
	if(keyCode === LEFT_ARROW ) {
		fairy.x = fairy.x -20;
	}
	if(keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x +20;
	}

	if(keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false);
	}

	
}
