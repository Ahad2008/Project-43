var hr, mn, sc
var hrh, mnh, sch;

function setup() {
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200, 200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();
  
  sch = map(sc, 0, 60, 0, 360);
  mnh = map(mn, 0, 60, 0, 360);
  hrh = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(sch);
  stroke("Blue");
  strokeWeight(7);
  line(0, 0, 150, 0);
  pop();

  push();
  rotate(mnh);
  stroke("Red");
  strokeWeight(7);
  line(0, 0, 125, 0);
  pop();

  push();
  rotate(hrh);
  stroke("Yellow");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();  

  point(0, 0);
  strokeWeight(10);
  noFill();

  stroke("Blue");
  arc(0, 0, 300, 300, 0, sch);

  stroke("Red");
  arc(0, 0, 250, 250, 0, mnh);

  stroke("Yellow");
  arc(0, 0, 200, 200, 0, hrh);
}