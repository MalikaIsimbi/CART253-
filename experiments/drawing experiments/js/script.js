/**************************************************
Template p5 project
Pippin Barr

Experimenting with p5's drawing and color functions.

Drawing a fading circle (illusion of a dimension)
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(500,500);

// Set the background to yellow
background(255,195,50);

// Draw a flesh-colored ellipse
fill(250,200,200);
ellipse(250,250,200,200);

// Draw the dark circle (void)
strokeWeight(20);
circle(250,250,100,100);
}

// draw()
//
// Description of draw() goes here.
function draw() {

}
