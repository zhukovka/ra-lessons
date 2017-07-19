var assert = require('assert');
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
