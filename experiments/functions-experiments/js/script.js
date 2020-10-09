// "use strict";

/**************************************************
05-functions-experiments
Isimbi Malika Kabagema

Here is a description of this template p5 project.
**************************************************/
// let circle = {
//   x: 0,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0,
//   speed: 2,
// };
//
// let state = `title`; // Possible states are: title, animation, ending.

// let name = "Hamlet";
// let title = "Prince";
// let country = "Denmark";
// let string = `Hi, my name is ${name},${title} of ${country}!`;
//
// let hello = {
//   string: `Hello, world!`,
//   x:0,
//   y:0,
//   vx:5,
//   vy:1,
//   size:64,
// };

let bg = 0;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
  // circle.vx = circle.speed;
  // textSize(32);
  // textAlign(CENTER, CENTER);

  // let hotCelsius = toCelsius(100);
  // console.log(`100 degress Fahrenheit is ${hotCelsius} degrees Celsius.`);
  // let coldCelsius = toCelsius(10);
  // console.log(`10 degrees Fahrenheit is ${coldCelsius} degrees Celsius.`);
}

// draw()
//
// Description of draw() goes here.

function draw() {
  background(bg);

}

function keyPressed() {

}
// if (state === `title`) {
//   title();
// } else if (state === `animation`) {
//   animation();
// } else if (state === `ending`) {
//   ending();
// }

// function title() {
//   // title.
//   fill(255);
//   text(`Life.`, width / 2, height / 2);
// }

// function animation() {
//   // animation.
//   circle.x += circle.vx;
//   circle.y += circle.vy;
//
//   if (circle.x > width) {
//     state = `ending`;
//   }
//   ellipse(circle.x, circle.y, circle.size);
// }
//
// function ending() {
//   // ending.
//   fill(127);
//   text(`It's all over.`, width / 2, height / 2);
// }
// hello.x += hello.vx;
// hello.y += hello.vy;
//
// hello.size += 1;
//
//
// textAlign(CENTER,CENTER);
// textSize(50);
// textStyle(BOLD);
//
// fill(200,100,35);
// stroke(255);
// strokeWeight(10);
// text(hello.string, hello.x,hello.y);
// }

// function keyPressed() {
//   if (state === `title`) {
//     state = `animation`;
//   }
//
// }

// function toCelsius(fahrenheit) {
//   let celsius = (fahrenheit - 32) * 5/9;
//   return celsius;

//   parallels(100,100,5,1,100,10);
//   parallels(50,50,10,2,20,20);
//   parallels(200,200,15,7,3,50);
//   parallels(312,257,20, 0.5,300,10);
// }
//
// function parallels(x,y,numLines,lineWidth,lineHeight,lineSpacing) {
//
//   for (let i = 0; i < numLines; i++) {
//     noStroke();
//     fill(255);
//     rectMode(CENTER);
//     rect(x, y, lineWidth, lineHeight);
//     x = x + lineSpacing;
//   }


// move();
// wrap();
// display();


// function move() {
//   circle.x += circle.vx;
//   circle.y += circle.vy;
//
// }
//
// function wrap() {
//   if (circle.x > width) {
//     reset();
//   }
//
//   }
//
//   function display() {
//     fill(255, 0, 0);
//     ellipse(circle.x, circle.y, circle.size);
//   }
//
//   function reset() {
//     circle.x = 0;
//     circle.vx = circle.vx + 2;
//     circle.vy = circle.vy - 0, 25;
//     circle.size = circle.size + 2;
//   }
//
//   function mousePressed() {
//     reset();
//   }
