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
var sum = curriedSum(4);
 // => 56
