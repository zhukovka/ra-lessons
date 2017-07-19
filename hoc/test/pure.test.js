var assert = require('assert');
function printToLog(operation, firstValue, secondValue) {
  console.log(operation, firstValue, secondValue);
}
function isNumber(value) {
  return typeof value === "number";
}
function mul(a, b) {
  return a * b;
}
function add(a, b) {
  return a + b;
}
function div(a, b) {
  return a / b;
}
function sub(a, b) {
  return a - b;
}
function operationExecutor(a, b, operation) {
  if (isNumber(a) && isNumber(b)) {
    return operation(a, b);
  } else {
    throw new Error("Оба значения должны быть числами.");
  }
}
describe('Pure functions', function() {
  describe('type checking', function() {
    it('should return 3', function() {
      assert.equal(operationExecutor(1, 2, add), 3);
    });
    it('should return 40', function() {
      assert.equal(operationExecutor(10, 4, mul), 40);
    });
    it('should return 2', function() {
      assert.equal(operationExecutor(10, 5, div), 2);
    });
    it('should return 3', function() {
      assert.equal(operationExecutor("1", 2, add), 3);
    });
  });
});
