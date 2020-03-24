class Pony{ //In this case Cats!
	constructor(){
		this.x=random(width);
		this.y= random(height);
		this.xspeed=random(-5,5);
		this.yspeed=random(-5,5);
		this.visible=false;//boolean used to determines if a new instnance is being displayed or not
	}
	display(){
		if(this.visible){
		imageMode(CENTER);
		let whichCat=0;
		image(ponyPic[i],this.x,this.y,100,130);
		
	}

	}

	move(){
		this.x=this.x+this.xspeed;
		this.y=this.y+this.yspeed;

		

	}
	bounce(){//function for bouncing the objects off the edges
		if(this.x<30 || this.x>(width-30)){
			this.xspeed= -this.xspeed
		}
		if(this.y<30 || this.y>(height-30)){
			this.yspeed= -this.yspeed
		}
	}
	teleportPony(xloc,yloc){
		this.x=xloc;
		this.y=yloc;
	}
	makePonyVisible(){
		this.visible=true;
	}

	intersects(other){ //Collision detection
		let d = dist(this.x,this.y,other.x,other.y);
		if(d<=100){
			return true;
			
		}else{
			return false;

		}
	}

	moveAway(){//This actually doesn't work!
		this.x=this.x+this.xspeed*-1;
		this.y=this.y+this.yspeed*-1;
		// other.x=other.x+other.xspeed*-1;
		// other.y=other.y+other.yspeed*-1;
		
	}
}
