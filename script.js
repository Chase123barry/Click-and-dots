var x = 0;
var y = 0
var canvasWidth = 800;
var canvasHeight = 800;
var i = 0;



function setup() {
  createCanvas(canvasWidth, canvasHeight);
  makeBackground();
  
}

function makeBackground(){
  background(random(255), random(255), random(255))
}

function draw() {
fill(random(255), random(255), random(255), random(255))
ellipse(x, y, 20);
x = x + 5;

textSize(32);
fill(0,0,0);
text('Score: ' + i , 10, 100);

  var edgeX = x > canvasWidth;
  if (edgeX) {
    y = y + 50;
    x = 0;
  }
  
  var edgeY = y > canvasHeight;
  if (edgeY) {
    noLoop();
  }  
  
  
console.log('X value = ' + x);
console.log('Y value = ' + y)
}

function mousePressed() {
  clear();
  makeBackground();
  fill(0, 0, 128)
  ellipse(mouseX, mouseY, 40);
  
  var bottomBoundaryX = x - 20; 
  var topBoundaryX = x + 20; 
  var isNearX = (mouseX > bottomBoundaryX) && (mouseX < topBoundaryX);

  var bottomBoundaryY = y - 20;
  var topBoundaryY = y + 20;
  var isNearY = (mouseY > bottomBoundaryY) && (mouseY < topBoundaryY);
  
  if (isNearX && isNearY) {
    textSize(32);
    fill(0, 0, 0)
    text('1+ Points', 10, 50)
    i = ++i
  }
  
}
