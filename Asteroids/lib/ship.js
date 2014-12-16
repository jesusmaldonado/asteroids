(function() {
  if (Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (params) {
    params.vel = 0;
    params.dir = Math.PI/2;
    params.radius = Ship.RADIUS;
    params.color = Ship.COLOR;
    Asteroids.MovingObject.call(this, params);
  }

  Ship.RADIUS = 10;
  Ship.COLOR = "blue";
  Ship.INCR = Math.PI/15;

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = 0;
  };

  Ship.prototype.power = function (impulse) {
    this.vel += impulse;
  };

  Ship.prototype.steer = function (dir) {
    this.dir += dir * Ship.INCR;
  };

  Ship.prototype.fireBullet = function () {
    var bPos = [];
    bPos[0] = this.pos[0];
    bPos[1] = this.pos[1];
    var bDir = this.dir;

    var bullet = new Asteroids.Bullet({pos: bPos, dir: bDir, game: this.game});
    this.game.add(bullet);
  };


})();
