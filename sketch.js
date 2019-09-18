let angle = 0;
// Play around with the following:
let circleSize = 100;
let distance = 200;
let noCircles = 150;
let noKnots = 4;
let nextCircle = 0;
let convex = 0; // 0 if convex
let color = true;
let loop = true;
let alpha = 40;
let speed = 10;

function setup() {
  createCanvas(700, 700);
  background(220);
}

function draw() {
  for (let i = 0; i < speed; i++) logic();
}

function logic() {
  push();
  if (!loop && angle > 2 * PI) return;
  if (angle > 2 * PI) angle -= 2 * PI;
  noFill();
  let col = createVector(0, 0, 0);
  if (angle < 2 * PI / 3) {
    col.x = angle * 255 / (2 * PI / 3);
    col.z = 255 - col.x;
  } else if (angle < 4 * PI / 3) {
    col.y = (angle - 2 * PI / 3) * 255 / (2 * PI / 3);
    col.x = 255 - col.y;
  } else {
    col.z = (angle - 4 * PI / 3) * 255 / (2 * PI / 3);
    col.y = 255 - col.z;
  }
  if (color) stroke(col.x, col.y, col.z, alpha);
  else stroke(0, alpha);
  //background(220);
  translate(width / 2, height / 2);
  angle += 2 * PI / noCircles;
  //if (2 * PI / noCircles * nextCircle < angle) {
  //console.log(nextCircle);
  rotate(angle);
  circle(0, distance, circleSize * abs(convex - abs(sin(angle / 2 * noKnots))));
  nextCircle++;
  pop();
  // }
}