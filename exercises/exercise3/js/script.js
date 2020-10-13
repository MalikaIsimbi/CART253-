"use strict";

/**************************************************
exercise-03-love-actually
Isimbi Malika Kabagema

This exercise is about my undying love for the famous actor, Timothée Chalamet, who doesn't know I exist, hence the love being unrequited. The user, Malika, will be chasing him around a museum in Paris until she realizes that it's an illusion, and she needs to find love...within herself! That's the happy ending. The sad ending, well, she just realizes it's an illusion and ends up sad.
**************************************************/

let malika = {
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let timothee = {
  x: undefined,
  y: 250,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 3,
};

let beginning = {
  x: undefined,
  y: undefined,
  image: undefined,
};

let museum = {
  x: undefined,
  y: undefined,
  w: 500,
  h: 500,
  image: undefined,
};

let ending1 = {
  x: undefined,
  y: undefined,
  w: 500,
  h: 500,
  image: undefined,
};

let ending2 = {
  x: undefined,
  y: undefined,
  w: 500,
  h: 500,
  image: undefined,
}

let state = `beginning` // beginning, simulation(museum), self-love or sadness.

function preload() {
  // This is to display all of the images on the canvas.
  malika.image = loadImage("assets/images/malika-isimbi.png");
  timothee.image = loadImage("assets/images/timothee-chalamet.png");
  beginning.image = loadImage("assets/images/beginning.jpg");
  museum.image = loadImage("assets/images/parismuseum.jpg");
  ending1.image = loadImage("assets/images/manet_monet.jpg");
  ending2.image = loadImage("assets/images/ending.jpeg");
}

// setup()
//
// The canvas is being drawn here. 
function setup() {
  createCanvas(500, 500);

  setUpObjects();
}

// draw()
//
// The character, images and the game are being drawn here.
function draw() {


  if (state === `beginning`) {
    intro();

  } else if (state === `simulation`) {
    simulation();
  } else if (state === `selflove`) {
    selflove();
    sadness();
  }

}

function setUpObjects() {
  // Placing Malika and Timothée in separate positions.
  malika.x = width / 3;
  timothee.x = 2 * width / 3;
  // Controlling Timothée's positions.
  timothee.vx = random(-timothee.speed, timothee.speed);
}

function intro() {
  // First slide and intro(image and title) to the game.
  background(beginning.image);
  push();
  textSize(40);
  fill(255, 194, 206);
  textAlign(CENTER, CENTER);
  textFont(`Lora`);
  text(`Could this be love?...`, width / 2, height / 2);
  pop();
}

function simulation() {
  move();
  simulationImage();
  checkOffscreen();
  checkOverlap();
  display();
}

function simulationImage() {
  background(museum.image);
}

function selflove() {
  // This is the state where Malika realises it's an illusion once Timothée disappears, and finds self-love!
  background(ending1.image);
  push();
  textSize(30);
  fill(108, 50, 171);
  textAlign(CENTER, CENTER);
  textFont(`Lora`);
  text(`Well...finally out of that illusion!
    Self-love is the best policy <3`, width / 2, height / 2);
  pop();
}

// function sadness() {
//   // This is the alternate ending where she is sad and dwells in her sadness. Love lost!
//   push();
//   textSize(40);
//   fill(201, 150, 255);
//   textAlign(CENTER, CENTER);
//   textFont(`Lora`);
//   text(`He loves me not! :(`, width / 2, height / 2);
//   pop();
// }

function move() {
  // Controlling Malika's positions.
  malika.x = mouseX;
  malika.y = mouseY;
}

function checkOffscreen() {
  // Check if Timothee is offscreen. If he is, Malika finds out it was an illusion and focuses on self-love.
  if (timothee.x < 0 || timothee.x > width || timothee.y < 0 || timothee.y > height) {
    state = `selflove`;
  }
}

function checkOverlap() {
  // The unrequited love dilemma (Timothee is running away)
  let d = dist(malika.x, malika.y, timothee.x, timothee.y);
  if (d < malika.w / 2 + timothee.w / 2) {
    timothee.x = random(0, 550);
    timothee.y = random(0, 550);
  }
}

function display() {
  // The images are being drawn here.
  image(malika.image, malika.x, malika.y, malika.w, malika.h);
  image(timothee.image, timothee.x, timothee.y, timothee.w, timothee.h);
  image(beginning.image, beginning.x, beginning.y, );
  image(museum.image, museum.x, museum.y, museum.w, museum.h);
  image(ending1.image, ending1.x, ending1.y, ending1.w, ending1.h);
  image(ending2.image, ending2.x, ending2.y, ending2.w, ending2.h);
}

function mousePressed() {
  // Once the mouse is pressed, the game begins.
  if (state === `beginning`) {
    state = `simulation`;
  }
}
