let drawRect = false;

function setup() {
  createCanvas(400, 400);
}

function draw(){
  background(220);

  if (drawRect){
    fill(100,19,120,100);
    rect(10,20,50,100);
  }
}

function mousePressed(){
  setTimeout(function(){
    drawRect=true;
  }, 2000);
  }