// 練習問題：神戸市のマーク
function setup(){
  createCanvas(600, 400);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100 - 25, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);
  // BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

  fill (blue);
  noStroke();
  ellipse(300,100,100,100);
  fill(255);
  ellipse(293,93,95,95);
  fill(green);
  ellipse(296,90,80,80);
  fill(255)
  ellipse
  (294,95,75,72);


  fill(0);　
  textSize(22);
  textFont("serif");
  text("KOBE", 262, 95);

  fill(0);
  textSize(11);
  textFont("serif");
  text("university",277,107);

  fill (0);
textSize(30);
  textFont("serif");
  text("🌺",235,120);


}
