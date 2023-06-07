const assertEqual = require('../assertEqual');

const eqArrays = require('../eqArrays')

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([5, 2, 3], [1, 2, 5]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 6]), true);