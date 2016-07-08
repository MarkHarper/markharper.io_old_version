// Tools
// Canvas, JS
// Specs
// Maintain current functionality of the visualization
// Resizable
// 60fps frame rate

// Sine/cos/tan
// a matrix push/pop
// framerate/redraw setimeout function
// random number generator
// sqrt
// color generator
// basic canvas functions (drawline, stroke, etc.)

import { interval } from '../../helpers/Helpers.js'

let particles = [];
let numParticles = 45;
let minDist = 80;
let springAmount = 0.0015;

export function setup (width, height) {  
  // set the frame rate
  let arg = {
    width,
    height
  }

  interval(draw, arg, 16.67)

  // run the visualization
  initialize(width, height)
}

var draw = function (arg) {
  for(var i=0; i<numParticles; i++){
    var particle = particles[i];      
    particle.x += particle.vx;
    particle.y += particle.vy;
    if(particle.x > arg.width){
      particle.x = 0;
    } else if(particle.x < 0){
      particle.x = arg.width;
    }
    if(particle.y > arg.height){
      particle.y = 0;
    } else if(particle.y < 0){
      particle.y = arg.height;
    }
    particle.update();
  }
       
  for(var i=0; i<numParticles; i++){
    var partA = particles[i];
    for(var j=i+1; j<numParticles; j++){
      var partB = particles[j];
      var dx = partB.x - partA.x;
      var dy = partB.y - partA.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= partB.radius + partA.radius) {
        checkCollision(partA, partB, dx, dy, dist);
      } else if (dist < minDist) {
        spring(partA, partB, dx, dy, dist);
      }
    }
  }
}

function initialize(width, height) {
  for(var i=0; i<numParticles; i++) {
    if (Math.random() > 0.66) {
      var ball = new Ball(5);
      ball.mass = 3;
      ball.setFillColor('#26A69A');
      ball.vx = Math.random(2) - 1;
      ball.vy = Math.random(2) - 1;
    } else {
      var ball = new Ball(3);
      ball.mass = 2;
      ball.setFillColor('#8BE5DC');
      ball.vx = Math.random(4) - 2;
      ball.vy = Math.random(4) - 2;
    }
    ball.x = Math.random(width);
    ball.y = Math.random(height);
    particles[i] = ball;
  }
}
 
function spring(partA, partB, dx, dy, dist) {
  var alpha = 255 - (255 * (dist / minDist));
  ctx.stroke(38, 166, 154, alpha);
  ctx.drawline(partA.x, partA.y, partB.x, partB.y);
  var ax = dx * springAmount;
  var ay = dy * springAmount;
  partA.vx += ax;
  partA.vy += ay;
  partB.vx -= ax;
  partB.vy -= ay;
}
 
function checkCollision(ball0, ball1, dx, dy, dist) {
  var angle = Math.atan2(dy, dx);
  var sine = Math.sin(angle);
  var cosine = Math.cos(angle);
  var pos0 = new Point(0, 0);
  var pos1 = rotate(dx, dy, sine, cosine, true);
  var vel0 = rotate(ball0.vx, ball0.vy, sine, cosine, true);
  var vel1 = rotate(ball1.vx, ball1.vy, sine, cosine, true);
  var vxTotal = vel0.x - vel1.x;
  vel0.x = ((ball0.mass - ball1.mass) * vel0.x + 2 * ball1.mass * vel1.x) / (ball0.mass + ball1.mass);
  vel1.x = vxTotal + vel0.x;

  var absV = Math.abs(vel0.x) + Math.abs(vel1.x);
  var overlap = (ball0.radius + ball1.radius)  - Math.abs(pos0.x - pos1.x);

  pos0.x += vel0.x / absV * overlap;
  pos1.x += vel1.x / absV * overlap;

  var pos0F = rotate(pos0.x, pos0.y, sine, cosine, false);
  var pos1F = rotate(pos1.x, pos1.y, sine, cosine, false);

  ball1.x = ball0.x + pos1F.x;
  ball1.y = ball0.y + pos1F.y;
  ball0.x = ball0.x + pos0F.x;
  ball0.y = ball0.y + pos0F.y;

  var vel0F = rotate(vel0.x, vel0.y, sine, cosine, false);
  var vel1F = rotate(vel1.x, vel1.y, sine, cosine,false);
  ball0.vx = vel0F.x;
  ball0.vy = vel0F.y;
  ball1.vx = vel1F.x;
  ball1.vy = vel1F.y;
}
 
function rotate(x, y, sine, cosine, reverse) {
  var point = new Point(0, 0);
  if(reverse){
    point.x = (x * cosine) + (y * sine);
    point.y = (y * cosine) - (x * sine);
  }else{
    point.x = (x * cosine) - (y * sine);
    point.y = (y * cosine) + (x * sine);
  }
  return point; 
}
 
////////////////////////////////
var Ball = function (radius) {
  this.radius = radius;
  this.scaleX = 1.0;
  this.scaleY = 1.0;
  this.strokeColor = '#FFFFFF';
  this.fillColor = '#FFFFFF';
  this.isStroke = false;
  this.isFill = false;
  this.isRollOver = false;
  this.locked = false;
  this.visible = true;
}

Ball.prototype.draw = function () {
  ctx.ellipse(0, 0, this.radius*2, this.radius*2);
}

Ball.prototype.update = function () {
  //check p5 docs
  if (!this.visible) {
    return;
  } else {
    ctx.translate(this.x, this.y);
    ctx.scale(this.scaleX, this.scaleY);
    rotate(Math.PI / 180);
    if (this.isStroke) {
      ctx.stroke(this.strokeColor);
    }
    if (this.isFill) {
      ctx.fill(this.fillColor);
    }
    this.draw();
  }
}

Ball.prototype.setStrokeColor = function (strokeColor) {
  this.strokeColor = strokeColor;
  this.isStroke = true;
}

Ball.prototype.setFillColor = function (fillColor) {
  this.fillColor = fillColor;
  this.isFill = true;
}

Ball.prototype.stopDrag = function () {
  this.locked = false;
}

var Point = function (x, y) {
  this.x = x;
  this.y = y;
}
