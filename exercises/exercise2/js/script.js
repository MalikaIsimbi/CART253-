/**************************************************
exercise-03-dodge-em
Isimbi Malika Kabagema

This project is about catching/buying time in a colourful galaxy. The little alien creature- Malia) is running out of time and trying to buy as much time as she can by catching the little time icons.The time icons are moving up and down (y) and Malia has to catch them all, one by one. When she catches/touches one, it turns green and stops, which buys her more time.
**************************************************/
let bg = {
  r: 0,
  g: 0,
  b: 0,
};

let alienShadow = {
  x: 250,
  y: 250,
  size: 100,
  fill: {
    r: 131,
    g: 204,
    b: 86,
  }
};

// This is to display the stars in the galaxy.
let starsAmount = 700;

// These are time icons that Malia the alien has to catch.
let time1 = {
  x: 0,
  y: 0,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  tint: {
    r: 119,
    g: 201,
    b: 68,
    alpha: 255,
  },
  speed: 5,
  touched: false,
};

let time2 = {
  x: 150,
  y: 0,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  tint: {
    r: 119,
    g: 201,
    b: 68,
    alpha: 255,
  },
  speed: 4,
  touched: false,
};

let time3 = {
  x: 300,
  y: 0,
  w: 70,
  h: 70,
  vx: 0,
  vy: 0,
  image: undefined,
  tint: {
    r: 119,
    g: 201,
    b: 68,
    alpha: 255,
  },
  speed: 6,
  touched: false,
};

let time4 = {
  x: 400,
  y: 0,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  tint: {
    r: 119,
    g: 201,
    b: 68,
    alpha: 255,
  },
  speed: 3.5,
  touched: false,
};

// This is the image of Malia, the alien.
let malia = {
  x: 0,
  y: 0,
  w: 100,
  h: 100,
  image: undefined,
}

// This helps to display the time icons in the canvas.
function preload() {
  time1.image = loadImage("assets/images/timeicon1.png");
  time2.image = loadImage("assets/images/timeicon2.png");
  time3.image = loadImage("assets/images/timeicon3.png");
  time4.image = loadImage("assets/images/timeicon4.png");

  // This will help to display Malia, the alien.
  malia.image = loadImage("assets/images/malia.png");
}

// setup()
//
// This is the canvas of the colourful galaxy.
function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);

  // This is helping the time icons to move up and down.
  time1.y = random(0, height);
  time1.vy += time1.speed;
  time2.y = random(height, 0);
  time2.vy -= time2.speed;
  time3.y = random(0, height);
  time3.vy += time3.speed;
  time4.y = random(height, 0);
  time4.vy -= time4.speed;

  noCursor();
}

// draw()
//
//The galaxy, Malia and the time icons are being drawn here.
function draw() {

  // the actual galaxy being drawn here.
  background(bg.r, bg.g, bg.b);

  // This is creating the colourful galaxy effect.
  bg.r = map(mouseX, 0, width, 140, 150);
  bg.g = map(mouseX, 0, width, 50, 150);
  bg.b = map(mouseY, 0, height, 50, 255);

  // Drawing the stars(points) in the galaxy.
  for (let i = 0; i < starsAmount; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(200);
    point(x, y);
  }

  // This helps Malia's shadow and Malia to move around.
  alienShadow.x = mouseX;
  alienShadow.y = mouseY;
  malia.x = mouseX;
  malia.y = mouseY;

  // This is to enable the time icons' movement and it stops when in contact with Malia and then keeps moving after.
  if (time1.touched === false) {
    time1.x += time1.vx;
    time1.y += time1.vy;
  };
  if (time2.touched === false) {
    time2.x += time2.vx;
    time2.y += time2.vy;
  };
  if (time3.touched === false) {
    time3.x += time3.vx;
    time3.y += time3.vy;
  };
  if (time4.touched === false) {
    time4.x += time4.vx;
    time4.y += time4.vy;
  }


  // This is for the time icons to move up and down repeatedly.
  if (time1.y > height) {
    time1.y = 0;
  };
  if (time2.y < -100) {
    time2.y = height;
  };
  if (time3.y > height) {
    time3.y = 0;
  };
  if (time4.y < -100) {
    time4.y = height;
  };

  // The four time icons are being drawn here.
  image(time1.image, time1.x, time1.y, time1.w, time1.h);
  image(time2.image, time2.x, time2.y, time2.w, time2.h);
  image(time3.image, time3.x, time3.y, time3.w, time3.h);
  image(time4.image, time4.x, time4.y, time4.w, time4.h);

  // This is Malia's shadow\halo, the green ellipse.
  push();
  fill(alienShadow.fill.r, alienShadow.fill.g, alienShadow.fill.b);
  noStroke();
  ellipse(alienShadow.x, alienShadow.y, alienShadow.size);
  pop();

  // Malia the alien is being drawn here.
  image(malia.image, malia.x, malia.y, malia.w, malia.h);

  // The tint (green effect) of the time icons is being drawn here.
  push();
  tint(time1.tint.r, time1.tint.g, time1.tint.b, time1.tint.alpha);
  pop();

  push();
  tint(time2.tint.r, time2.tint.g, time2.tint.b, time2.tint.alpha);
  pop();

  push();
  tint(time3.tint.r, time3.tint.g, time3.tint.b, time3.tint.alpha);
  pop();

  push();
  tint(time4.tint.r, time4.tint.g, time4.tint.b, time4.tint.alpha);
  pop();

  // The time icons are being caught by Malia here, as well as the tint modification is taking place.
  let d1 = dist(time1.x, time1.y, malia.x, malia.y);
  let d2 = dist(time2.x, time2.y, malia.x, malia.y);
  let d3 = dist(time3.x, time3.y, malia.x, malia.y);
  let d4 = dist(time4.x, time4.y, malia.x, malia.y);


  if (d1 < time1.w / 2 + malia.w / 2) {
    push();
    time1.touched = true;
    tint(time1.tint.r, time1.tint.g, time1.tint.b, time1.tint.alpha);
    image(time1.image, time1.x, time1.y, time1.w, time1.h);
    pop();

  } else {
    push();
    noTint();
    time1.touched = false;
    image(time1.image, time1.x, time1.y, time1.w, time1.h);
    pop();
  };

  if (d2 < time2.w / 2 + malia.w / 2) {
    push();
    time2.touched = true;
    tint(time2.tint.r, time2.tint.g, time2.tint.b, time2.tint.alpha);
    image(time2.image, time2.x, time2.y, time2.w, time2.h);
    pop();

  } else {
    push();
    noTint();
    time2.touched = false;
    image(time2.image, time2.x, time2.y, time2.w, time2.h);
    pop();
  };

  if (d3 < time3.w / 2 + malia.w / 2) {
    push();
    time3.touched = true;
    tint(time3.tint.r, time3.tint.g, time3.tint.b, time3.tint.alpha);
    image(time3.image, time3.x, time3.y, time3.w, time3.h);
    pop();

  } else {
    push();
    noTint();
    time3.touched = false;
    image(time3.image, time3.x, time3.y, time3.w, time3.h);
    pop();
  };

  if (d4 < time4.w / 2 + malia.w / 2) {
    push();
    time4.touched = true;
    tint(time4.tint.r, time4.tint.g, time4.tint.b, time4.tint.alpha);
    image(time4.image, time4.x, time4.y, time4.w, time4.h);
    pop();

  } else {
    push();
    noTint();
    time4.touched = false;
    image(time4.image, time4.x, time4.y, time4.w, time4.h);
    pop();
  };







}
