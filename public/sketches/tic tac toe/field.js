class Field {
    constructor(size, position) {
      this.height = size - 5;
      this.width = size - 5;
      this.position = {
        x: position.x,
        y: position.y
      }
      this.checked = false;
      this.owner = ''
    }
    
    isInsideBoundaries( x, y ) {
      if ( x >= this.position.x && x <= (this.position.x + this.width) && 
          y >= this.position.y && y <= (this.position.y + this.height)) {
        return true
      } else {
        return false
      }
    }
    
    drawInside( drawFunction ) {
      drawFunction(
        this.position.x + this.width / 2,
        this.position.y + this.height / 2
      )
    }
    
    draw() {
      fill(0, 0, 0, 0.1)
      rect(this.position.x, this.position.y, this.width, this.height)
    }
  }