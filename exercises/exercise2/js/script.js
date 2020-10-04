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

let alienShadow = {
  x:250,
  y:250,
  size:70,
  fill: {
    r:131,
    g:204,
    b:86,
  }
};

// This is to display the stars in the galaxy.
let starsAmount = 700;

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
let maliaImage = {
x:250,
y:250,
}

// This helps to display the time icons in the canvas.
function preload() {
  timeImage1 = loadImage("assets/images/timeicon1.png");
  timeImage2 = loadImage("assets/images/timeicon2.png");
  timeImage3 = loadImage("assets/images/timeicon3.png");
  timeImage4 = loadImage("assets/images/timeicon4.png");

  // This will help to display Malia, the alien.
  maliaImage = loadImage("assets/images/malia.png");
}

// setup()
//
// This is the canvas of the colourful galaxy.
function setup() {
createCanvas(windowWidth,windowHeight);

noCursor();
}

// draw()
//
//The galaxy, Malia and the time icons are being drawn here.
function draw() {

// the actual galaxy being drawn here.
background(bg.r,bg.g,bg.b);

// this is creating the colourful galaxy effect.
bg.r= map(mouseX,0,width,140,150);
bg.g= map(mouseX,0,width,50,150);
bg.b= map(mouseY,0,height,50,255);

// drawing the stars(points) in the galaxy.
for (let i = 0; i < starsAmount; i ++) {
  let x = random(0,width);
  let y = random(0,height);
  stroke(200);
  point(x,y);
}

// This helps Malia's shadow move around.
alienShadow.x = mouseX;
alienShadow.y = mouseY;

// This is Malia's shadow\halo, the green ellipse.
fill(alienShadow.fill.r,alienShadow.fill.g,alienShadow.fill.b);
noStroke();
ellipse(alienShadow.x,alienShadow.y,alienShadow.size);

// Malia the alien is being drawn here.
image(maliaImage,mouseX,mouseY,100,100);

// the four time icons are being drawn here.
image(timeImage1,0,0,100,100);
image(timeImage2,0,150,100,100);
image(timeImage3,0,300,70,70);
image(timeImage4,0,450,100,100);


}
