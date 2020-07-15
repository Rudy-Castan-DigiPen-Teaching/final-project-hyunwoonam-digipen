class Play{
   constructor(){
     this.bubbles = [];
     this.ems = [];
     this.lives = 1;
     this.player = new Player();
     this.timestamp = millis();
     this.current_timestamp = millis();
     this.delta_time = (this.current_timestamp - this.timestamp) / 1000;
    }

    Update(){
      
    }

    Draw(){
      while (this.bubbles.length < 50){
    this.bubbles.push(new createbubble());
  }
      
      while (this.ems.length < 4){
    this.ems.push(new em());
  }
      
      this.player.Update(this.delta_time);
      for (let b of this.bubbles) {
        b.Update();
        b.Draw();
        
      }
  
      for (let c of this.ems) {
        c.Update(this.delta_time);
    
        c.Draw();
        c.move();
      }
      this.player.Draw();
      
    }
  
}

function createbubbles() {
  while (this.bubbles < 50){
    this.bubbles.push(new createbubble());
  }
}

function createparticles() {
  while (this.ems < 4){
    this.ems.push(new em());
  }
}