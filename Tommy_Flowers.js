let n = 14;
let startX = 10;
let xstep = 100;
let startY = 10;
let ystep = 100;
let circleX = 450;
let circleY = 375;
let score = 0;

let collectedFlowers = [];

function setup() {
  createCanvas(900, 750);
}

function draw() {
  background(220);
  fill("green");
  rect(1, 1, 900, 750);
  for (let i = 0; i < n; i++) {
    let x = startX + xstep * i;
    for (let j = 0; j < n; j++) {
      let y = startY + ystep * j;
      let id = y * n + x;
      if (collectedFlowers.includes(id)) {
        fill(0);
        text(".", x, y);
      } else {
        let d = dist(circleX, circleY, x, y);
        if (d < 10) {
          score += 1;
          collectedFlowers.push(id);
        }
        text("🌸", x, y);
      }
    }
  }
  console.log(collectedFlowers);

  if (keyIsDown(RIGHT_ARROW)) {
    circleX = circleX + 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    circleX = circleX - 5;
  }
  if (keyIsDown(UP_ARROW)) {
    circleY = circleY - 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    circleY = circleY + 5;
  }

  fill("black");
  circle(circleX, circleY, 10);

  textAlign(RIGHT, TOP);
  fill(220);
  text(score, width - 20, 20);

  textAlign(RIGHT, TOP);
}
