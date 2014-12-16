(function () {
  if (Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (params) {
    params.vel = Asteroids.Util.randomVec(5);
    params.radius = Asteroid.RADIUS;
    params.color = Asteroid.COLOR;
    Asteroids.MovingObject.call(this, params);
  };

  Asteroid.COLOR = "#000";
  Asteroid.RADIUS = 100;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);


})();
