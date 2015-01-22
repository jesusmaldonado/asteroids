(function () {

  if (Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function () {
    this.numAsteroids = Game.NUM_ASTEROIDS;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship({pos: this.randomPosition(), game: this});
    this.bullets = []
    this.dimX = Game.DIM_X
    this.dimY = Game.DIM_Y
  };

  Game.DIM_X = 768;
  Game.DIM_Y = 768;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.randomPosition =function() {
    var vec = [];
    vec[0] = Math.random() * Game.DIM_X;
    vec[1] = Math.random() * Game.DIM_Y;
    return vec;
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
    var objects = this.allObjects();
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


  Game.prototype.allObjects = function () {
    return this.asteroids.concat(this.ship).concat(this.bullets);
  }

  Game.prototype.add = function (obj) {
    if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.push(obj);
    } else if (obj instanceof Asteroids.Bullet) {
      this.bullets.push(obj);
    }
  }

  Game.prototype.remove = function (obj) {
    if (obj instanceof Asteroids.Asteroid) {
      var idx = this.asteroids.indexOf(obj);
      this.asteroids.splice(idx, 1);
    } else if (obj instanceof Asteroids.Bullet) {
      var idx = this.bullets.indexOf(obj);
      this.bullets.splice(idx, 1);
    }
  }

  Game.prototype.isOutOfBounds = function (pos) {
    return pos[0] < 0 || pos[0] > this.dimX || pos[1] < 0 || pos[1] > this.dimY;
  };

  Game.prototype.isWon = function () {
    return this.asteroids.length === 0;
  };


})();
