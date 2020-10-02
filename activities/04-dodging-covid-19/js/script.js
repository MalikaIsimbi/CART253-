/**************************************************
04-dodging-covid-19
Isimbi Malika Kabagema

This is a fun simulation about dodging covid-19, if only it worked like that in real life!
**************************************************/
let covid19 = {
  x:0,
  y:250,
  size:100,
  vx:0,
  vy:0,
  speed:5,
  fill: {
    r:255,
    g:0,
    b:0,
  }
};

let bg = {
  r:4,
  g:89,
  b:13,
};

let user = {
  x:250,
  y:250,
  size: 130,
  fill: 255,
}

let staticAmount = 500;

// setup()
//
// Setup of the canvas where covid19 will be.
function setup() {
createCanvas(windowWidth, windowHeight);

covid19.y = random(0,height);
covid19.vx += covid19.speed;

noCursor();
}

// draw()
//
// Description of draw() goes here.
function draw() {
background(bg.r,bg.g,bg.b);

// display static.
let staticAmount = 500;
for (let i = 0; i < staticAmount; i++) {
  let x = random(0,width);
  let y = random(0,height);
  stroke(255);
  point(x,y);
}

// covid-19 movement.
covid19.x += covid19.vx;
covid19.y += covid19.vy;

if (covid19.x > width) {
  covid19.x = 0;
  covid19.y = random(0,height);
  }

// user movement.
user.x = mouseX;
user.y = mouseY;

// covid19 catcher.
let d = dist(user.x,user.y,covid19.x,covid19.y);
if (d < covid19.size/2 + user.size/2) {
  noLoop();
}

// Display covid19.
fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
noStroke();
ellipse(covid19.x, covid19.y,covid19.size);

// Display user.
fill(user.fill);
ellipse(user.x,user.y,user.size);


}
