var bgImg,bg;
var catImg1,mouseImg1;
var tom,jerry;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadImage("cat4.png");
    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    bg = createSprite(400,400);
    bg.addImage(bgImg);
    //create tom and jerry sprites here
     tom = createSprite(100,100,50,50);
     tom.addImage(catImg1);

     jerry = createSprite(100,200,50,50);
     jerry.addImage(mouseImg1);
}

function draw() {

    background(bg);

    keyPressed();

//Write condition here to evalute if tom and jerry collide
if(tom.x - jerry.x < jerry.width/2 + tom.width/2 
   && jerry.x - tom.x < tom.width/2 + jerry.width/2
   && tom.y - jerry.y < jerry.height/2 + tom.height/2
   && jerry.y - tom.y < tom.height/2 + jerry.height/2){

  tom.addImage(catImg3);
  jerry.addImage(mouseImg3);
   }
 else {
       jerry.addImage(mouseImg1);
       tom.addImage(catImg1);


 }

    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here
    if(keyDown ("left")){
      tom.addAnimation(catImg2);
      jerry.addAnimation(mouseImg2);
      tom.velocityX = -5;
}   }
