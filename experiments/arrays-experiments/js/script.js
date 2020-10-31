"use strict";

/**************************************************
arrays-experiments
Isimbi Malika Kabagema


**************************************************/
// let school = [];
// let schoolSize = 400;
// the fishes.
// let fish1;
// let fish2;
// let fish3;
// let fish4;

// let soliloquy = [
//   `to be or not to be`,
//   `that is the question.`,
//   `whether 'tis nobler in the mind`,
//   `to suffer the slings and arrows`,
//   `of outrageous fortune`,
//   `or to take arms`,
//   `against a sea of sorrows`,
//   `and by opposing end them.`,
// ];
//
// let currentIndex = 0;

// let circle = {
//   x: 0,
//   y: 0,
//   size: 100,
//   trail: [],
//   trailSize: 20,
// };

let images = [];
let displayImage;

function preload() {
  images[0] = loadImage(`assets/images/clown-0.png`);
  images[1] = loadImage(`assets/images/clown-1.png`);
  images[2] = loadImage(`assets/images/clown-2.png`);
  images[3] = loadImage(`assets/images/clown-3.png`);
  images[4] = loadImage(`assets/images/clown-4.png`);
  images[5] = loadImage(`assets/images/clown-5.png`);
  images[6] = loadImage(`assets/images/clown-6.png`);
  images[7] = loadImage(`assets/images/clown-7.png`);
  images[8] = loadImage(`assets/images/clown-8.png`);
  images[9] = loadImage(`assets/images/clown-9.png`);
}
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600);

  displayImage = random(images);

  // textAlign(CENTER,CENTER);
  // textSize(32);
  // fill(255);

  //
  // // Create four little fishies, at random positions.
  //
  // for (let i = 0; i < schoolSize; i++) {
  //   school[i] = createFish(random(0, width), random(0, height));
  // }
}

// createFish(x,y)
//Creates a new JavaScript object describing a fish and returns it
// function createFish(x, y) {
//   let fish = {
//     x: x,
//     y: y,
//     size: 50,
//     vx: 0,
//     vy: 0,
//     speed: 2,
//   };
//   return fish;
// }

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  push();
  imageMode(CENTER);
  image(displayImage, width/2, height/2);
  pop();

//   circle.x = mouseX;
//   circle.y = mouseY;
//
// for (let i = 0; i < circle.trail.length; i++) {
//   let position = circle.trail[i];
//   ellipse(position.x, position.y, circle.size);
// }
//   ellipse(circle.x, circle.y, circle.size);
//
//   let newTrailPosition = {
//     x: circle.x,
//     y: circle.y,
//   };
//
//   circle.trail.push(newTrailPosition);
//
//   if (circle.trail.length > circle.trailSize) {
//     circle.trail.shift();
//   }

  // text(soliloquy[currentIndex], width/2, height/2);
  //
  // for (let i = 0; i < school.length; i++) {
  //   moveFish(school[i]);
  //   displayFish(school[i]);
  // }
}
//
// //moveFish(fish)
// //chooses whether the given fish changes direction and moves it
// function moveFish(fish) {
//   //choose whether to change direction
//   let change = random(0, 1);
//   if (change < 0.05) {
//     fish.vx = random(-fish.speed, fish.speed);
//     fish.vy = random(-fish.speed, fish.speed);
//   }
//
//   // move ze fish
//   fish.x += fish.vx;
//   fish.y += fish.vy;
//
//   // constrain fish to stay in canvas
//   fish.x = constrain(fish.x, 0, width);
//   fish.y = constrain(fish.y, 0, height);
// }

// displayFish(fish)

// function displayFish(fish) {
//   push();
//   fill(227, 145, 64);
//   noStroke();
//   ellipse(fish.x, fish.y, fish.size);
//   pop();
// }
//
function mousePressed() {
  // currentIndex += 1;
  //
  // if (currentIndex === soliloquy.length) {
  //   currentIndex = 0;
  // }
//   let fish = createFish(mouseX, mouseY);
//   school.push(fish);
 }
