/**************************************************
Template p5 project
Isimbi Malika Kabagema

Experimenting with variables.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(windowWidth, windowHeight);
}

// draw()
//
// Description of draw() goes here.
function draw() {
background(mouseX,mouseY,0);
rectMode(CENTER);
rect(mouseX,mouseY,100,100);
}
