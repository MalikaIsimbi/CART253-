"use strict";

/**************************************************
05-looking-for-love
Isimbi Malika Kabagema

This activity is about two sad circles looking for love. Will they find it?
**************************************************/
let circle1 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
};

let circle2 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
};

let state = `title` // title,simulation,love or sadness


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);

  setUpCircles();

  function setUpCircles() {
    // Positioning circles separate from one another.
    circle1.x = width / 3;
    circle2.x = 2 * width / 3;
    // Start circles in a random direcion.
    circle1.vx = random(-circle1.speed, circle1.speed);
    circle2.vx = random(-circle2.speed, circle2.speed);
  }

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `love`) {
    love();
  } else if (state === `sadness`) {
    sadness();
  }

  // simulation();

}

function title() {
  // Drawing the love title.
  push();
  textSize(50);
  fill(189, 122, 77);
  textAlign(CENTER, CENTER);
  text(`IS THIS LOVE?`, width / 2, height / 2);
  pop();
}

function simulation() {
  move();
  checkOffscreen();
  checkOverlap();
  display();
}

function love() {
  // Love is found!
  push();
  textSize(35);
  fill(207, 115, 250);
  textAlign(CENTER, CENTER);
  text(`YES, IT IS LOVE!!!`, width / 2, height / 2);
  pop();

}

function sadness() {
  // No love, alone forever.
  push();
  textSize(35);
  fill(80, 166, 82);
  textAlign(CENTER, CENTER);
  text(`NO, ALONE FOREVER.`, width / 2, height / 2);
  pop();
}

function move() {
  // Get circles to move.
  circle1.x += circle1.vx;
  circle1.y += circle1.vy;
  circle2.x += circle1.vx;
  circle2.y += circle1.vx;
}

function checkOffscreen() {
  // Check for circles offscreen.
  if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height) {
    state = `sadness`;
  }
}

function checkOverlap() {
  // Finding true love?
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.w / 2 + circle2.w / 2) {
    state = `love`;
  }
}

function display() {
  // Drawing the circles
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}


function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
