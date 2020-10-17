"use strict";

/**************************************************
project-1: Escaping the Matrix.
Isimbi Malika Kabagema.

This project is called Escaping the Matrix.
 It's a game about a girl who is stuck in the matrix and has to go through multiple levels to escape. There are 3 levels: the social media realm, the society realm and the otherness (face yourself) realm.
 She completes the first two levels by avoiding the icons and making it to the next state. If she fails to avoid a certain amount, it's game over and the player has to restart the level and continue till the end. As she goes through each level, she changes colours as she slightly reaches her authentic self.
 Once she completes these 3 levels, she is freed from the matrix and starts her journey to true freedom. The idea behind this is to show how we are all somehow lost in a world full of misinformation, how social media and society norms tend to dictate our lives, how we also limit ourselves and self-sabotage and how most of us don't even realize it, hence I made this project to address that and tell myself and others to confront these issues and be the best version of ourselves and not let external factors derail that.
**************************************************/
let socialMediaGirl = {
  x: undefined,
  y: undefined,
  w: 130,
  h: 130,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let societyGirl = {
  x: undefined,
  y: undefined,
  w: 130,
  h: 130,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let othernessGirl = {
  x: undefined,
  y: undefined,
  w: 130,
  h: 130,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let almostFreeGirl = {
  x: undefined,
  y: undefined,
  w: 130,
  h: 130,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let originalGirl = {
  x: undefined,
  y: undefined,
  w: 130,
  h: 130,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let matrixEntry = {
  x: undefined,
  y: undefined,
  image: undefined,
};

let matrixFail = {
  x: undefined,
  y: undefined,
  image: undefined,
};

let instagram = {
  x: undefined,
  y: 70,
  w: 30,
  h: 30,
  vx: 0,
  vy: 0,
  image: undefined,
  tint: {
    r: 119,
    g: 201,
    b: 68,
    alpha: 255,
  },
  speed: 3,
  touched: false,
};

let youtube = {
  x: undefined,
  y: 150,
  w: 30,
  h: 30,
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

let facebook = {
  x: undefined,
  y: 250,
  w: 30,
  h: 50,
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

let pinterest = {
  x: undefined,
  y: 350,
  w: 30,
  h: 30,
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

let twitter = {
  x: undefined,
  y: 450,
  w: 30,
  h: 30,
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

let snapchat = {
  x: undefined,
  y: 550,
  w: 30,
  h: 30,
  vx: 0,
  vy: 0,
  image: undefined,
  tint: {
    r: 119,
    g: 201,
    b: 68,
    alpha: 255,
  },
  speed: 3,
  touched: false,
};

let society1 = {
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 3,
  touched: false,
};

let society2 = {
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 4,
  touched: false,
};

// let matrixFailDisplay = {
//   x: undefined,
//   y: undefined,
//   image: undefined,
// };

let freedom = {
  x: undefined,
  y: undefined,
  image: undefined,
};

let socialMediaCollide = 0;

// let societyCollide =

const MAX_COLL = 10;

let staticAmount = 800;

let state = `enterMatrix`;


// This is to display all of the images on the canvas.
function preload() {
  socialMediaGirl.image = loadImage("assets/images/matrixgirlsocialmedia.png");
  societyGirl.image = loadImage("assets/images/matrixgirlsociety.png");
  othernessGirl.image = loadImage("assets/images/matrixgirlfinalstep.png");
  almostFreeGirl.image = loadImage("assets/images/matrixgirlalmostfree.png");
  originalGirl.image = loadImage("assets/images/matrixgirlfree.png");
  matrixEntry.image = loadImage("assets/images/matrixentry.jpg");
  matrixFail.image = loadImage("assets/images/matrixsucked.jpg");
  instagram.image = loadImage("assets/images/IG.png");
  youtube.image = loadImage("assets/images/yt.png");
  facebook.image = loadImage("assets/images/fb.png");
  pinterest.image = loadImage("assets/images/pinterest.png");
  twitter.image = loadImage("assets/images/twitter.png");
  snapchat.image = loadImage("assets/images/sc.png");
  society1.image = loadImage("assets/images/societyblue.png");
  society2.image = loadImage("assets/images/societyred.png");
  freedom.image = loadImage("assets/images/freedom.jpg");
}

// setup()
//
// The canvas is created here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  setUpObjects();
}

// draw()
//
// The images, character and different simulation levels are being drawn here.
function draw() {

  if (state === `enterMatrix`) {
    startMatrix();
  } else if (state === `matrixLevel1`) {
    level1();
  } else if (state === `matrixLevel2`) {
    level2();
  } else if (state === `matrixLevel3`) {
    level3();
  } else if (state === `matrixFail`) {
    levelFail();
  } else if (state === `winGame`) {
    gameWon();
  }
  staticMatrix();
}

function setUpObjects() {
  // Placing the girl in a given position.
  socialMediaGirl.x = width / 3;
  societyGirl.x = width / 3;
  othernessGirl.x = width / 3;
  almostFreeGirl.x = windowWidth;
  originalGirl.x = width / 3;
  // Placing the social media icons in a given position.
  instagram.x = windowWidth;
  facebook.x = windowWidth
  youtube.x = windowWidth;
  twitter.x = windowWidth;
  pinterest.x = windowWidth;
  snapchat.x = windowWidth;
  // Placing the society icons in a given position.
  society1.x = windowWidth;
  society2.x = windowWidth;
  // Making the icons move.
  instagram.x -= instagram.speed;
  facebook.x -= facebook.speed;
  youtube.x -= youtube.speed;
  twitter.x -= twitter.speed;
  pinterest.x -= pinterest.speed;
  snapchat.x -= snapchat.speed;
  // Making the society icons move.
  society1.x -= society1.speed;
  society2.x -= society2.speed;

  noCursor();
}

// Intro page of the game.
function startMatrix() {
  // Display background of matrix.
  background(0);
  // Display title.
  push();
  textSize(51);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  textFont(`Russo One`);
  text(`Welcome to the Matrix...`, width / 2, height / 2);
  textSize(50);
  fill(95, 191, 6);
  textAlign(CENTER, CENTER);
  textFont(`Russo One`);
  text(`Welcome to the Matrix...`, width / 2, height / 2);
  pop();
  // Display subtitle.
  push();
  textSize(30);
  fill(95, 191, 6);
  textAlign(CENTER, BASELINE);
  textFont(`Play`);
  text(`Will you manage to escape?`, width / 2, 400);
  pop();
  // Title to start.
  push();
  textSize(41);
  fill(255, 255, 255);
  textAlign(CENTER, BOTTOM);
  textFont(`Russo One`);
  text(`CLICK TO START.`, width / 2, 550);
  textSize(40);
  fill(95, 191, 6);
  textAlign(CENTER, BOTTOM);
  textFont(`Russo One`);
  text(`CLICK TO START.`, width / 2, 550);
  pop();
}

function level1() {
  simulationMatrix1();
}

function level2() {
  simulationMatrix2();
}
//
// function level3() {
//   simulationMatrix3();
// }
//
function levelFail() {
  redisplayLevel();
}
//
// function gameWon() {
//
// }

function simulationMatrix1() {
  movementLevel1();
  displayLevel1();
  playLevel1();

}


function simulationMatrix2() {
  movementLevel2();
  displayLevel2();
  // playLevel2();

}

function movementLevel1() {
  // Making the icons move repeatedly.
  if (instagram.x < 0) {
    instagram.x = windowWidth;
  };
  if (youtube.x < 0) {
    youtube.x = windowWidth;
  };
  if (facebook.x < 0) {
    facebook.x = windowWidth;
  };
  if (pinterest.x < 0) {
    pinterest.x = windowWidth;
  };
  if (twitter.x < 0) {
    twitter.x = windowWidth;
  };
  if (snapchat.x < 0) {
    snapchat.x = windowWidth;
  };
  // Controlling the girl's movement.
  socialMediaGirl.x = mouseX;
  socialMediaGirl.y = mouseY;
}

function displayLevel1() {
  // Display background of level 1.
  image(matrixEntry.image, windowWidth, windowHeight);
  background(matrixEntry.image);
  //Title of level 1.
  push();
  textSize(20);
  fill(95, 191, 6);
  textAlign(CENTER, TOP);
  textFont(`Russo One`);
  text(`Level 1: The Social Media Realm.`, width / 2, 30);
  textSize(10);
  fill(255, 255, 255);
  textAlign(CENTER, TOP);
  textFont(`Play`);
  text(`Attempt to dodge social media and make it to the other side!`, width / 2, 50);
  pop();
  // Display girl.
  image(socialMediaGirl.image, socialMediaGirl.x, socialMediaGirl.y, socialMediaGirl.w, socialMediaGirl.h);
  // Display social media icons.
  image(instagram.image, instagram.x, instagram.y, instagram.w, instagram.h);
  image(facebook.image, facebook.x, facebook.y, facebook.w, facebook.h);
  image(youtube.image, youtube.x, youtube.y, youtube.w, youtube.h);
  image(twitter.image, twitter.x, twitter.y, twitter.w, twitter.h);
  image(pinterest.image, pinterest.x, pinterest.y, pinterest.w, pinterest.h);
  image(snapchat.image, snapchat.x, snapchat.y, snapchat.w, snapchat.h);
}

function playLevel1() {
  // // Stop the girl and icons when they come in contact.
  let d1 = dist(socialMediaGirl.x, socialMediaGirl.y, instagram.x, instagram.y);
  let d2 = dist(socialMediaGirl.x, socialMediaGirl.y, youtube.x, youtube.y);
  let d3 = dist(socialMediaGirl.x, socialMediaGirl.y, facebook.x, facebook.y);
  let d4 = dist(socialMediaGirl.x, socialMediaGirl.y, pinterest.x, pinterest.y);
  let d5 = dist(socialMediaGirl.x, socialMediaGirl.y, twitter.x, twitter.y);
  let d6 = dist(socialMediaGirl.x, socialMediaGirl.y, snapchat.x, snapchat.y);
  // Adding green tint and resetting when they collide after a given amount of times.
  if (d1 < socialMediaGirl.w / 2 + instagram.w / 2) {
    push();
    tint(instagram.tint.r, instagram.tint.g, instagram.tint.b, instagram.tint.alpha);
    image(instagram.image, instagram.x, instagram.y, instagram.w, instagram.h);
    instagram.touched = true;
    instagram.x = windowWidth;
    socialMediaCollide += 1;
    pop();
  } else if (d2 < socialMediaGirl.w / 2 + youtube.w / 2) {
    push();
    tint(youtube.tint.r, youtube.tint.g, youtube.tint.b, youtube.tint.alpha);
    image(youtube.image, youtube.x, youtube.y, youtube.w, youtube.h);
    youtube.touched = true;
    youtube.x = windowWidth;
    socialMediaCollide += 1;
    pop();
  } else if (d3 < socialMediaGirl.w / 2 + facebook.w / 2) {
    push();
    tint(facebook.tint.r, facebook.tint.g, facebook.tint.b, facebook.tint.alpha);
    image(facebook.image, facebook.x, facebook.y, facebook.w, facebook.h);
    facebook.touched = true;
    facebook.x = windowWidth;
    socialMediaCollide += 1;
    pop();
  } else if (d4 < socialMediaGirl.w / 2 + pinterest.w / 2) {
    push();
    tint(pinterest.tint.r, pinterest.tint.g, pinterest.tint.b, pinterest.tint.alpha);
    image(pinterest.image, pinterest.x, pinterest.y, pinterest.w, pinterest.h);
    pinterest.touched = true;
    pinterest.x = windowWidth;
    socialMediaCollide += 1;
    pop();
  } else if (d5 < socialMediaGirl.w / 2 + twitter.w / 2) {
    push();
    tint(twitter.tint.r, twitter.tint.g, twitter.tint.b, twitter.tint.alpha);
    image(twitter.image, twitter.x, twitter.y, twitter.w, twitter.h);
    twitter.touched = true;
    twitter.x = windowWidth;
    socialMediaCollide += 1;
    pop();
  } else if (d6 < socialMediaGirl.w / 2 + snapchat.w / 2) {
    push();
    tint(snapchat.tint.r, snapchat.tint.g, snapchat.tint.b, snapchat.tint.alpha);
    image(snapchat.image, snapchat.x, snapchat.y, snapchat.w, snapchat.h);
    snapchat.touched = true;
    snapchat.x = windowWidth;
    socialMediaCollide += 1;
    pop();
  }
  if (socialMediaGirl.x >= (windowWidth - socialMediaGirl.w)) {
    // This is to help the girl move to level 2.
    state = `matrixLevel2`;
  }
  if (socialMediaCollide >= MAX_COLL) {
    // This is to set the level fail after the maximum collision number has been reached.
    state = `matrixFail`;
  }

  console.log("collide:: " + socialMediaCollide);
  // console.log("socialMedia Girl:: " + socialMediaGirl.x);
  // console.log("windowWidth:: " + windowWidth);
  console.log("playLevel1");
}

function movementLevel2() {
  // Making the society icons move repeatedly.
  if (society1.x < 0) {
    society1.x = windowWidth;
  };
  if (society2.x < 0) {
    society2.x = windowWidth;
  };
  // Controlling the girl's movement.
  societyGirl.x = mouseX;
  societyGirl.y = mouseY;
}

function displayLevel2() {
  // Display background of level 2.
  image(matrixEntry.image, windowWidth, windowHeight);
  background(matrixEntry.image);
  //Title of level 2.
  push();
  textSize(20);
  fill(95, 191, 6);
  textAlign(CENTER, TOP);
  textFont(`Russo One`);
  text(`Level 2: The Society Realm.`, width / 2, 30);
  textSize(10);
  fill(255, 255, 255);
  textAlign(CENTER, TOP);
  textFont(`Play`);
  text(`Attempt to dodge society this time and make it to the next level!`, width / 2, 50);
  pop();
  // Display girl.
  image(societyGirl.image, societyGirl.x, societyGirl.y, societyGirl.w, societyGirl.h);
  // Display society icons.
  image(society1.image, society1.x, society1.y, society1.w, society1.h);
  image(society2.image, society2.x, society2.y, society2.w, society2.h);
}

function redisplayLevel() {
  // This is where the fail/game over page is displayed.
  image(matrixFail.image, windowWidth, windowHeight);
  background(matrixFail.image);
  // Display title.
}

function staticMatrix() {
  // Drawing the static in the matrix.
  for (let i = 0; i < staticAmount; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    point(x, y);
  }
}


function mousePressed() {
  // Once the mouse is pressed, the game begins.
  if (state === `enterMatrix`) {
    state = `matrixLevel1`;
    // } else if (state === `matrixLevel1`) {
    //   state = `matrixLevel2`;
  }
}


function windowResized() {
  // The window will adapt to whatever size you set it to.
  resizeCanvas(windowWidth, windowHeight);
}
