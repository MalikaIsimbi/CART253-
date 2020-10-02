/**************************************************
Conditionals experiments
Isimbi Malika Kabagema.

We're learning about conditionals, yay!
**************************************************/
// let caterpillar = {
//   x: 100,
//   y: 250,
//   segmentSize: 50,
// }
// let backgroundShade = 0;
// let circle = {
//   x:0,
//   y:250,
//   size:100,
//   speed:5,
// }

// let bg = {
//   r:0,
//   g:0,
//   b:0,
// }
 // let circle = {
 //   x: 0,
 //   y: 250,
 //   size: 100,
 //   vx: 0,
 //   vy: 0,
 //   ax: 0,
 //   ay: 0,
 //   acceleration: 0.1,
 //   maxSpeed: 10,
 // }

  let angle = 0;
  let rectScale = 0;

function setup() {
  createCanvas(500,500);
}


function draw() {

  background(125);

   push();
   fill(0,255,0);
   rectMode(CENTER);
   translate(width/2,height/2);
   rotate(angle);
   scale(rectScale);
   rect(0,0,100,100);
   pop();

   angle = angle + 0.01;
   rectScale = rectScale + 0.01;


  // push();
  // fill(255,0,0);
  // stroke(0,255,255);
  // strokeWeight(10);
  // rect(100,100,100,100);
  // pop();
  //
  // push();
  // fill(0,0,255);
  // stroke(0);
  // strokeWeight(10);
  // rect(300,100,100,100);
  // pop();

  // background(0);
  //
  // if (mouseX < circle.x) {
  //   circle.ax = -circle.acceleration;
  // }
  // else {
  //   circle.ax = circle.acceleration;
  // }
  // circle.vx += circle.ax;
  // circle.vx = constrain(circle.vx, -circle.maxSpeed, circle.maxSpeed);
  // circle.x += circle.vx;
  // circle.y += circle.vx;
  // ellipse(circle.x,circle.y,circle.size);

  // background(bg.r,bg.g,bg.b);
  // ellipse(circle.x,circle.y,circle.size);
}
//
// function mouseMoved() {
//   bg.r = random(0,255);
//   bg.g = random(0,255);
//   bg.b = random(0,255);
// }

  // background(0);
  // noStroke();
  // fill(100,200,100);

  // let x = caterpillar.x;
  // let numSegments = 10;
  // let segmentsDrawn = 0;
  //
  // while (segmentsDrawn < numSegments) {
  //  ellipse(x, caterpillar.y, caterpillar.segmentSize);
  //  x = x + 40;
  //  segmentsDrawn = segmentsDrawn + 1;
  //  // segmentsDrawn++;

  // let x = caterpillar.x;
  // let numSegments = 10;
  // for (let i = 0; i < numSegments: i++) {
  //   ellipse(x, caterpillar.y, caterpillar.segmentSize);
  // }
  // }

  // ellipse(x,caterpillar.y,caterpillar.segmentSize);
  // x = x + 40;
  //
  // ellipse(x,caterpillar.y,caterpillar.segmentSize);
  // x = x + 40;
  //
  // ellipse(x, caterpillar.y, caterpillar.segmentSize);
  // x = x + 40;
  //
  // ellipse(x, caterpillar.y, caterpillar.segmentSize);
  // x = x + 40;

  // if (mouseIsPressed) {
  //   background(255);
  // }
  // else {
  //   background(0);
  // }
  // background(backgroundShade);

  // circle.x += circle.speed;
 //  fill(255,255,255);
 // if (circle.x > width/3 && circle.x < 2 * width/3) {
 //     fill(255,0,0);
 // }
//   if (mouseX < width/2) {
//   fill(255,0,0);
// }
// else  {
//   fill(0,255,0);
// }
  // if (circle.x > width) {
  //   circle.speed = -circle.speed;
  // }
  // if (circle.x < 0) {
  //   circle.speed = - circle.speed;
  // }
  // if (mouseY < height/2) {
  //   fill(255,0,0);
  // }
  // if (mouseY > height/2) {
  //   fill(0,0,255);
  // }
  // ellipse(circle.x,circle.y,circle.size);
//
