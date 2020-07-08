class Player {
	constructor() {
		this.pos = createVector(width / 2, height / 2);
		this.radius = 12;
		this.easing = 0.05;
		this.velocity = createVector(0, 0);
		this.damping = 0.8;
		this.isInvulnrable = false;
		this.coolDownToNormal = 0;

		this.eyeballSize = 8;
		this.eyesDistance = 6;
		this.eyesPos = createVector();
		this.eyeballsPos = createVector();
	}

	Draw() {
		noStroke();
		fill("Blue");
		ellipse(this.pos.x, this.pos.y, this.radius * 2);

		noStroke();
		fill(255,255,255);
		ellipse(this.eyesPos.x - this.eyesDistance, this.eyesPos.y, this.eyeballSize);
		ellipse(this.eyesPos.x + this.eyesDistance, this.eyesPos.y, this.eyeballSize);
		fill(0,0,0);
		
		ellipse(this.eyeballsPos.x - this.eyesDistance, this.eyeballsPos.y, this.eyeballSize * 0.7);
		ellipse(this.eyeballsPos.x + this.eyesDistance, this.eyeballsPos.y, this.eyeballSize * 0.7);
	}

	Update(delta_time) {
		if (!this.isInvulnrable) {
			var targetX = mouseX;
			var dx = targetX - this.pos.x;
			this.pos.x += dx * this.easing;

			var targetY = mouseY;
			var dy = targetY - this.pos.y;
			this.pos.y += dy * this.easing;
		} else {
			this.pos.add(p5.Vector.mult(this.velocity, delta_time));
			this.velocity.mult(this.damping);
		}

		if (this.coolDownToNormal > 0) {
			this.coolDownToNormal--;
			this.isInvulnrable = this.coolDownToNormal > 0;
		}

		if(this.pos.x < 0)
			this.pos.x = 0;
		else if(this.pos.x > width)
			this.pos.x = width;
		if(this.pos.y < 0)
			this.pos.y = 0;
		else if(this.pos.y > height)
			this.pos.y = height;

		let direction = createVector(this.pos.x - mouseX, this.pos.y - mouseY).mult(0.05);
		//let direction = createVector(this.pos.x - mouseX, this.pos.y - mouseY).normalize().mult(2);
		this.eyesPos.set(this.pos.x, this.pos.y - 3);
		this.eyeballsPos.set(this.eyesPos.x - direction.x, this.eyesPos.y - direction.y);
	}

}