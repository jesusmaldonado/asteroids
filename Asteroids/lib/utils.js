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

  Asteroids.Util.randomVec = function(length) {
    var vec = [];
    vec[0] = (2 * length * Math.random()) - 1;
    vec[1] = (2 * length * Math.random()) - 1;
    return vec;
  };

})();
