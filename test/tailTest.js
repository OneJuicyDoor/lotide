  const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [6, 5] for [7, 6, 5]", () => {
    assert.deepEqual(tail([7, 6, 5]), [6, 5]);
  });
  it("returns ['lighthouse, labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['hello', 'lighthouse', 'labs']), ['lighthouse', 'labs']); 
  });
});