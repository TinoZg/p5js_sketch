let goinfo;
let b;

function preload(){
	goinfo = loadImage('gosoft.png');
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	b = new Ball();
}

function draw(){
	background(0,128,140);
	b.display();
	b.move();
	b.checkEdges();

}

class Ball{
	constructor(){
		this.x = width/2;
		this.y = height/2;
		this.speedX = 3;
		this.speedY = 3;
	}

	display(){
		image(goinfo,this.x-140,this.y-50,180,100);
	}

	move(){
		this.x = this.x + this.speedX;
		this.y = this.y + this.speedY;
	}

	checkEdges(){
		if(this.x > width-25 || this.x < 25){
			this.speedX *= -1;
		}
		if(this.y > height-25 || this.y < 25){
			this.speedY *= -1;
		}
	}

}
