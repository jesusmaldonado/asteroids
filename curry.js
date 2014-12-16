var curriedSum = function (numArgs) {
  var numbers = [];

  var _curriedSum = function (num) {
    var sum = 0;
    numbers.push(num);
    if (numbers.length === numArgs) {
      numbers.forEach(function (el) {
        sum += el;
      });
      return sum;
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
};

Function.prototype.curry = function(numArgs) {
  var args = [];
  var fn = this;
  var _curry = function (arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(undefined, args);
    } else {
      return _curry;
    }
  }
  return _curry;
}
