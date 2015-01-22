(function() {
  if (Asteroids === undefined) {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (Game, ctx) {
    this.game = Game;
    this.ctx = ctx;
  }

  GameView.prototype.start = function() {
    var img = new Image();
    img.src = './lib/galaxy.jpg';
    var that = this;
    img.height = 768;
    img.width = 768;
    img.onload = function () {
      that.ctx.drawImage(img, 0, 0);
    };

    var run = function() {
      this.game.step();
      img.onload();
      this.game.draw(this.ctx);
      if (this.game.isWon()) {
        clearInterval(gameRefresh);
      }

    if (key.isPressed("up")) {
      // this.game.ship.power(0.1);
      this.game.ship.power(0.005);
    }

      if (key.isPressed("right")) {
        // this.game.ship.power(0.1);
        this.game.ship.steer(+0.1);
      }
      if (key.isPressed("left")) {
        // this.game.ship.power(0.1);
        this.game.ship.steer(-0.1);
      }

      if (key.isPressed("down")) {
        // this.game.ship.power(0.1);
        this.game.ship.power(-0.005);
      }

    }
    this.bindKeyHandlers();
    var gameRefresh = setInterval(run.bind(this), 2);
  };

  GameView.prototype.bindKeyHandlers = function () {
    // key('up', function () {
    //   this.game.ship.power(0.5);
    // }.bind(this));


    // key('down', function () {
    //   this.game.ship.power(-0.5);
    // }.bind(this));

    // key('right', function () {
    //   this.game.ship.steer(-1);
    //
    // }.bind(this));

    // key('left', function () {
    //   this.game.ship.steer(1);
    // }.bind(this));

    key('space', function() {
      this.game.ship.fireBullet();
    }.bind(this));


  }


})();
