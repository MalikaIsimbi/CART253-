/**************************************************
Template p5 project
Isimbi Malika Kabagema

Experimenting with variables.
**************************************************/

let backgroundShade = 0;

let circle = {
  x: 250,
  y: 250,
  size: 200,
  speed: 2,
  // acceleration: 0.25,
  fill: 250,
};
// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(500,500);

}

// draw()
//
// Description of draw() goes here.
function draw() {
background(backgroundShade);

// circle.speed = random(-5,5);
 circle.x = circle.x + circle.speed;
// circle.y = random(0, height);
// circle.size = random(500,50);
// circle.speed = circle.speed + circle.acceleration;
ellipse(circle.x, circle.y, circle.size);

// let randomNumber = random();

circle.size = map(mouseY,0,height,0,500);
circle.fill = map(mouseX, 0,width, 0,255);
circle.x = constrain(circle.x, 0,width);
circle.y = constrain(circle.y, 0,height);

// circle.fill = random(100,250);
circle.fill = map(mouseX,0,width,0,255);
fill(circle.fill);


// console.log(`circle,x: ${circle.x}, circle,y: ${circle.y}`);
// console.log("circle.y:" + circle.y);

}
