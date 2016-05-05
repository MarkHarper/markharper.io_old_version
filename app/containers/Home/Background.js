import p5 from 'p5';

function background (p) {
  p.setup = function () {
    p.createCanvas(640, 480);
  }

  p.draw = function () {
    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  }
}

const Background = new p5(background, 'home')

export default Background
