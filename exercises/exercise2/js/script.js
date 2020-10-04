/**************************************************
exercise-03-dodge-em
Isimbi Malika Kabagema

This project is about catching/buying time in a colourful galaxy. The little alien creature- Malia) is running out of time and trying to buy as much time as she can by catching the little time icons.The time icons are moving up and down (y) and Malia has to catch them all, one by one.
**************************************************/
let bg = {
  r:0,
  g:0,
  b:0,
};

let alienShadow = {
  x:250,
  y:250,
  size:50,
  fill: {
    r:131,
    g:204,
    b:86,
  }
};

// This is to display the stars in the galaxy.
let starsAmount = 700;

// These are time icons that Malia the alien has to catch.
let time1 = {
x:0,
y:0,
w:100,
h:100,
vx:0,
vy:0,
image:undefined,
speed:3,
};
let time2 = {
x:150,
y:0,
w:100,
h:100,
vx:0,
vy:0,
image:undefined,
speed:3,
};
let time3 = {
x:300,
y:0,
w:70,
h:70,
vx:0,
vy:0,
image:undefined,
speed:3,
};
let time4 = {
x:400,
y:0,
w:100,
h:100,
vx:0,
vy:0,
image:undefined,
speed:3,
};

// This is the image of Malia, the alien.
let malia = {
x:250,
y:250,
w:100,
h:100,
image:undefined,
}

// This helps to display the time icons in the canvas.
function preload() {
  time1.image = loadImage("assets/images/timeicon1.png");
  time2.image = loadImage("assets/images/timeicon2.png");
  time3.image = loadImage("assets/images/timeicon3.png");
  time4.image = loadImage("assets/images/timeicon4.png");

  // This will help to display Malia, the alien.
  malia.image = loadImage("assets/images/malia.png");
}

// setup()
//
// This is the canvas of the colourful galaxy.
function setup() {
createCanvas(500,500);

// This is helping the time icons to move up and down.
time1.y = random(0,height);
time1.vy += time1.speed;
time2.y = random(height,0);
time2.vy -= time2.speed;
time3.y = random(0,height);
time3.vy += time3.speed;
time4.y = random(height,0);
time4.vy -= time4.speed;

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

// This is to enable the time icons' movement.
time1.x += time1.vx;
time1.y += time1.vy;
time2.x += time2.vx;
time2.y += time2.vy;
time3.x += time3.vx;
time3.y += time3.vy;
time4.x += time4.vx;
time4.y += time4.vy;


// This is Malia's shadow\halo, the green ellipse.
fill(alienShadow.fill.r,alienShadow.fill.g,alienShadow.fill.b);
noStroke();
ellipse(alienShadow.x,alienShadow.y,alienShadow.size);

// Malia the alien is being drawn here.
image(malia.image,mouseX,mouseY,malia.w,malia.h);

// the four time icons are being drawn here.
image(time1.image,time1.x,time1.y,time1.w,time1.h);
image(time2.image,time2.x,time2.y,time2.w,time2.h);
image(time3.image,time3.x,time3.y,time3.w,time3.h);
image(time4.image,time4.x,time4.y,time4.w,time4.h);


}
