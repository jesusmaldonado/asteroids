(function () {
  if (Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (params) {
    params.vel = Asteroids.Util.randomVec(1.1);
    params.radius = Asteroid.RADIUS;
    params.color = Asteroid.COLOR;
    Asteroids.MovingObject.call(this, params);
  };

  Asteroid.COLOR = "#000";
  Asteroid.RADIUS = 10;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };


})();
