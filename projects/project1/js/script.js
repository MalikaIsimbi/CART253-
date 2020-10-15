"use strict";

/**************************************************
project-1: Escaping the Matrix.
Isimbi Malika Kabagema.

This project is called Escaping the Matrix.
 It's a game about a girl who is stuck in the matrix and has to go through multiple levels to escape. There are 3 levels: the social media realm, the society realm and the otherness (face yourself) realm.
 She completes each level by avoiding these traps and making it to the next state. If she fails one level, she is able to restart that level and continue till the end.
 Once she completes these 3 levels, she is freed from the matrix and starts her journey to true freedom. The idea being this is to show how we are all somehow lost in a world full of misinformation, how social media and society norms tend to dictate our lives, how we also limit ourselves and self-sabotage and how most of us don't even realize it, hence I made this project to address that and tell myself and others to confront these issues and be the best version of ourselves and not let external factors derail that.
**************************************************/
let socialMediaGirl = {
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
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
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let almostFreeGirl = {
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let originalGirl = {
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
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
  y: undefined,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let youtube = {
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let facebook = {
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let pinterest = {
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let twitter = {
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let snapchat = {
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let society1 = {
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let society2 = {
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  image: undefined,
  speed: 5,
};

let freedom = {
  x: undefined,
  y: undefined,
  image: undefined,
};

let state = `enterMatrix`; //

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
} else if (state === `endGame`){
  endGame();
}

}

// Intro page of the game
function startMatrix(){
  // Display background of matrix.
  image(matrixEntry.image, windowWidth, windowHeight);
  background(matrixEntry.image);
  // Display title.
  push();
  textSize(51);
  fill(255,255,255);
  textAlign(CENTER, CENTER);
  textFont(`Russo One`);
  text(`Welcome to the Matrix...`, width / 2, height / 2);
  textSize(50);
  fill(95,191,6);
  textAlign(CENTER, CENTER);
  textFont(`Russo One`);
  text(`Welcome to the Matrix...`, width / 2, height / 2);
  pop();
  // Display subtitle.
  push();
  textSize(30);
  fill(95,191,6);
  textAlign(CENTER,BASELINE);
  textFont(`Play`);
  text(`Will you manage to escape?`, width/2, 400);
  pop();
  // Title to start game.
  push();
  textSize(41);
  fill(255,255,255);
  textAlign(CENTER,BOTTOM);
  textFont(`Russo One`);
  text(`CLICK TO START.`, width/2, 550);
  textSize(40);
  fill(95,191,6);
  textAlign(CENTER,BOTTOM);
  textFont(`Russo One`);
  text(`CLICK TO START.`, width/2, 550);
  pop();
}

function mousePressed() {
  // Once the mouse is pressed, the game begins.
  if (state === `enterMatrix`) {
    state = `matrixLevel1`;
  }
}

// The window will adapt to whatever size you set it to.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
