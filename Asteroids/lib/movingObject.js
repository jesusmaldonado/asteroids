(function () {

  if (Asteroids === undefined) {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (params) {
    this.pos = params.pos;
    this.vel = params.vel;
    this.radius = params.radius;
    this.color = params.color;
    this.game = params.game;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var xSquared = Math.pow(this.pos[0] - otherObject.pos[0], 2);
    var ySquared = Math.pow(this.pos[1] - otherObject.pos[1], 2);
    var dist = Math.sqrt(xSquared + ySquared);
    var radiiSum = this.radius + otherObject.radius
    return dist < radiiSum;
  };

  MovingObject.prototype.collideWith = function (otherObject) {
  }

})();
