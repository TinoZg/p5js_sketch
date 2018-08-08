let bubbles = [];

function setup(){
		createCanvas(800,600);
}

function draw(){
		background(0);
		for(let i = 0; i < bubbles.length; ++i){
			bubbles[i].display();
			bubbles[i].move();
			bubbles[i].checkEdges();
		}

}

function mousePressed(){
	let b = new Ball(mouseX,mouseY,random(20, 40));
	bubbles.push(b);
}

class Ball{

	constructor(x,y,r){
			this.x = x;
			this.y = y;
			this.r = r;
			this.speedX = 5;
			this.speedY = 5;
	}

	display(){
		stroke(255);
		noFill();
		strokeWeight(3);
		ellipse(this.x,this.y,this.r);
	}

	move(){
		this.x = this.x + this.speedX;
		this.y = this.y + this.speedY;
	}

	checkEdges(){
		if(this.x > width || this.x < 0){
			this.speedX *= -1;
		}
		if(this.y > height || this.y < 0){
			this.speedY *= -1;
		}
	}
}
