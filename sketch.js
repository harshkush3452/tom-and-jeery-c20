
var garden,gardenImg;
var cat, cat_Running,catanime,catImg;
var mouse,mouseImg,mouseclapping,mouseanime;


function preload() {
gardenImg=loadAnimation("images/garden.png");

catanime=loadAnimation("images/cat1.png");
cat_Runnning=loadAnimation("images/cat2.png","images/cat3.png");
catImg=loadAnimation("images/cat4.png");
mouseImg=loadAnimation("images/mouse1.png");
mouseclapping=loadAnimation("images/mouse2.png","images/mouse3.png");
mouseanime=loadAnimation("images/mouse4.png");

}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here 
    garden=createSprite(200,200)  ;                               
    garden.addAnimation("garden",gardenImg);

    cat=createSprite(550,400,20,20);
    cat.addAnimation("cat",catanime);
    cat.scale=0.2;

    mouse=createSprite(170,400,10,10);
    mouse.addAnimation("mouse",mouseImg);
    mouse.scale=0.15;

    
}

function draw() {

    background("white");
   

   if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("catLastImg",catImg);
    cat.x=300;
    cat.scale=0.2;
    cat.changeAnimation("catLastImg");
    mouse.addAnimation("anime",mouseanime);
    mouse.scale=0.15;
    mouse.changeAnimation("anime");
   }
    
    drawSprites();
}
function pressed(){
if(keyDown===LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("running",cat_Running);
cat.changeAnimation("running");

mouse.addAnimaton("clapping",mouseclapping);
mouse.frameDelay=25;
mouse.changeAnimation("clapping");

}
}





