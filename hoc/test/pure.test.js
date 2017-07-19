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
function addValidator(isValid, operation) {
  return function (...args) {
    if (args.every(isValid)) {
      return operation.apply(this, args);
    } else {
      throw new Error("Передан некорректный параметр");
    }
  }
}
describe('Pure functions', function() {
  describe('type checking', function() {
    it('should return 3', function() {
      const numberAdd = addValidator(isNumber, add);
      assert.equal(numberAdd(1, 2), 3);
    });
    it('should return 40', function() {
      const numberMul = addValidator(isNumber, mul);
      assert.equal(numberMul(10, 4), 40);
    });
    it('should return 2', function() {
      const numberDiv = addValidator(isNumber, div);
      assert.equal(numberDiv(10, 5), 2);
    });
    it('should return 3', function() {
      const numberAdd = addValidator(isNumber, add);
      assert.equal(numberAdd("1", 2), 3);
    });
  });
});
