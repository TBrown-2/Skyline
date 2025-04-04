let r = 0;
let pulse = 0;
let rSpeed = 0.01;
let pulseSpeed = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(250);

  translate(width / 2, height / 2);

  let d = 150 * sin(pulse);

  for (let i = 0; i < 10; i++) {
    push();
    rotate(r + TWO_PI * i / 10); // Evenly spaced rotation
    translate(d, 80);
    fill(200, 100, 100); // HSB: blue-ish
    stroke(100, 200, 50);
    strokeWeight(4);
    ellipse(0, 0, 50, 80);
    pop();
  }

  pulse += pulseSpeed;
  r += rSpeed;
}

function mousePressed() {}
  if (rSpeed === 0) {
    rSpeed = 0.01;
    pulseSpeed = 0.05;
  } else {
    rSpeed = 0;
    pulseSpeed = 0;
  }
