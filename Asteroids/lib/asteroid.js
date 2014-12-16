(function () {
  if (Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (params) {
    params.vel = Asteroids.Util.randomVel();
    params.radius = Asteroid.RADIUS;
    params.color = Asteroid.COLOR;
    params.dir = Asteroids.Util.randomDir();
    Asteroids.MovingObject.call(this, params);
  };
  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = "#000";
  Asteroid.RADIUS = 10;

  Asteroid.prototype.getImages = function () {
    var images = [];
    var img1, img2;
    img1 = new Image();
    img1.src = "./lib/asteroid1.jpg";
    img2 = new Image();
    img2.src = "./lib/asteroid2.jpg";
    return images;
  };
  //
  // Asteroid.prototype.draw = function (ctx) {
  //   var images = this.getImages();
  //   var image = images[Math.floor(Math.random()*2)];
  //   ctx.drawImage(image, this.pos[0], this.pos[1]);
  // };

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };


})();
