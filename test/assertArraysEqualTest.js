
const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual([1, 2, 3], [1, 2, 3, 6])
assertArraysEqual([1, 2, 3], [1, 2, 5,])
assertArraysEqual([1, 2, 3], [1, 2, 3,])