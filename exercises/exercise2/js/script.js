/**************************************************
exercise-03-dodge-em
Isimbi Malika Kabagema

This project is about catching/buying time in a colourful galaxy. The user(the little alien creature- Malia) is running out of time and trying to buy as much time as she can by catching the little time icons.
**************************************************/
let bg = {
  r:0,
  g:0,
  b:0,
};

let alien = {
  x:250,
  y:250,
  widthSize:50,
  heightSize:55,
  fill: {
    r:131,
    g:204,
    b:86,
  }
};

// This is to display the stars in the galaxy.
let starsAmount = 500;

// These are time icons that Malia the alien has to catch.
let timeImage1 = {
x:0,
y:0,
};
let timeImage2 = {
x:0,
y:0,
};
let timeImage3 = {
x:0,
y:0,
};
let timeImage4 = {
x:0,
y:0,
};

// This helps to display the time icons in the canvas.
function preload() {
  timeImage1 = loadImage("assets/images/timeicon1.png");
  timeImage2 = loadImage("assets/images/timeicon2.png");
  timeImage3 = loadImage("assets/images/timeicon3.png");
  timeImage4 = loadImage("assets/images/timeicon4.png");
}

// setup()
//
// This is the canvas of the colourful galaxy.
function setup() {
createCanvas(500,500);
}

// draw()
//
//The galaxy, Malia and the time icons are being drawn here.
function draw() {

// the actual galaxy being drawn.
background(bg.r,bg.g,bg.b);

bg.r= map(mouseX,0,width,140,200);
bg.g= map(mouseX,0,width,50,200);
bg.b= map(mouseY,0,height,50,255);


image(timeImage1,50,100,50,50);
image(timeImage2,50,250,50,50);
image(timeImage3,50,400,50,50);
image(timeImage4,50,500,50,50);

// This helps Malia move around.
alien.x = mouseX;
alien.y = mouseY;

// This is the little alien creature, Malia.
fill(alien.fill.r,alien.fill.g,alien.fill.b);
noStroke();
ellipse(alien.x,alien.y,alien.widthSize,alien.heightSize);

}
