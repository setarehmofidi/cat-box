let ponyPic= []; //box pic here
let rainbowPic;//box
let ponies =[]; // Cats!
let whichpony=0;//whichCat
let number = 10;
let mouseboxX;//hit box X
let mouseboxY;//hit box Y
let meow=[];
let numMeow = 9;

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  			
for (var i = 0; i <number; i++) { //loading 8 cat picture files names cat(number).png

  ponyPic[i] = loadImage('assets/cat'+i%7+'.png');

  }
  rainbowPic=loadImage('assets/box.png');

  for (let m = 0; m <numMeow; m++) { //loading differenet meow sounds to go through
  	meow[m] = loadSound('assets/meow'+m+'.wav');
  }

  for (let i=0; i<number; i++){
  	ponies[i] = new Pony(); //creating instances of  a class
  }
}
 
function draw(){
	background(0);

for(i=0;i<number;i++){
	ponies[i].move();
	ponies[i].display();
	for(let j=0; j<number; j++){
		if(i != j && ponies[i].intersects(ponies[j]) && ponies[i].visible && ponies[j].visible){
			
		
		
  			meow[i%numMeow].playMode('untilDone');  //prevents the sounds from being played on top of each other

			meow[i%numMeow].play();//modulo acts like a counter to go through all numbers in an array
		

		}
	  
	}
	
	ponies[i].bounce();
	}
	
imageMode(CENTER);
image(rainbowPic,mouseboxX,mouseboxY,width/8,width/8);

}

function mousePressed(){//creating a new instance of a class every time mouse is clicked
	mouseboxX=mouseX;
	mouseboxY=mouseY;
	ponies[whichpony].teleportPony(mouseX,mouseY);
	ponies[whichpony].makePonyVisible();
	whichpony++;
	whichpony= whichpony%number;
	
  }


