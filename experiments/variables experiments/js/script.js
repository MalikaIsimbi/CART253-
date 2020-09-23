/**************************************************
Template p5 project
Isimbi Malika Kabagema

Experimenting with variables.
**************************************************/

let backgroundShade = 0;

let circle = {
  x: 0,
  y: 250,
  size: 200,
  speed: 2,
  acceleration: 0.25,
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
circle.x = circle.x + circle.speed;
circle.speed = circle.speed + circle.acceleration;
ellipse(circle.x, circle.y, circle.size);

console.log(`circle,x: ${circle.x}, circle,y: ${circle.y}`);
// console.log("circle.y:" + circle.y);

}
