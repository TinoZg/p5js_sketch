let goinfo;
let b;
let button;

function preload(){
	goinfo = loadImage('gosoft.png');
}

function setup(){
	//createCanvas(windowWidth,windowHeight);
	createCanvas(1024,720);
	b = new Ball();
	button = createButton('klikni me');
	button.mousePressed(change);
}

function draw(){
	background(0,128,140);
	b.display();
	b.move();
	b.checkEdges();

}

function change(){
	image(goinfo,this.x-140,this.y-50,random(150,200),random(80,120));
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
