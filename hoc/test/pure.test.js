var assert = require('assert');
function printToLog(operation, firstValue, secondValue) {
  console.log(operation, firstValue, secondValue);
}
function isNumber(value) {
  return typeof value === "number";
}
function mul(a, b) {
  printToLog('умножение', a, b);
  if (isNumber(a) && isNumber(b)) {
    return a * b;
  } else {
    throw new Error("Оба значения должны быть числами.");
  }
}
function add(a, b) {
  printToLog('сложение', a, b);
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error("Оба значения должны быть числами.");
  }
}
function div(a, b) {
  printToLog('деление', a, b);
  if (isNumber(a) && isNumber(b)) {
    return a / b;
  } else {
    throw new Error("Оба значения должны быть числами.");
  }
}
function sub(a, b) {
  printToLog('вычетание', a, b);
  if (isNumber(a) && isNumber(b)) {
    return a - b;
  } else {
    throw new Error("Оба значения должны быть числами.");
  }
}
describe('Pure functions', function() {
  describe('type checking', function() {
    it('should return 3', function() {
      assert.equal(add(1, 2), 3);
    });
    it('should return 40', function() {
      assert.equal(mul(10, 4), 40);
    });
    it('should return 2', function() {
      assert.equal(div(10, 5), 2);
    });
    it('should return 3', function() {
      assert.equal(add("1", 2), 3);
    });
  });
});
