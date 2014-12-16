(function() {
  if (Asteroids === undefined) {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (Game, ctx) {
    this.game = Game;
    this.ctx = ctx;
  }

  GameView.prototype.start = function() {
    var run = function() {
      this.game.step();
      this.game.draw(this.ctx);
    }
    this.bindKeyHandlers();
    setInterval(run.bind(this), 2);
  };

  GameView.prototype.bindKeyHandlers = function () {
    key('up', function () {
      this.game.ship.power([0, -0.5]);
    }.bind(this));

    key('down', function () {
      this.game.ship.power([0, 0.5]);
    }.bind(this));

    key('right', function () {
      this.game.ship.power([0.5, 0]);
    }.bind(this));

    key('left', function () {
      this.game.ship.power([-0.5, 0]);
    }.bind(this));

    key('space', function() {
      this.game.ship.fireBullet();
    }.bind(this));
  }


})();
