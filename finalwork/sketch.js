var numOfglobs
var img;
let emoji;
let count;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  numOfglobs = 14
  textSize(40)
  img=loadImage('ツイッターイメージ.png');
  emoji = [];
  count = 0;
}

function draw() {
  count++;
  background(0);
    // ellipse(width/2+10,height/2,400);
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

    pop();
    pop();



}

for(let i = 0; i < emoji.length; i++){
  let b = emoji[i];
  rotate(-(frameCount / 10));
  push();

    textSize(30);
    text(b.text,b.x,b.y);
  b.x += b.vx;
  b.y += b.vy;
  pop();
}
  for(let i = 0; i < emoji.length; i++){
    let b = emoji[i];
    if(b.x>width || b.x<0-width/2 || b.y> height || b.y<0-width/2){
      emoji.splice(i,1);
    }
  }

  }

function mouseDragged(){
  if(mouseX >110 && mouseX < 510 && mouseY>100 && mouseY<500){
    rotate(-frameCount / 5);
    const dx = mouseX - pmouseX;
    const dy = mouseY - pmouseY;
    if(mag(dx, dy) > 5 && mag(dx, dy) <15){
      const b = { x: mouseX-width/2, y: mouseY-height/2, size: random(20,30), vx: dx/5, vy: dy/5 ,text: "❤️"};
      emoji.push(b);
    }else if(mag(dx, dy) >= 15 && mag(dx, dy) <25){
      const b = { x: mouseX-width/2, y: mouseY-height/2, size: random(20,30), vx: dx/5, vy: dy/5 ,text: "👍"};
      emoji.push(b);
    }else if(mag(dx, dy) >= 25){
      const b = { x: mouseX-width/2, y: mouseY-height/2, size: random(20,30), vx: dx/5, vy: dy/5 ,text: "💬"};
      emoji.push(b);
    }
  }

}
