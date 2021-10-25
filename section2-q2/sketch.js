// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width/8;
  noStroke();
for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){

     if((i+j)%2==0){
    fill(250);

  }
  if((i+j)%2==1){
    fill(150)

  }
    rect(i * size, j * size,size, size);
  }

}

  for(let r =0;  r<5; r++){
    fill(255,0,0);
  circle(37.5+50*(r-1),12,size);

  }


  for (let k=0;  k<5; k++){
    fill(255,0,0);
  circle(12.5+50*(k-1),37.5,size);
  }


   for(let s =0;  s<4; s++){
    fill(255,0,0);
  circle(37.5+50*(s-1),62.5,size);
  }


  for(let w =0;  w<5; w++){
    fill(0);
  circle(12.5+50*(w-1),137.5,size);
  }


   for(let h =0;  h<5; h++){
    fill(0);
  circle(37.5+50*(h-1),162.5,size);
   }

  for(let m =0;  m<5; m++){
    fill(0);
  circle(12.5+50*(m-1),187.5,size);
   }


}
