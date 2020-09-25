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

 eye1:{
   x:80,
   y:380,
   size:20,
   fill:0,
 },

  eye2:{
   x:120,
   y:380,
   size:20,
   fill:0,
},

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

  eye1:{
    x:420,
    y:80,
    size:20,
    fill:0,
  },

  eye2: {
    x:380,
    y:80,
    size:20,
    fill:0,
  },

  fill: {
    r:199,
    g:83,
    b:245,
  }

  }

let house = {
  x:250,
  y:250,
  size:40,
  biggerSize:6,
  smallerSize:4,
  maxSize: 450,
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
// The house perimeter and the aliens will be drawn here.
function draw() {

// This is the colourful wall.
background(bg.r,bg.g,bg.b);


bg.r= map(mouseX,0, width,20,255);
bg.r= map(mouseY,0, height,50,255);
bg.g= map(mouseX,0, width,0,255);
bg.b= map(mouseY,0, height,0,255);

// This is the house perimeter.
rectMode(CENTER);
fill(house.fill.r, house.fill.g, house.fill.b, house.alpha);
rect(house.x, house.y, house.size, house.size);
house.size += house.biggerSize;
house.size = constrain(house.size,0,house.maxSize);



// Alien1 (Perry)
alien1.x+=alien1.speed;
alien1.x = constrain(alien1.x,0,380);
fill(alien1.fill.r,alien1.fill.g,alien1.fill.b);
ellipse(alien1.x,alien1.y,alien1.width,alien1.height);

// Alien1's eyes.
fill(alien1.eye1.fill);
fill(alien1.eye2.fill);
alien1.eye1.x+=alien1.speed;
alien1.eye1.x = constrain(alien1.eye1.x,0,390);
alien1.eye2.x+=alien1.speed;
alien1.eye2.x = constrain(alien1.eye2.x,0,350);
ellipse(alien1.eye1.x,alien1.eye1.y,alien1.eye1.size);
ellipse(alien1.eye2.x,alien1.eye2.y,alien1.eye2.size);


// Alien2 (Lola)
alien2.x-=alien2.speed;
alien2.x = constrain(alien2.x,100,380);
fill(alien2.fill.r,alien2.fill.g,alien2.fill.b);
ellipse(alien2.x,alien2.y,alien2.width,alien2.height);

// Alien2's eyes.
fill(alien2.eye1.fill);
fill(alien2.eye2.fill);
alien2.eye1.x-=alien2.speed;
alien2.eye1.x = constrain(alien2.eye1.x,70,380);
alien2.eye2.x-=alien2.speed;
alien2.eye2.x = constrain(alien2.eye2.x,110,340);
ellipse(alien2.eye1.x,alien2.eye1.y,alien2.eye1.size);
ellipse(alien2.eye2.x,alien2.eye2.y,alien2.eye2.size);




}
