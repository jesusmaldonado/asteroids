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
    setInterval(run.bind(this), 2);
  }


})();
