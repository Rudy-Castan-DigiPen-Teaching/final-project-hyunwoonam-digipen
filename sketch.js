let bubbles = [];
let particles = [];
let lives = 1;
let player;
let timestamp;

function setup() {
  createCanvas(800, 600);
  createbubbles();
  createparticles();
  player = new Player();
  timestamp = millis();
  
}

function draw() {
  background(150);
  
  let current_timestamp = millis();
  let delta_time = (current_timestamp - timestamp) / 1000;
  timestamp = current_timestamp;
  
  player.Update(delta_time);
  for (let b of bubbles) {
    b.Update(delta_time);
    b.Draw();
  }
  
  for (let c of particles) {
    c.Update(delta_time);
    c.Draw();
    c.move();
  }
  player.Draw();
  
}
  
function createbubbles() {
  while (bubbles.length < 50){
    bubbles.push(new createbubble());
  }
}

function createparticles() {
  while (particles.length < 4){
    particles.push(new particle());
  }
}

// let player;
// let bombs = [];
// let lives = 1;
// let score = 0;
// let isPause = true;
// let bombsPerFrame = 0.005;
// let bombsToSpawn = 3;
// let scoreEffect = 1;
// let trauma = 0;
// const MaxShakeAngle = 3.14 / 8;
// const MaxShakeOffset = 50;

// let timestamp;

// function preload() {
//   // soundPreload();
// }

// function setup() {
//   createCanvas(800, 600);
//   player = new Player();
//   createBombPool();
//   timestamp = millis();
// }

// function draw() {
//   background('gray');
//   let current_timestamp = millis();
//   let delta_time = (current_timestamp - timestamp) / 1000;
//   timestamp = current_timestamp;

//   // trauma = constrain(trauma, 0, 1);
//   // if(trauma > 0){
//   //   const shake = trauma * trauma;
//   //   const offset_x = MaxShakeOffset * shake * random(-1,1);
//   //   const offset_y = MaxShakeOffset * shake * random(-1,1);
//   //   const angle = MaxShakeAngle * shake * random(-1,1);
//   //   trauma -= delta_time;
//   //   translate(width/2, height/2);
//   //   translate(offset_x, offset_y);
//   //   rotate(angle);
//   //   translate(-width/2, -height/2);
//   // }
//   player.Update(delta_time);

//   // bombsToSpawn += bombsPerFrame;
//   // bombsPerFrame += 0.01 * delta_time;

//   for (let b of bombs) {
//     if (b.isDead && bombsToSpawn >= 1) {
//       b.Reset(player.pos);
//       bombsToSpawn--;
//     }

//     b.Update(delta_time);

//     // if (!player.isInvulnrable && !b.isDead) {
//     //   if (b.isExploding && playerVsBomb(b)) {
//     //     lives--;
//     //     // playLoseLifeSfx();
//     //     player.OnBombCollide(b);
//     //     // trauma += 0.6;
//     //   }
//     // }

//     b.Draw();
//   }

//   // if (lives <= 0 && trauma <= 0)
//   //   isPause = true;

//   player.Draw();

//   // score++;
//   // displayStatus();
// }

// // function playerVsBomb(bomb) {
// //   let difference = p5.Vector.sub(player.pos, bomb.pos);
// //   let distanceSquared = p5.Vector.dot(difference, difference);
// //   let radiusSquared = player.radius + bomb.blastRadius;
// //   radiusSquared *= radiusSquared;

// //   return (distanceSquared < radiusSquared);
// // }

// // function mousePressed() {
// //   if (isPause) {
// //     score = 0;
// //     isPause = false;
// //     lives = 3;
// //     bombsPerFrame = 0.005;
// //     bombsToSpawn = 3;
// //     createBombPool();
// //     // playStartGameSfx();
// //   }
// // }

// function createBombPool() {
//   while (bombs.length < 50)
//     bombs.push(new createbubble());

//   // for (let b of bombs) {
//   //   // b.ShutDown();
//   // }
// }

// // function displayStatus() {
// //   textSize(32);
// //   strokeWeight(5);
// //   stroke(0);
// //   fill('Aquamarine');
// //   textAlign(LEFT);
// //   text(lives, 10, 30);
// //   if (score % 100 == 0)
// //     scoreEffect = 1.2;
// //   if (scoreEffect > 1) {
// //     fill(114, 229, 190);
// //     textSize(32 * scoreEffect);
// //     scoreEffect -= 0.01;
// //   } else
// //     textSize(32);

// //   text(score, 10, 70);
// // }