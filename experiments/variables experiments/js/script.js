/**************************************************
Template p5 project
Isimbi Malika Kabagema

Experimenting with variables.
**************************************************/

let backgroundShade = 0;
let circleX = 250;
let circleY = 250;
let circleSize = 200;
let circleSpeed = 2;
let circleAcceleration = 0.25;
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
circleX = circleX + circleSpeed;
circleSpeed += circleAcceleration;
ellipse(circleX, circleY, circleSize);

}
