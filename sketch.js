function circle (x, y, diameter){
ellipse (x, y, diameter);
}

function setup() {
  createCanvas (640, 480);
  background (28, 133, 35);
}

function draw() {
  //body
  ellipse (320, 240, 300, 400);
  
    //left iris
  fill (0, 0, 0);
  ellipse (280, 100, 25,30);
  
  //left eye
  circle (280, 90, 50);

  //right eye
  circle (360, 90, 50);
  //right iris
  fill (0, 0, 0);
  ellipse (360, 100, 25, 30);
  
}