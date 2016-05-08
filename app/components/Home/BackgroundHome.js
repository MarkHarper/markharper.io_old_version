import p5 from 'p5';

function BackgroundHome (width, height) {
  var width = Number(width);
  var height = Number(height);
  var me = function (p) {
    var particles = [];
    var numParticles = 25;
    var minDist = 100;
    var springAmount = 0.001;

    p.setup = function () {
      p.createCanvas(width, height);
      p.frameRate(60);
      initialize();
    }

    p.draw = function () {
      p.background(255);
      for(var i=0; i<numParticles; i++){
        var particle = particles[i];      
        particle.x += particle.vx;
        particle.y += particle.vy;
        if(particle.x > width){
          particle.x = 0;
        } else if(particle.x < 0){
          particle.x = width;
        }
        if(particle.y > height){
          particle.y = 0;
        } else if(particle.y < 0){
          particle.y = height;
        }
        particle.update();
      }
           
      for(var i=0; i<numParticles; i++){
        var partA = particles[i];
        for(var j=i+1; j<numParticles; j++){
          var partB = particles[j];
          spring(partA, partB);
        }
      }
    }

    function initialize() {
      p.smooth();
      p.noStroke();
       
      for(var i=0; i<numParticles; i++) {
        var ball = new Ball(5);
        ball.x = p.random(width);
        ball.y = p.random(height);
        ball.vx = p.random(6) - 3;
        ball.vy = p.random(6) - 3;
        ball.setFillColor(p.color(parseInt(p.random(100, 200)), parseInt(p.random(100, 200)), parseInt(p.random(100, 200))));
        particles[i] = ball;
      }
    }
     
    function spring(partA, partB) {
      var dx = partB.x - partA.x;
      var dy = partB.y - partA.y;
      var dist = p.sqrt(dx * dx + dy * dy);
      if(dist < minDist){
        var alpha = 255 - (255 * (dist / minDist));
        p.stroke(10, 10, 10, alpha);
        p.line(partA.x, partA.y, partB.x, partB.y);
        var ax = dx * springAmount;
        var ay = dy * springAmount;
        partA.vx += ax;
        partA.vy += ay;
        partB.vx -= ax;
        partB.vy -= ay;
      }
    }
     
    function checkCollision(ball0, ball1) {
      var dx = ball1.x - ball0.x;
      var dy = ball1.y - ball0.y;
      var dist = p.sqrt(dx*dx + dy*dy);
       
      if(dist < ball0.radius + ball1.radius){
        var angle = p.atan2(dy, dx);
        var sine = p.sin(angle);
        var cosine = p.cos(angle);
         
        var pos0 = new Point(0, 0);
        var pos1 = rotate(dx, dy, sine, cosine, true);
        var vel0 = rotate(ball0.vx, ball0.vy, sine, cosine, true);
        var vel1 = rotate(ball1.vx, ball1.vy, sine, cosine, true);

        var vxTotal = vel0.x - vel1.x;
        vel0.x = ((ball0.mass - ball1.mass) * vel0.x + 2 * ball1.mass * vel1.x) / (ball0.mass + ball1.mass);
        vel1.x = vxTotal + vel0.x;

        var absV = p.abs(vel0.x) + p.abs(vel1.x);
        var overlap = (ball0.radius + ball1.radius)  - p.abs(pos0.x - pos1.x);
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
    }
     
    function rotate(x, y, sine, cosine, reverse) {
      var point = new Point(0, 0);
      if(reverse){
        poin.x = x * cosine + y * sine;
        point.y = y * cosine - x * sine;
      }else{
        point.x = x * cosine - y * sine;
        point.y = y * cosine + x * sine;
      }
      return point; 
    }
     
    ////////////////////////////////

    var Ball = function (radius) {
      this.radius = radius;
      this.scaleX = 1.0;
      this.scaleY = 1.0;
      this.strokeColor = p.color(0);
      this.fillColor = p.color(0);
      this.isStroke = false;
      this.isFill = false;
      this.isRollOver = false;
      this.locked = false;
      this.visible = true;
    }

    Ball.prototype.draw = function () {
      if(p.dist(p.mouseX, p.mouseY, this.x, this.y) < this.radius) {
        this.isRollOver = true;
      }else{
        this.isRollOver = false;
      }
      p.ellipse(0, 0, this.radius*2, this.radius*2);
    }

    Ball.prototype.update = function () {
      if (!this.visible) {
        return;
      } else {
        p.push();
        if(this.locked){
          this.x = this.mouseX - this.xoff;
          this.y = this.mouseY - this.yoff;
        } 
        p.translate(this.x, this.y);
        p.scale(this.scaleX, this.scaleY);
        rotate(p.PI / 180);
        if (this.isStroke) {
          p.stroke(this.strokeColor);
        }
        if (this.isFill) {
          p.fill(this.fillColor);
        }
        this.draw();
        p.pop();
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

    Ball.prototype.startDrag = function () {
      if(this.isRollOver){
        this.locked = true;
        this.xoff = p.mouseX - this.x;
        this.yoff = p.mouseY - this.y;
      }
    }

    Ball.prototype.stopDrag = function () {
      this.locked = false;
    }

    var Point = function (x, y) {
      this.x = x;
      this.y = y;
    }
  };
  return me;
}

export default BackgroundHome
