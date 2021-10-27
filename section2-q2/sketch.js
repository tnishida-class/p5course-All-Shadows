// チェッカー
function setup() {
  createCanvas(200, 200);
  let size=width/8;

  for(let i=0; i<8; i++){
    for(let j =0; j<8; j++){


      if((i+j)%2==0){
        fill(255);
      }
      else{
        fill(128);
      }
      noStroke();
      rect(size*i, size*j, size,size);
    }
  }



  for(let i=0; i <8; i ++){
    for(let j=0; j<8; j++){
      if((i+j)%2==1&&j<3){
        fill(255,0,0);
        noStroke();
        ellipse(size*i+size/2, size*j+size/2,size*0.85);
        }
      else if ((i+j)%2==1 && j>4){
        fill(0);
        noStroke();
        ellipse(size*i+size/2, size*j+size/2,size*0.85);

      }
    }
  }
}
