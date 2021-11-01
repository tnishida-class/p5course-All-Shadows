// EUの国旗
function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  textSize(50)
}

function draw() {
  background(55, 52, 235);
  fill(235, 192, 52);
  translate(width / 2, height / 2);


  for (let i = 0; i < 12; ++i) {
    push();
      var angle = 360 / 12 * i
      rotate(angle);

      translate(int(width / 5), 0);

    push()

       text("★", 0, 0)
    pop()

    pop();
  }


}
