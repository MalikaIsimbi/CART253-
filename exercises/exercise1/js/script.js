/**************************************************
Ex.3: I like to move it move it!
Isimbi Malika Kabagema

This exercise is about two little sibling aliens, Perry and Lola, who live together in a colourful house and move around a lot around their house! They always seem to bump into each other!
**************************************************/
let bg = {
  r:0,
  g:0,
  b:0,
}

let alien1 = {
 x:100,
 y:400,
 size:100,
 speed:5,
 width:75,
 height:100,
 alpha:10,
 fill:{
   r:75,
   g:235,
   b:86,
 }
}

let alien2 = {
  x:400,
  y:100,
  size:100,
  speed:5,
  width:75,
  height:100,
  alpha:10,
  fill: {
    r:199,
    g:83,
    b:245,
  }
}

let house = {
  x:250,
  y:250,
  size:400,
  speed:2,
  width:400,
  height:400,
  alpha:100,
  fill: {
    r:214,
    g:117,
    b:26,
  }


}
// setup()
//
// This is the base of the house (canvas).
function setup() {
createCanvas(500,500);
noStroke();
}

// draw()
//
// Description of draw() goes here.
function draw() {

// This is the colourful wall.
background(bg.r,bg.g,bg.b);


bg.r= map(mouseX,0, width,20,255);
bg.r= map(mouseY,0, height,50,255);
bg.g= map(mouseX,0, width,0,255);
bg.b= map(mouseY,0, height,0,255);


// Alien1 (Perry)

ellipse(alien1.x,alien1.y,alien1.width,alien1.height);
fill(alien1.fill.r,alien1.fill.g,alien1.fill.b);

// Alien2 (Lola)

ellipse(alien2.x,alien2.y,alien2.width,alien2.height);
fill(alien2.fill.r,alien2.fill.g,alien2.fill.b);

// This is the house perimeter.
rectMode(CENTER);
rect(house.x, house.y, house.width, house.height);
fill(house.fill.r, house.fill.g, house.fill.b);
fill(house.alpha);



}
