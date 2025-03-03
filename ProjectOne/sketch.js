/*States for horoscope idea: 
1) user selects a sign (menu)
2) animate between menu and selected
3) display selected sign and text (selected)
*/


/* flower bouquet

1) display the flowers and create booleans for the flowers
2) detect user clicking on flowers
3) display bouquet
y is up and down(should stay the saame)
x is across
*/
//flower
let flower1 = false;
let flower2 = false;
let flower3 = false;
//filler
let filler1 = false;
let filler2 = false;
let filler3 = false;
//leafy greens
let leafy1 = false;
let leafy2 = false;
let leafy3 = false;


//flowers
let flower1x = 30;
let flower1y = 30;
let flower1d = 30; 

let flower2x = 80;
let flower2y = 30;
let flower2d = 30;

let flower3x = 130;
let flower3y = 30;
let flower3d = 30;

let 



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill('red');
  circle(flower1x, flower1y, 30);
  fill('blue');
  circle(flower2x, flower2y, 30);
  fill('yellow')
  circle(flower3x, flower3y, 30);
  
  
  
  //draw bouquet here
  fill(100);
  rect(190,350,20,40);
  
  if( flower1){
    fill('red');
    circle(190,350,30); 
  }
  if (flower2) {
    fill('blue');
    circle(200,350,30);
  }
  if (flower3) {
    fill('yellow');
    circle(210,350,30);
  }
}

function mousePressed(){
  if (dist(flower1x,flower1y,mouseX,mouseY)<10){
    flower1 = true;
  }
  if (dist(flower2x,flower2y,mouseX,mouseY)<10){
    flower2 = true;
  }
  if (dist(flower3x,flower3y,mouseX,mouseY)<10){
    flower3 = true;
  }
  
  
  //check which flower they clicked using the circle button method
  //then inside the curly brackets of the if statement set the flower to true
}
