var sum = function() {
  var sum = 0;
  for (var i=0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

Object.prototype.myBind = function(context) {
  var fn = this;
  var boundArgs = Array.prototype.slice.call(arguments, 1);
  console.log(boundArgs);

  return function() {
    var callArgs = Array.prototype.slice.call(arguments);
    console.log(callArgs);
    return fn.apply(context, boundArgs.concat(callArgs));
  }
}

var Cat = function (name) {
  this.name = name;
}

Cat.prototype.meow = function (name) {
  console.log(name + " says meow!");
};

var curie = new Cat("Curie")
var curieMeows = curie.meow.myBind(curie, "Bob");

setTimeout(curieMeows("mary"), 1000);
