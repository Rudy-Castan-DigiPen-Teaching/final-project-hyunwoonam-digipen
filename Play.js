class Play{
   constructor(){
     this.bubbles = [];
     this.ems = [];
     this.lives = 1;
     this.player = new Player();
     this.timestamp = millis();
    }

    Update(){
      createbubbles();
      createparticles();
    }

    Draw(){
      let current_timestamp = millis();
      let delta_time = (current_timestamp - timestamp) / 1000;
      this.player.Update(delta_time);
      for (let b of bubbles) {
        b.Update();
        b.Draw();
      }
  
      for (let c of ems) {
        c.Update(delta_time);
    
        c.Draw();
        c.move();
      }
      this.player.Draw();
    }
}

function createbubbles() {
  while (bubbles.length < 50){
    bubbles.push(new createbubble());
  }
}

function createparticles() {
  while (ems.length < 4){
    ems.push(new em());
  }
}