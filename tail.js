const assertArraysEqual = require('./assertArraysEqual');

  const tail = function(array) {
    return array.slice(1);
  
    }
assertArraysEqual(tail([5,6,7]), [6,7]);

    module.exports = tail;