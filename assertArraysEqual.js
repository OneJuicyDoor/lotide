const assert = require('chai').assert;
const eqArrays = require('./eqArrays');

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns true for ['5'], ['5']", () => {
    assert.strictEqual(eqArrays(['5'], ['5']), true);
  });
  it("returns false for [5, 6, 7], [5, 6, 8]", () => {
    assert.strictEqual(eqArrays([5, 6, 7], [5, 6, 8]), false);
  });
  it("returns true for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(eqArrays(['Hello', 'Lighthouse', 'Labs'], ['Hello', 'Lighthouse', 'Labs']), true);
  });
});
