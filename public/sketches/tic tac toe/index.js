const BLOB_COUNT = 100
const WINDOW_WIDTH = 1200
const WINDOW_HEIGHT = 700
const WIDTH = 400
const HEIGHT = 400

let player = true;

const x = {
  points: 8,
  radius: 30,
  distance: 10,
  angle: 2,
}

const FIELD = []

const player_1 = (x, y) => {
  
  fill(0, 100, 100)
  drawBlob(
      generateBlob(
        { x: x, y: y },
        8,
        30,
        10,
        2
      )
  )
}

const player_2 = (x, y) => {
  
  fill(120, 100, 100)
  drawBlob(
      generateBlob(
        { x: x, y: y },
        3,
        50,
        25,
        1.4
      )
  )
}

function setup() {
  createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
  background(220);
  
  for (let i = 0; i <= BLOB_COUNT; i++) {
    noStroke()
    const hue = random(360)
    colorMode(HSB)
    fill(hue, 20, 95)
    
    drawBlob(
      generateBlob(
        { x: random(1200), y: random(700) },
        random(3, 5), 
        random(40, 80), 
        random(20, 70), 
        random(2, 5)
      )
    )
  }
  
  drawField()
}

function draw() {
  
}

function mouseClicked(event) {
  
  let index = FIELD.findIndex( item =>     item.isInsideBoundaries(event.x, event.y))
  
  if (index !== -1) {
    if (!FIELD[index].checked) {
      FIELD[index].drawInside((x, y) => {
        player ? player_1(x, y) : player_2(x, y)
        player = !player
      })
      FIELD[index].checked = true
      FIELD[index].owner = player ? 'Player 2' : 'Player 1'
    } else {
      console.log("Dieses Feld gehört bereits "+FIELD[index].owner)
    }
  }
}

function drawField() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const size = (WIDTH - 20 * 2) / 3
      
      const paddingLeft = 1200 / 2 - (size * 3) / 2
      const paddingTop = 700 / 2 - (size * 3) / 2

      const x = paddingLeft + j * size
      const y = paddingTop + i * size
      FIELD.push(new Field(
        size, 
        { x: x, y: y }
      ))
    }
  }
  
  FIELD.forEach( item => item.draw())
}

function drawBlob(blob) {
  beginShape()
  
  vertex(blob[0].x, blob[0].y)
  
  for (let i = 1; i < blob.length; i++) {
    const point = blob[i]
    const prevPoint = blob[i - 1]
    
    bezierVertex(
      prevPoint.controlPoints[1].x, 
      prevPoint.controlPoints[1].y,
      point.controlPoints[0].x,
      point.controlPoints[0].y,
      point.x,
      point.y
    )
  }
  
  const lastPoint = blob[blob.length-1];
  
  bezierVertex(
    lastPoint.controlPoints[1].x,
    lastPoint.controlPoints[1].y,
    blob[0].controlPoints[0].x,
    blob[0].controlPoints[0].y,
    blob[0].x,
    blob[0].y
  );
  
  endShape()
}

function generateBlob(pos, pointsCount, radius, distance, angleRange) {
  const points = []
  
  for (let i = 0; i < pointsCount; i++) {
    const a = i * TWO_PI / pointsCount
    const r = radius + random(-0.2*radius, 0.2*radius)
    
    const point = { 
      x:cos(a)*r+pos.x, 
      y:sin(a)*r+pos.y, 
      angle: a,
      controlPoints: []
    }
    
    points.push(point)
  }
  
  points.forEach( item => {
    const angle = random(-angleRange,angleRange);
    
    const firstControlPointAngle = item.angle - (HALF_PI + angle)
    const scdControlPointAngle = item.angle - (HALF_PI - angle)
    
    const firstControlPoint = { 
      x: item.x + ( cos(firstControlPointAngle) * distance ), 
      y: item.y + ( sin(firstControlPointAngle) * distance )
    }
    
    const scdControlPoint = { 
      x: item.x + ( cos(scdControlPointAngle) * distance ), 
      y: item.y + ( sin(scdControlPointAngle) * distance )
    }
    
    item.controlPoints = [ firstControlPoint, scdControlPoint ]
  })
  
  return points
}