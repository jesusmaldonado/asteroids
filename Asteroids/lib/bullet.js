(function () {

  if (Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function (params) {
    params.color = Bullet.COLOR;
    params.radius = Bullet.RADIUS;
    Asteroids.MovingObject.call(this, params);
  };

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
  Bullet.COLOR = "red";
  Bullet.RADIUS = 5;

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  };

  Bullet.prototype.isWrappable = function () {
    return false;
  }


})();
