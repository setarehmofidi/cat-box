let ponyPic= [];
let rainbowPic;
let ponies =[];
let whichpony=0;
let number = 10;
let mouseboxX;
let mouseboxY;
let meow=[];
let numMeow = 9;

function setup(){
  createCanvas(windowWidth, windowHeight);
  //let amplitude = new p5.Amplitude(toggleNormalize(true));
  			
for (var i = 0; i <number; i++) {

  ponyPic[i] = loadImage('assets/cat'+i%7+'.png');

  }
  rainbowPic=loadImage('assets/box.png');

  for (let m = 0; m <numMeow; m++) {
  	meow[m] = loadSound('assets/meow'+m+'.wav');
  }

  for (let i=0; i<number; i++){
  	ponies[i] = new Pony();
  }
}
 
function draw(){
	background(0);
//meow.playMode('untilDone');

for(i=0;i<number;i++){
	ponies[i].move();
	ponies[i].display();
	for(let j=0; j<number; j++){
		if(i != j && ponies[i].intersects(ponies[j]) && ponies[i].visible && ponies[j].visible){
			
		
		
  			meow[i%numMeow].playMode('untilDone');
			meow[i%numMeow].play();
		

		}
	  
	}
	
	ponies[i].bounce();
	}
	
imageMode(CENTER);
image(rainbowPic,mouseboxX,mouseboxY,width/8,width/8);

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
