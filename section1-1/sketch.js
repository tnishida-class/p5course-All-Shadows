function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(6);
  fill(198, 3, 252);
  triangle(0,0,130,0,65,70);
  fill(252, 3, 94);
  triangle(0,130,130,130,65,65);
  fill(255);
  textSize(12);
  textFont("30");
  text("❤︎ Mac is the best ❤︎", 11, 70);
}
