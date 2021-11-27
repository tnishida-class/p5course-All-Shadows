// 最終課題を制作しよう

var angle = 0;
var slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  textSize(50)
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(50, 168, 125);
  translate(200, height);
  branch(120);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 3) {
    push();
    rotate(angle);
    branch(len * 0.63);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.63);
    pop();
  }

  line(0, 0, 0, -len * 0.67);
}


  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 100 + cos(theta) * 50;
    let y = 100 + sin(theta) * 50;
    star(x, y, 10);
  }
}

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
