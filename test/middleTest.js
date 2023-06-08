//const middle = require('../middle')

//middle([1,2,3,4,5,6])
//middle([1,2,3,4,5,6,7])


const assert = require('chai').assert;
const theMiddle   = require('../middle');

describe("#theMiddle", () => {
  it("returns [3, 4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(theMiddle([1,2,3,4,5,6]), [3, 4]);
  });
  it("returns 4 for [1,2,3,4,5,6,7]", () => {
    assert.deepEqual(theMiddle([1,2,3,4,5,6,7]), [4]); 
  });
}); 