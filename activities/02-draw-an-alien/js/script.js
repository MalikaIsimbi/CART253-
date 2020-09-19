/**************************************************
02-draw-an-alien
Isimbi Malika Kabagema

This is a drawing of a purple alien, Centella, who loves being silly, dreams a lot and has big puffy hair.
**************************************************/

// setup()
//
// The drawing of Centella, the alien.
function setup() {

createCanvas(640,480);

// Set the background to green.
background(178,224,121);
noStroke();

// Draw the color gradient effect behind Centella.

noStroke();

fill(76,14,115);
circle(320,220,360);

fill(66,14,115);
circle(320,220,350);

fill(53,14,115);
circle(320,220,340);

fill(39,14,115);
circle(320,220,330);

fill(14,27,115);
circle(320,220,320);

fill(14,46,115);
circle(320,220,310);

fill(14,75,115);
circle(320,220,300);

fill(14,100,115);
circle(320,220,290);

fill(14,115,115);
circle(320,220,280);

fill(14,115,91);
circle(320,220,270);

fill(14,115,73);
circle(320,220,260);

fill(14,115,59);
circle(320,220,250);

fill(14,115,33);
circle(320,220,240);

fill(22,115,14);
circle(320,220,230);

fill(63,115,14);
circle(320,220,220);

fill(81,115,14);
circle(320,220,210);

fill(105,115,14);
circle(320,220,200);

fill(212,224,34,40);
circle(320,220,190);

fill(224,227,34,50);
circle(320,220,190);

fill(227,166,34,90);
circle(320,220,180);

fill(227,98,34,100);
circle(320,220,170);

fill(34,227,227,150);
circle(320,220,160);

fill(185,34,227,190);
circle(320,220,150);

fill(227,34,114,180);
circle(320,220,140);

fill(105,227,34,190);
circle(320,220,130);

fill(69,34,227,200);
circle(320,220,120);

fill(224,227,34,220);
circle(320,220,110);

fill(227,34,34);
circle(320,220,104);

// Draw the body of Centella.
fill(164,129,235,60);
ellipse(320,480,230,290);

fill(164,129,235,100);
ellipse(320,480,215,290);

fill(164,129,235);
ellipse(320,480,200,300);

// Draw the translucent hovering neck.
fill(222,212,252);
ellipse(320,325,100,10);

fill(207,255,204,90);
rect(270,295,100,30);

fill(222,212,252);
ellipse(320,295,100,10);

fill(222,212,252,150);
ellipse(320,325,100,10);

// Draw the head of Centella.

fill(222,212,252);
ellipse(320,196,120,150);

// Draw the eyes of Centella.

stroke(74,92,84, 150);
line(270,180,300,180);
line(340,180,370,180);

fill(255,255,255,100);
noStroke();
arc(285,194,30,50,150, PI + QUARTER_PI, OPEN);
arc(355,194,30,50,150, PI + QUARTER_PI, OPEN);

fill(167,222,91, 150);
noStroke();
arc(300,181,40,50, HALF_PI,PI);
arc(370,181,40,50, HALF_PI,PI);

fill(255, 51, 51,180);
noStroke();
arc(300,181,25,40, HALF_PI, PI);
arc(370,181,25,40, HALF_PI, PI);

fill(51,245,255);
arc(300,181,20,30, HALF_PI, PI);
arc(370,181,20,30, HALF_PI, PI);

// Draw the mouth of Centella.


// Draw the hair of Centella.
ellipseMode(RADIUS);
fill(102,59,49);
noStroke();
ellipse(320,100,40,30);
ellipse(265,120,45,35);
ellipse(290,125,40,20);
ellipse(240,140,40,30);
ellipse(225,210,40,30);
ellipse(229,175,40,30);
ellipse(365,125,40,20);
ellipse(380,115,40,30);
ellipse(405,150,40,30);
ellipse(415,180,40,30);
ellipse(415,210,40,30);



}

// draw()
//
// Description of draw() goes here.
function draw() {

}
