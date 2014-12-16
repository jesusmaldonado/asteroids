(function () {

  if (Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function () {
    this.dimX = Game.DIM_X;
    this.dimY = Game.DIM_Y;
    this.numAsteroids = Game.NUM_ASTEROIDS;
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.randomPosition = function () {
    return Asteroids.Util.randomVec(this.dimY);
  };

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < this.numAsteroids; i++) {
      var position = this.randomPosition();
      var x = {pos: [position[0], position[1]], game: this};
      var asteroid = new Asteroids.Asteroid(x);
      this.asteroids.push(asteroid);
    }
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0,0, this.dimX, this.dimY);

    for (var i = 0; i < this.numAsteroids; i++) {
      this.asteroids[i].draw(ctx);
    }
  }

  Game.prototype.moveObjects = function (){
    for (var i = 0; i < this.numAsteroids; i++) {
      this.asteroids[i].move();
    }
  };

  Game.prototype.wrap = function (pos) {
    var wrapped = [];
    var dims = [this.dimX, this.dimY]
    for (var i = 0; i < pos.length; i++) {
      if (pos[i] + Asteroids.Asteroid.RADIUS > dims[i]) {
        wrapped[i] = pos[i] - dims[i];
      } else if (pos[i] + Asteroids.Asteroid.RADIUS < 0) {
        wrapped[i] = pos[i] + dims[i];
      } else {
        wrapped[i] = pos[i];
      }
    }
    return wrapped;
  };

})();
