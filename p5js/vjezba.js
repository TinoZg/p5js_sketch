let circles = []; //empty array

function setup(){
  createCanvas(640,360);
  while(circles.length < 100){
    let circle = {
      x : random(width),
      y : random(height),
      r : random(12,36)
  };
    let overlapping = false;
    for(rainbow of circles){
      let d = dist(circle.x,circle.y,rainbow.x,rainbow.y);
      if (d < circle.r + rainbow.r){
          overlapping = true;
          break;
      }
    }
    if(!overlapping){
      circles.push(circle);
    }

    for(circle of circles){
      fill(255,0,150,100);
      noStroke();
      ellipse(circle.x,circle.y,circle.r);
    }
  }
}

function draw(){

}
