let jsonURL = "https://gist.githubusercontent.com/vogelino/903d120232373ba3664fbb8fb03620bc/raw/ea0986b8f9de9416276246db31970d83d9f7d0d9/bikeTheftsBerlin2022.json"
let FRAMERATE = 30

let DATA_PULLED = false;

let WOMAN_BIKES = []
let MEN_BIKES = []

let FIRST_RENDER = true;

let rotation = 0;

let selectedDay = 1

function setup() {
  createCanvas(1200, 700);

  // First, we load the file
  loadJSONFile(jsonURL)
    .then(response => {
      console.log(response)

      WOMAN_BIKES = response.thefts.filter(item => item.bikeType == 'Damenfahrrad')
      MEN_BIKES = response.thefts.filter(item => item.bikeType == 'Herrenfahrrad')

      console.log(`Es wurden ${WOMAN_BIKES.length} Damenräder geklaut`)
      console.log(`Es wurden ${MEN_BIKES.length} Herrenräder geklaut`)

      DATA_PULLED = true
    })


  frameRate(FRAMERATE)
}

function draw() {
  background('#111')

  let stolenWomanBikes = WOMAN_BIKES.filter(item => item.addedDay == selectedDay && item.addedYear == 2022 && item.addedMonth == 11)
  let stolenMenBikes = MEN_BIKES.filter(item => item.addedDay == selectedDay && item.addedYear == 2022 && item.addedMonth == 11)

  if (DATA_PULLED) {
    push()
    fill('rgba(255,255,255,0.75')
    strokeWeight(0.5)
    textSize(20)
    textAlign(CENTER)
    const d = selectedDay < 10 ? "0" + selectedDay : selectedDay
    const fullDate = "2022-11-" + d + "T06:00:00"
    let date = new Date(fullDate)
    let output = `Am ${getDayOfWeek(date.getDay())}, ${selectedDay}.11. wurden ${stolenWomanBikes.length + stolenMenBikes.length} Fahrräder gestohlen`
    text("Im November 2022 gestohlene Fahrräder", 0, 32, windowWidth, 32)
    text(output, 0, 64, windowWidth, 32)
    pop()
  }

  if (FIRST_RENDER && DATA_PULLED) {
    console.log(`Am ${selectedDay}. wurden ${stolenWomanBikes.length} Damenräder und ${stolenMenBikes.length} Herrenräder geklaut`)
    FIRST_RENDER = false;
  }

  stroke('white');
  strokeWeight(4)
  noFill();
  drawCircle(
    'Damenräder',
    stolenWomanBikes.length,
    stolenWomanBikes.filter(item => item.delict == "Keller- und Bodeneinbruch").length,
    windowWidth / 4,
    windowHeight / 2
  )

  drawCircle(
    'Herrenräder',
    stolenMenBikes.length,
    stolenMenBikes.filter(item => item.delict == "Keller- und Bodeneinbruch").length,
    windowWidth / 4 + windowWidth / 2,
    windowHeight / 2,
  )
}

// This is advanced. Ingnore if needed.
// We define an asynchronouse function, meaning
// it will not stop the execution of the program
async function loadJSONFile(path) {
  // We pause the execution of the loadJSONFile function
  // Until the fetch function has finish executing
  // This is made with the await keyword
  // An we save the result of fetch into the let response
  let response = await fetch(path)
  // We wait until the response is parsed into a JSON
  // format and we save the result in a let json
  let json = await response.json()

  return json
}

function drawCircle(name, count, grandDelicts, posX, posY) {
  rotation += 0.4

  let points = count
  let redLines = grandDelicts;
  let drawRedLine = 0;
  let pointAngle = 360 / points;
  let radius = count * 3;

  push()
  fill('white')
  strokeWeight(0.5)
  textSize(16)
  textAlign(CENTER)
  let output = `gestohlene ${name}: ${count}`
  text(output, posX, windowHeight - 64)
  pop()

  push()
  fill('red')
  strokeWeight(0.5)
  textSize(16)
  textAlign(CENTER)
  let grand = `${grandDelicts} davon schwerer Diebstahl`
  text(grand, posX, windowHeight - 32)
  pop()

  push()
  strokeWeight(1)
  translate(posX - radius, posY - radius)

  for (angle = 270; angle < 630; angle = angle + pointAngle) {

    if (drawRedLine < redLines) {
      stroke('red')
      drawRedLine++
    }

    x = cos(radians(angle - rotation)) * radius;
    y = sin(radians(angle - rotation)) * radius;
    line(radius, radius, x + radius, y + radius);

    stroke('white')
  }

  pop()

  circle(
    posX,
    posY,
    count * 2 * 3
  )
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    if (selectedDay == 1) {
      selectedDay = 30
    } else {
      selectedDay--
    }
  } else if (keyCode == RIGHT_ARROW) {
    if (selectedDay == 30) {
      selectedDay = 1
    } else {
      selectedDay++
    }
  }
}

function getDayOfWeek(day) {
  console.log(day)
  switch (day) {
    case 1: return 'Mo';
    case 2: return 'Di';
    case 3: return 'Mi';
    case 4: return 'Do';
    case 5: return 'Fr';
    case 6: return 'Sa';
    case 0: return 'So';
  }
}