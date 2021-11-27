var numOfglobs
var img;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  numOfglobs = 14
  textSize(40)
  img=loadImage('ツイッターイメージ.png');
}

function draw() {
  background(0);
  noStroke();

image(img,110,90,400);


  translate(width / 2, height / 2);

  rotate(frameCount / 10);

  for (let i = 0; i < numOfglobs; ++i) {
    push();
      var angle = 360 / numOfglobs * i
      rotate(  angle);

      translate(int(width / 3), 0);

    push()
    rotate(250)
fill(3, 252, 111)
       text("----🌐-----", 0, 0)

    pop()
    pop();
  }
}

noFill();
for(let i = 0; i < 10; i++){
  let r = i*10+10;
  if(i<5){
    stroke(0,0,255);
  }
  else {
    stroke(255,0,0);
    }
    ellipse(50,50,r);
    // BLANK[1]
  }
