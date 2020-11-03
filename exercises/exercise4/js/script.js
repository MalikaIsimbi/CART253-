"use strict";

/**************************************************
04-age-of-aquariums
Isimbi Malika Kabagema

This exercise is about a square that converts sticks(lines) into squares when it comes in contact with them, given a specific amount of time. It is an abstract simulation.
**************************************************/
// sticks grouped together.
let stickSquad = [];
let stickAmount = 50;

// static on the canvas.
let staticAmount = 400;

// the fishes.
// let fish1;
// let fish2;
// let fish3;
// let fish4;


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600);

  // setUpObjects();

  // // Create sticks, at random positions.
  for (let i = 0; i < stickAmount; i++) {
    stickSquad[i] = createSticks(random(0, width), random(0, height));
  }
}

// createSticks (x,y)
//Creates a new JavaScript object describing a stick and returns it
function createSticks(x,y, width,height) {
  let stick = {
    x: x,
    y: y,
    size: 10,
    vx: 0,
    vy: 0,
    speed: 2,
    fill: {
      r: 0,
      g: 0,
      b: 0,
    }
  };
  return stick;
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  for (let i = 0; i < stickSquad.length; i++) {
    moveSticks(stickSquad[i]);
    displaySticks(stickSquad[i]);
  }
}

// moveSticks(stick)
//chooses whether the given fish changes direction and moves it.
function moveSticks(stick) {
  //choose whether sticks change direction
  let change = random(0, 5);
  if (change < 0.75) {
    stick.vx = random(-stick.speed, stick.speed);
    stick.vy = random(-stick.speed, stick.speed);
  }

  // move ze fish
  stick.x += stick.vx;
  stick.y += stick.vy;

  // constrain fish to stay in canvas
  stick.x = constrain(stick.x, 0, width);
  stick.y = constrain(stick.y, 0, height);
}

function displaySticks(stick) {
  // the sticks are  being drawn here.
  push();
  fill(stick.fill.r, stick.fill.g, stick.fill.b);
  // this is to generate colourful sticks.
  stick.fill.r = map(mouseX, 0, width, 130, 150);
  stick.fill.g = map(mouseX, 0, width, 50, 200);
  stick.fill.b = map(mouseY, 0, height, 70, 255);

  line(stick.x,stick.y,width,height);
  pop();
}

// function mousePressed() {
//   let fish = createFish(mouseX, mouseY);
//   school.push(fish);
// }

function displayStatic() {
  // Drawing the static in the matrix.
  for (let i = 0; i < staticAmount; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255,150,75);
    point(x, y);
  }
}
