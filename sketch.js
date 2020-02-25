let ponyPic,rainbowPic;
let ponies =[];
let whichpony=0;
let number = 20;
let mouseboxX;
let mouseboxY;
let meow;
function setup(){
  createCanvas(600,600);
  
  ponyPic = loadImage('assets/cat0.png');
  rainbowPic=loadImage('assets/box.png');
  meow = loadSound('assets/meow.wav')
  for (let i=0; i<number; i++){
  	ponies[i] = new Pony();
  }
}
 
function draw(){
	background(0);


for(i=0;i<number;i++){
	ponies[i].move();
	ponies[i].display();
	for(let j=0; j<number; j++){
		if(i != j && ponies[i].intersects(ponies[j]) && ponies[i].visible && ponies[j].visible){
		
			ponies[i].visible=false;
			ponies[j].visible=false;
			meow.play();
		}
	  
	}
	
	ponies[i].bounce();
	}
	
imageMode(CENTER);
image(rainbowPic,mouseboxX,mouseboxY,width/4,width/4);

// ponies[5].intersects(ponies[3]);
}

function mousePressed(){
	mouseboxX=mouseX;
	mouseboxY=mouseY;
	ponies[whichpony].teleportPony(mouseX,mouseY);
	ponies[whichpony].makePonyVisible();
	whichpony++;
	whichpony= whichpony%number;
  }
// class Pony{
// 	constructor(){
// 		this.x=random(width);
// 		this.y= random(height);
// 		this.xspeed=random(-5,5);
// 		this.yspeed=random(-5,5);
// 		this.visible=false;
// 	}
// 	display(){
// 		if(this.visible){
// 		imageMode(CENTER);
// 		image(ponyPic,this.x,this.y,100,130);
// 		}
// 	}

// 	move(){
// 		this.x=this.x+this.xspeed;
// 		this.y=this.y+this.yspeed;

// 		// if((this.x>mouseboxX && this.x<(mouseboxX+50))&&(this.y>mouseboxY && this.y<(mouseboxY+50))){
// 		// 	this.xspeed=this.xspeed*1.5
// 		// 	this.yspeed=this.yspeed*1.5
// 		// }

// 	}
// 	bounce(){
// 		if(this.x<30 || this.x>(width-30)){
// 			this.xspeed= -this.xspeed
// 		}
// 		if(this.y<30 || this.y>(height-30)){
// 			this.yspeed= -this.yspeed
// 		}
// 	}
// 	teleportPony(xloc,yloc){
// 		this.x=xloc;
// 		this.y=yloc;
// 	}
// 	makePonyVisible(){
// 		this.visible=true;
// 	}

// 	intersects(other){
// 		let d = dist(this.x,this.y,other.x,other.y);
// 		if(d<=100){
// 			return true;
// 		}else{
// 			return false;
// 		}
// 	}
// }
