"use strict";

/**************************************************
arrays-experiments
Isimbi Malika Kabagema


**************************************************/
// the fishes.
let fish1;
let fish2;
let fish3;
let fish4;

// setup()
//
// Description of setup() goes here.
function setup() {
 createCanvas(600,600);

// Crete four little fishies, at random positions.
fish1 = createFish(random(0,width),random(0,height));
fish2 = createFish(random(0,width),random(0,height));
fish3 = createFish(random(0,width),random(0,height));
fish4 = createFish(random(0,width),random(0,height));
}

// createFish(x,y)
//Creates a new JavaScript object describing a fish and returns it
function createFish(x,y) {
  let fish = {
    x: x,
    y: y,
    size:50,
    vx: 0,
    vy: 0,
    speed:2,
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
 background(0);

 moveFish(fish1);
 moveFish(fish2);
 moveFish(fish3);
 moveFish(fish4);

 displayFish(fish1);
 displayFish(fish2);
 displayFish(fish3);
 displayFish(fish4);

}

//moveFish(fish)
//chooses whether the given fish changes direction and moves it
function moveFish(fish) {
  //choose whether to change direction
  let change = random(0,1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }
}
