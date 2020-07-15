class createbubble{
  constructor(){
    const rd1 = random(0, 800);
    const rd2 = random(0, 600);
    this.pl = new Player();
    this.cen = 0;
    this.e = false;
    this.bx = rd1;
    this.by = rd2;
    this.size = 20;
  }

  Update() {
    if(this.pl.bx == this.bx) {
       this.size = 0;
    }
  }

  Draw() {
    rectMode(CENTER);
    noStroke();
    fill("Aquamarine");
    circle(this.bx, this.by, this.size);
  }
}