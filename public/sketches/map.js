const CANVAS_SIZE = {
    width: 1200,
    height: 700
  }
  
  const GRID_SIZE = {
    x: CANVAS_SIZE.width * 1.125,
    y: CANVAS_SIZE.height * 1.125
  }
  
  const WATER_LEVEL = 0.35
  const COAST_LEVEL = WATER_LEVEL + 0.058
  const PLAIN_LEVEL = COAST_LEVEL + 0.2
  const MOUNTAIN_LEVEL = 0.88
  
  const DRYNESS_LEVEL = 0.6
  
  
  function setup() {
    createCanvas(CANVAS_SIZE.width, CANVAS_SIZE.height);
    background('#ccc')
  
    const heightmap = generateGrid(0.025, 4)
  
    const desert = generateGrid(0.012, 4)
  
    const forest = generateGrid(0.025, 1)
  
    drawGrid(heightmap, desert, forest)
  
    // drawHeight(desert)
  }
  
  function generateGrid(scale, factor) {
    const grid = []
    const { x, y } = GRID_SIZE
  
    // noiseSeed(2.8)
    const noiseScale = scale / factor
  
    for (let i = 0; i < x; i++) {
      const row = []
      for (let j = 0; j < y; j++) {
        row.push(noise(i * noiseScale, j * noiseScale))
      }
      grid.push(row)
    }
  
    return grid
  }
  
  function drawHeight(map) {
    push()
    noStroke()
    colorMode(HSB, 365, 1, 1, 1)
  
    const { x, y } = GRID_SIZE
    const { height, width } = CANVAS_SIZE
  
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        let value = map[i][j]
  
        fill(0, 0, value, 1)
  
        rect(i * (width / x), j * (height / y), width / x, height / y)
      }
    }
  
    pop()
  }
  
  function drawGrid(heightmap, desertmap) {
    push()
    noStroke()
    // blendMode(MULTIPLY)
    colorMode(HSB, 365, 1, 1, 1)
  
    const { x, y } = GRID_SIZE
    const { height, width } = CANVAS_SIZE
  
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        let value = heightmap[i][j]
  
        if (value <= WATER_LEVEL) { fill(227, 0.37, 0.88 - 0.88 * value, 1) } else
          if (value <= COAST_LEVEL) { fill(227, 0.34, 0.98 - 0.98 * value, 1) } else
            if (value <= PLAIN_LEVEL) {
              let dryness = desertmap[i][j]
              let temperateZone = 0.15
              if (dryness >= DRYNESS_LEVEL + temperateZone) {
                //Wüste
                fill(61, 0.26, 0.96 * value, 1)
              } else if (dryness <= DRYNESS_LEVEL - temperateZone) {
                //Wald
                fill(137, 0.25, 0.6 * value, 1)
  
              } else {
                // Normale Wiesen
                fill(137, 0.27, 0.9 * value, 1)
              }
            } else if (value <= MOUNTAIN_LEVEL) {
              fill(137, 0.1, 0.65 * (1.25 - value), 1)
            }
  
        rect(i * (width / x), j * (height / y), width / x, height / y)
      }
    }
  
    pop()
  }
  
  function calcWaterLine(grid) {
    const { x, y } = GRID_SIZE
  
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
  
      }
    }
  }
  
  function draw() {
  
  }
  