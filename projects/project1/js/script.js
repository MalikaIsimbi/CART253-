"use strict";

/**************************************************
project-1: Escaping the Matrix.
Isimbi Malika Kabagema.

This project is called Escaping the Matrix.
 It's a game about a girl who is stuck in the matrix and has to go through multiple levels to escape. There are 3 levels: the social media realm, the society realm and the otherness (face yourself) realm.
 She completes the first two levels by avoiding the icons and making it to the next state. If she fails to avoid a certain amount, it's game over and the player has to restart the level and continue till the end. As she goes through each level, she changes colours as she slightly reaches her authentic self.
 Once she completes these 3 levels, she is freed from the matrix and starts her journey to true freedom. The idea behind this is to show how we are all somehow lost in a world full of misinformation, how social media and society norms tend to dictate our lives, how we also limit ourselves and self-sabotage and how most of us don't even realize it, hence I made this project to address that and tell myself and others to confront these issues and be the best version of ourselves and not let external factors derail that. Best played on full screen.
**************************************************/
let socialMediaGirl = {
  x: undefined,
  y: undefined,
  w: 120,
  h: 120,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let societyGirl = {
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let othernessGirl = {
  x: undefined,
  y: undefined,
  w: 140,
  h: 140,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let almostFreeGirl = {
  x: undefined,
  y: undefined,
  w: 170,
  h: 170,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let originalGirl = {
  x: undefined,
  y: undefined,
  w: 150,
  h: 150,
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
  w: 40,
  h: 40,
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

let youtube = {
  x: undefined,
  y: 150,
  w: 40,
  h: 40,
  vx: 0,
  vy: 0,
  image: undefined,
  tint: {
    r: 119,
    g: 201,
    b: 68,
    alpha: 255,
  },
  speed: 7,
  touched: false,
};

let facebook = {
  x: undefined,
  y: 250,
  w: 40,
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
  speed: 5,
  touched: false,
};

let pinterest = {
  x: undefined,
  y: 350,
  w: 40,
  h: 40,
  vx: 0,
  vy: 0,
  image: undefined,
  tint: {
    r: 119,
    g: 201,
    b: 68,
    alpha: 255,
  },
  speed: 7,
  touched: false,
};

let twitter = {
  x: undefined,
  y: 450,
  w: 40,
  h: 40,
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

let snapchat = {
  x: undefined,
  y: 550,
  w: 40,
  h: 40,
  vx: 0,
  vy: 0,
  image: undefined,
  tint: {
    r: 119,
    g: 201,
    b: 68,
    alpha: 255,
  },
  speed: 7,
  touched: false,
};

let society1 = {
  x: undefined,
  y: 90,
  w: 170,
  h: 170,
  vx: 0,
  vy: 0,
  image: undefined,
  tint: {
    r: 119,
    g: 201,
    b: 68,
    alpha: 255,
  },
  speed: 20,
  touched: false,
};

let society2 = {
  x: undefined,
  y: 420,
  w: 170,
  h: 170,
  vx: 0,
  vy: 0,
  image: undefined,
  tint: {
    r: 119,
    g: 201,
    b: 68,
    alpha: 255,
  },
  speed: 20,
  touched: false,
};

let freedom = {
  x: undefined,
  y: undefined,
  image: undefined,
};

let socialMediaCollide = 0;

let societyCollide = 0;

const MAX_COLL = 6;

const MAX_COLL_SOCIETY = 10;

const MIN_COLL_SOCIETY = 5;

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
  } else if (state === `matrixFail2`) {
    levelFail2();
  } else if (state === `matrixFail3`) {
    levelFail3();
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

function level3() {
  simulationMatrix3();
}

function levelFail() {
  redisplayLevel();
}

function levelFail2() {
  redisplayLevel2();
}

function levelFail3() {
  redisplayLevel3();
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
  playLevel2();
}

function simulationMatrix3() {
  movementLevel3();
  displayLevel3();
  playLevel3();
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
  // Making the icons move.
  instagram.x -= instagram.speed;
  facebook.x -= facebook.speed;
  youtube.x -= youtube.speed;
  twitter.x -= twitter.speed;
  pinterest.x -= pinterest.speed;
  snapchat.x -= snapchat.speed;
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
  // Stop the girl and icons when they come in contact.
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
  //
  // console.log("collide:: " + socialMediaCollide);
  // console.log("socialMedia Girl:: " + socialMediaGirl.x);
  // // console.log("windowWidth:: " + windowWidth);
  // console.log(playLevel1);
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
  // Making the society icons move.
  society1.x -= society1.speed;
  society2.x -= society2.speed;
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

function playLevel2() {
  // // Stop the girl and people when they come in contact.
  let d7 = dist(societyGirl.x, societyGirl.y, society1.x, society1.y);
  let d8 = dist(societyGirl.x, societyGirl.y, society2.x, society2.y);
  // Adding green tint and resetting when they collide after a given amount of times.
  if (d7 < societyGirl.w / 2 + society1.w / 2) {
    push();
    tint(society1.tint.r, society1.tint.g, society1.tint.b, society1.tint.alpha);
    image(society1.image, society1.x, society1.y, society1.w, society1.h);
    society1.touched = true;
    society1.x = windowWidth;
    societyCollide += 1;
    pop();
  } else if (d8 < societyGirl.w / 2 + society2.w / 2) {
    push();
    tint(society2.tint.r, society2.tint.g, society2.tint.b, society2.tint.alpha);
    image(society2.image, society2.x, society2.y, society2.w, society2.h);
    society2.touched = true;
    society2.x = windowWidth;
    societyCollide += 1;
    pop();
  }
  if (societyCollide >= MIN_COLL_SOCIETY) {
    // This is to help the girl move to level 3 by colliding the least possible with the people.
    state = `matrixLevel3`;
  }
  if (societyCollide >= MAX_COLL_SOCIETY) {
    // This is to set the level fail after the maximum collision number has been reached.
    state = `matrixFail2`;
  }
}

function movementLevel3() {
  // Controlling the girl's movement.
  almostFreeGirl.x = mouseX;
  almostFreeGirl.y = mouseY;
  // Controlling the otherness girl's movement.
  othernessGirl.x -= othernessGirl.speed;
  // Making the otherness Girl move repeatedly.
  if (othernessGirl.x < 0) {
    othernessGirl.x = windowWidth;
  };
}

function displayLevel3() {
  // Display background of level 3.
  image(matrixEntry.image, windowWidth, windowHeight);
  background(matrixEntry.image);
  //Title of level 3.
  push();
  textSize(20);
  fill(95, 191, 6);
  textAlign(CENTER, TOP);
  textFont(`Russo One`);
  text(`Level 3: The Otherness Realm.`, width / 2, 30);
  textSize(10);
  fill(255, 255, 255);
  textAlign(CENTER, TOP);
  textFont(`Play`);
  text(`Attempt to catch the other verssion of yourself and win!`, width / 2, 50);
  pop();
  // Display the otherness girl.
  image(othernessGirl.image, othernessGirl.x, othernessGirl.y, othernessGirl.w, othernessGirl.h);
  // Display almost free girl.
  image(almostFreeGirl.image, almostFreeGirl.x, almostFreeGirl.y, almostFreeGirl.w, almostFreeGirl.h);
}

function playLevel3() {
  // Catching the otherness girl.
  let d9 = dist(almostFreeGirl.x, almostFreeGirl.y, othernessGirl.x, othernessGirl.y);
  if (d9 < almostFreeGirl.w / 2 + othernessGirl.w / 2) {
    state = `winGame`;
  }
}

function redisplayLevel() {
  // This is where the fail/game over page is displayed for level 1.
  image(matrixFail.image, windowWidth, windowHeight);
  background(matrixFail.image);
  // Display title.
  push();
  textSize(51);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  textFont(`Russo One`);
  text(`OH NO, YOU FAILED :(`, width / 2, height / 2);
  textSize(50);
  fill(0);
  textAlign(CENTER, CENTER);
  textFont(`Russo One`);
  text(`OH NO, YOU FAILED :(`, width / 2, height / 2);
  pop();
  // Display subtitle.
  push();
  textSize(30);
  fill(95, 191, 6);
  textAlign(CENTER, BASELINE);
  textFont(`Play`);
  text(`Try again, I'm sure you'll get it this time!`, width / 2, 400);
  pop();
  // Title to start.
  push();
  textSize(31);
  fill(255, 255, 255);
  textAlign(CENTER, BOTTOM);
  textFont(`Russo One`);
  text(`PRESS SPACEBAR TO RESTART.`, width / 2, 550);
  textSize(30);
  fill(0);
  textAlign(CENTER, BOTTOM);
  textFont(`Russo One`);
  text(`PRESS SPACEBAR TO RESTART.`, width / 2, 550);
  pop();
}

function redisplayLevel2() {
  // This is where the fail/game over page is displayed for level 2.
  image(matrixFail.image, windowWidth, windowHeight);
  background(matrixFail.image);
  // Display title.
  push();
  textSize(51);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  textFont(`Russo One`);
  text(`OH NO, YOU FAILED :(`, width / 2, height / 2);
  textSize(50);
  fill(0);
  textAlign(CENTER, CENTER);
  textFont(`Russo One`);
  text(`OH NO, YOU FAILED :(`, width / 2, height / 2);
  pop();
  // Display subtitle.
  push();
  textSize(30);
  fill(95, 191, 6);
  textAlign(CENTER, BASELINE);
  textFont(`Play`);
  text(`Try again, I'm sure you'll get it this time!`, width / 2, 400);
  pop();
  // Title to start.
  push();
  textSize(31);
  fill(255, 255, 255);
  textAlign(CENTER, BOTTOM);
  textFont(`Russo One`);
  text(`PRESS UP ARROW TO RESTART.`, width / 2, 550);
  textSize(30);
  fill(0);
  textAlign(CENTER, BOTTOM);
  textFont(`Russo One`);
  text(`PRESS UP ARROW TO RESTART.`, width / 2, 550);
  pop();
}

function redisplayLevel3() {
  // This is where the fail/game over page is displayed for level 3.
  image(matrixFail.image, windowWidth, windowHeight);
  background(matrixFail.image);
  // Display title.
  push();
  textSize(51);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  textFont(`Russo One`);
  text(`OH NO, YOU FAILED :(`, width / 2, height / 2);
  textSize(50);
  fill(0);
  textAlign(CENTER, CENTER);
  textFont(`Russo One`);
  text(`OH NO, YOU FAILED :(`, width / 2, height / 2);
  pop();
  // Display subtitle.
  push();
  textSize(30);
  fill(95, 191, 6);
  textAlign(CENTER, BASELINE);
  textFont(`Play`);
  text(`Try again, I'm sure you'll get it this time!`, width / 2, 400);
  pop();
  // Title to start.
  push();
  textSize(31);
  fill(255, 255, 255);
  textAlign(CENTER, BOTTOM);
  textFont(`Russo One`);
  text(`PRESS DOWN ARROW TO RESTART.`, width / 2, 550);
  textSize(30);
  fill(0);
  textAlign(CENTER, BOTTOM);
  textFont(`Russo One`);
  text(`PRESS DOWN ARROW TO RESTART.`, width / 2, 550);
  pop();
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
  }
}

function keyPressed() {
  // This is to restart the levels when the player has failed.
  if (keyCode === 32) {
    state = `matrixLevel1`;
    socialMediaCollide = 0;
    setUpObjects();
  } else if (keyCode === UP_ARROW) {
    state = `matrixLevel2`;
    societyCollide = 0;
    setUpObjects();
   }
  // else if (keyCode === DOWN_ARROW) {
  //   state = `matrixLevel3`;
  // }
}

function windowResized() {
  // The window will adapt to whatever size you set it to.
  resizeCanvas(windowWidth, windowHeight);
}
