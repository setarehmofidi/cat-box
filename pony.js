class Pony{
	constructor(){
		this.x=random(width);
		this.y= random(height);
		this.xspeed=random(-5,5);
		this.yspeed=random(-5,5);
		this.visible=false;
	}
	display(){
		if(this.visible){
		imageMode(CENTER);
		image(ponyPic,this.x,this.y,100,130);
		}
	}

	move(){
		this.x=this.x+this.xspeed;
		this.y=this.y+this.yspeed;

		// if((this.x>mouseboxX && this.x<(mouseboxX+50))&&(this.y>mouseboxY && this.y<(mouseboxY+50))){
		// 	this.xspeed=this.xspeed*1.5
		// 	this.yspeed=this.yspeed*1.5
		// }

	}
	bounce(){
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

	intersects(other){
		let d = dist(this.x,this.y,other.x,other.y);
		if(d<=100){
			return true;
		}else{
			return false;
		}
	}
}