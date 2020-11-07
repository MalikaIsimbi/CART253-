"use strict";

/**************************************************
08-object-oriented-programming-activity
Isimbi Malika Kabagema


Here is a description of this template p5 project.
**************************************************/
let gravityForce = 0.0025;

let paddle;

let balls = [];
let numBalls = 5;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(300, 20);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-300, -100);
    let ball = new Ball(x, y);
    balls.push();
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(200);

  paddle.move();
  paddle.display(paddle);

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();
    }
  }
  // console.log(Paddle.js);
  // console.log(Ball.js);
}
