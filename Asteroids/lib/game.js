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
    this.ship = new Asteroids.Ship({pos: this.randomPosition(), game: this});
  };

  Game.DIM_X = window.innerWidth - 200;
  Game.DIM_Y = window.innerHeight - 200;
  Game.NUM_ASTEROIDS = 20;

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
    var objects = this.allObjects()
    for (var i = 0; i < objects.length; i++) {
      objects[i].draw(ctx);
    }
  }

  Game.prototype.moveObjects = function (){
    var objects = this.allObjects()
    for (var i = 0; i < objects.length; i++) {
      objects[i].move();
    }
  };

  Game.prototype.wrap = function (pos) {
    var wrapped = [];
    var dims = [this.dimX, this.dimY]

    for (var i = 0; i < pos.length; i++) {
      if (pos[i] - Asteroids.Asteroid.RADIUS > dims[i]) {
        wrapped[i] = pos[i] - dims[i] - Asteroids.Asteroid.RADIUS*2;
      } else if (pos[i] + Asteroids.Asteroid.RADIUS < 0) {
        wrapped[i] = pos[i] + dims[i];
      } else {
        wrapped[i] = pos[i];
      }
    }
    return wrapped;
  };

  Game.prototype.checkCollisions = function () {
    var objects = this.allObjects()
    for (var i = 0; i < objects.length; i++) {
      for (var j = 0; j < objects.length; j++) {
        if (i !== j && objects[i].isCollidedWith(objects[j])) {
          objects[i].collideWith(objects[j]);
        }
      }
    }
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (asteroid) {
    var idx = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(idx, 1);
  }

  Game.prototype.allObjects = function () {
    return this.asteroids.concat(this.ship);
  }

})();
