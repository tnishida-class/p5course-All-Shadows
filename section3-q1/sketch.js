// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;


function setup() {
  createCanvas(200, 200);
  count=0;
  cycle=100;
  noStroke(0);
  fill(252, 3, 3);
}

function draw() {
  background(252, 3, 240);

  if(keyIsPressed){
     count=(count+4) % cycle;
     }
   else{
  count=(count+2.5)%cycle;
   }

  if(count<50);{
  ellipse(width/2, height/2, count);

}
}
