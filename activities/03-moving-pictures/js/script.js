/**************************************************
03-moving-pictures
Isimbi Malika Kabagema

This is a moving abstract animation called Danger Zone. A big eye is formed on the red canvas screaming danger!
**************************************************/
let bg = {
 r:0,
 g:0,
 b:0,
}

let circle1 = {

x:0,
y:250,
size:100,
speed:1,
fill:255,
alpha:100,

}

let circle2 = {

x:500,
y:250,
size:50,
speed:1,
fill:0,
alpha:200,

}
// setup()
//
// The canvas.
function setup() {
noStroke();
createCanvas(500,500);
}

// draw()
//
// Background, circles and motion.
function draw() {

// background color effects
background(bg.r,bg.g,bg.b);

bg.r = map(circle1.size, 100, width, 0, 255);
// bg.r+=0.5;
// bg.r = constrain(bg.r, 0, 150);
// bg.g+=1;
// bg.g = constrain(bg.g, 0, 100);


// left circle (circle1)
circle1.x+= circle1.speed;
circle1.x = constrain(circle1.x, 0, width/2);
circle1.size+= 1;
circle1.size = constrain(circle1.size, 0, 350);
fill(circle1.fill,circle1.alpha);
ellipse(circle1.x, circle1.y, circle1.size);

// right circle (circle2)
circle2.x-= circle2.speed;
circle2.x = constrain(circle2.x, width/2, width);
circle2.size = circle1.size * 0.2;
fill(circle2.fill,circle2.alpha);
ellipse(circle2.x,circle2.y,circle2.size);


}
