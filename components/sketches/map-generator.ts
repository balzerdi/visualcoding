import p5, { Sketch } from "p5";

const sketch: Sketch = (p: p5) => {
  let x = 0;
  let y = 0;

  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
    x += 1;
    y += 1;
  };
};

export default sketch;