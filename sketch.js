var bg,bgImg;
var player, shooterImg, shooter_shooting;
//Declare variable for zombie & for zombie Image


//Declare varible for 3 hearts


//declare variable to load 3 heart Image


//Declare variable for zombie group



function preload()
{
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bgImg = loadImage("assets/bg.jpeg")

  //Load heart Image
  

  

  //load zombie img
  

  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


   //creating sprites to depict lives remaining
   

    //creating group for zombies    
    
}

function draw() 
{
  background(0); 
  if(keyDown("UP_ARROW")||touches.length>0)
  {
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0)
  {
    player.y = player.y+30
  }

  if(keyWentDown("space"))
  {
    player.addImage(shooter_shooting)
  }
  else if(keyWentUp("space"))
  {
    player.addImage(shooterImg)
  }

//destroy zombie when player touches it


//calling the function to spawn zombies


drawSprites();
}



//creating function to spawn zombies
