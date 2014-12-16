(function() {
  if (Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (params) {
    params.vel = [0, 0];
    params.radius = Ship.RADIUS;
    params.color = Ship.COLOR;
    Asteroids.MovingObject.call(this, params);
  }

  Ship.RADIUS = 10;
  Ship.COLOR = "blue";

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function () {
    var bPos = [];
    bPos[0] = this.pos[0];
    bPos[1] = this.pos[1];
    var bVel = [];
    bVel[0] = this.vel[0];
    bVel[1] = this.vel[1];
    var bullet = new Asteroids.Bullet({pos: bPos, vel: bVel, game: this.game});
    this.game.add(bullet);
  }

})();
