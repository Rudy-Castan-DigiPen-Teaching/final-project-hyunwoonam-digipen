class em{
  constructor(){
    const rd1 = random(-300, 300);
    const rd2 = random(-300, 300);
    this.isDead = true;
	this.isExploding = false;
	// this.explosionEmitter = new ParticleEmitter();
    this.bx = width/2 + rd1;
    this.by = height/2 + rd2;
    this.sx = 2;
    this.sy = 3;
    this.xpm = 0;
    this.ypm = 0;
    this.size = 50;
  }

  move(){
    this.bx += this.sx;
    this.by += this.sy;
    
    if(this.bx < 0){
      this.xpm = +1
    }
    else if(this.bx > width){
      this.xpm = -1
    }
    
    else if(this.by < 0){
      this.ypm = +1
    }
    else if(this.by > height){
      this.ypm = -1
    }
    else if((this.ax <= this.bx <= this.ax+70) || (this.ay <= this.by <= this.ay + 20)){
      this.xpm = -1
      this.ypm = -1
    }
    
    if(this.bx < 0 || this.bx > width) {
      this.sx += this.xpm;
    }
    else if(this.by < 0 || this.by > height) {
      this.sy += this.ypm;
    }
  }

  Update(delta_time) {
		
	}
  
  Draw() {
		  rectMode(CENTER);
          noStroke();
          fill("red");
          circle(this.bx,this.by, this.size);
	}

	ShutDown()
	{
		this.isDead = true;
		this.isExploding = false;
		this.explosionEmitter.ShutDown();
	}
}