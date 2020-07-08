class createbubble{
  constructor(){
    const rd1 = random(0, 800);
    const rd2 = random(0, 600);
    this.bx = rd1;
    this.by = rd2;
    this.size = 20;
  }

  Update() {
    
  }

  Draw() {
    rectMode(CENTER);
    noStroke();
    fill("Aquamarine");
    circle(this.bx, this.by, this.size);
  }
}