const START=0;
const PLAY=1;
const END=2;

var bg,formBg,gkImg;
var form,game;
var gameState=START;

function preload(){
bg=loadImage("../download.jpg");
formBg=loadImage("../download-_1_.png");
gkImg = loadImage("gkimage.jpg");
}

function setup() {
  createCanvas(displayWidth-10,displayHeight-200);
  //createSprite(400, 200, 50, 50);
  game = new Game();
  game.start();
}

function draw() {
 // background(bg);
// if(gameState===START){
//   game.start();
// }
 if(gameState===PLAY){
  game.play();
}
  drawSprites();
}