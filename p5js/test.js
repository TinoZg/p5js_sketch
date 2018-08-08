var bubble = {x : 300, y : 200};
var on = false;
function setup(){
	createCanvas(600,400);
}

function draw(){
	if (on){
		background(0,255,0);
	} else{
		background(0);
	}
	stroke(255);
	strokeWeight(4);
	noFill();

	}

function mousePressed(){
	on = !on;
}
