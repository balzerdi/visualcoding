let isNight = false;

// The setup function is called once at the beginning
function setup() {
  createCanvas(1200, 700);
  background(255);
}

function draw() {
  // Decide to draw either the day or the night
  // based on the isNight variable
  isNight ? drawNight() : drawDay();
}

function drawDay() {
  background('#69D8FF')
  fill('#FFFDAE')
  strokeWeight(0)
  circle(windowWidth / 2, windowHeight / 2, 150)  
}

function drawNight() {
  background('#111')
  fill('white')
  circle(windowWidth / 2, windowHeight / 2, 150)
  fill('#111')
  circle(windowWidth / 2 - 40, windowHeight / 2, 150)
}

function mouseClicked() {
  isNight = !isNight;
}
