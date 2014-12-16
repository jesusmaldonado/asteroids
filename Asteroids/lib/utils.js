(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Util = {};

  Asteroids.Util.inherits = function(ChildClass, ParentClass) {
    function Surrogate () {};

    Surrogate.prototype = ParentClass.prototype;

    ChildClass.prototype = new Surrogate();
  };

  Asteroids.Util.randomVel = function() {
    var vec = Math.random();
    return vec;
  };
  Asteroids.Util.randomDir = function() {
    var dir = Math.random() * Math.PI*2;
    return dir;
  };

})();
