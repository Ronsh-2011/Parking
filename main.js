

canvas = document.getElementById("#myCanvas");
ctx = canvas.getContext("2d");

roverwidth = 65;
roverheight = 100;

bgimg = "parkingLot.jpg";
roverimage = "car2.png";

rover_X = 200;
rover_Y = 200;
 
function add(){
    bgimgtag  = new Image();
    bgimgtag.onload = upbg;
    bgimgtag.src = bgimg;
    
    rimgtag  = new Image();
    rimgtag.onload = uprover;
    rimgtag.src = roverimage;
}
function upbg(){
    ctx.drawImage(bgimgtag,0,0,canvas.width,canvas.height);
}
function uprover(){
    ctx.drawImage(rimgtag,rover_X,rover_Y,roverwidth,roverheight);
}

window.addEventListener("keydown",ky);
function ky(e) {
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == "38") {
up();
console.log("up");
}

if(keyPressed == "40") {
    down();
    console.log("down");
}

if(keyPressed == "37") {
    left();
    console.log("left");
}

if(keyPressed == "39") {
    right();
    console.log("right");
}

}

function up() {
 
if (rover_Y >=0) {
    rover_Y = rover_Y - 10;
    console.log("when up arrow is pressed, X = "+ rover_X + ", Y = "+rover_Y);
upbg(); 
uprover();
}

}

function down() {
 
    if (rover_Y <=300) {
        rover_Y = rover_Y + 10;
        console.log("when down arrow is pressed, X = "+ rover_X + ", Y = "+rover_Y);
    upbg(); 
    uprover();
 }
    
}
    
function left() {
 
    if (rover_X >=0) {
        rover_X = rover_X - 10;
        console.log("when left arrow is pressed, X = "+ rover_X + ", Y = "+rover_Y);
    upbg(); 
    uprover();
    }
    
    }
    
    function right() {
 
        if (rover_X <=500) {
            rover_X = rover_X + 10;
            console.log("when up arrow is pressed, X = "+ rover_X + ", Y = "+rover_Y);
        upbg(); 
        uprover();
        }
        
        }
        