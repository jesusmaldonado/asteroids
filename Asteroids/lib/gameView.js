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
    img.onload = function () {
      that.ctx.drawImage(img, 0, 0);
    };

    var run = function() {
      this.game.step();
      img.onload();
      this.game.draw(this.ctx);
      if (this.game.isWon()) {
        console.log("You win!");
        clearInterval(gameRefresh);
      }
    }
    this.bindKeyHandlers();
    var gameRefresh = setInterval(run.bind(this), 2);
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
  
  // GameView.prototype.win = function () {
  //
  // };

})();
