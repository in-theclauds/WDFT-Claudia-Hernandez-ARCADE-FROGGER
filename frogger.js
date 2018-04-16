window.onload = function() {

var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext('2d');

//frogger image\\
var frog= new Image(); frog.src ="./Images/reg-fr.png";
//variables drawing frog on canvas\\
var sx = 0;
var sy =0;
var swidth = 50;
var sheight = 50;
var x= 280;
var y= 552;
var width= 55;
var height= 55;

//pressed buttons---set to false so they can be activated after pressing\\
var rightPressed = false;
var leftPressed = false;
var upPressed= false;
var downPressed = false;


//event listener to see when buttons have been pressed\\
document.addEventListener("keydown", "keyDownHandler", false);
document.addEventListener("keyup", "keyUpHandler", false);

//function that runs when keys are pressed--when pressed keys turn to true, when released, keys are set to false           \\
function keyDownHandler(e) {
  if(e.keyCode == 39) {rightPressed = true;}
  if(e.keyCode == 37) {leftPressed = true;}
  if(e.keyCode == 38) {upPressed = true;}
  if(e.keyCode == 40) {downPressed = true;}
};

function keyUpHandler(e) {
  if(e.keyCode == 39) {rightPressed = false;}
  if(e.keyCode == 37) {leftPressed = false;}
  if(e.keyCode == 38) {upPressed = false;}
  if(e.keyCode == 40) {downPressed = false;}
}

//function for drawing bg\\
function drawBackground () {
//GRASS
ctx.fillStyle = "purple";
// First 2 values specify x & y coord. of top left corner of rect.
ctx.fillRect(0, 540, 600, 45);
ctx.fillRect(0, 247, 600, 45);

//CAR LANES
// ctx.beginPath();
// ctx.setLineDash([5, 15]);
// ctx.moveTo(0, 50);
// ctx.lineTo(400, 50);
// ctx.stroke();
// ctx.strokeStyle = white; 
// /// NONE OF THESE ARE WORKING ^ OR BELOW
// ctx.beginPath();
// ctx.setLineDash([]);
// ctx.moveTo(0, 150);
// ctx.lineTo(400, 150);
// ctx.stroke();
// ctx.strokeStyle = white; 

//WATER
ctx.fillStyle ="blue";
ctx.fillRect(0, 0, 600, 245);
}

//CREATE DRAW FROG FUNCTION\\
function drawFrog() {
  ctx.drawImage(frog, sx, sy, swidth, sheight, x, y, width, height);
}

//calling our draw bg function to b executed \\ && //CALLING DRAW FROG TO BE EXECUTED\\
function draw(){
  drawBackground();
  drawFrog();

  requestAnimationFrame(draw);
} 
draw();



};
