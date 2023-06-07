
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`assertion Passed💚💚💚:  ${actual}  ===  ${expected}`);
  }
  if (actual !== expected) {
    console.log(`assertion Failed🚩🚩🚩:  ${actual}  !==  ${expected}`);
  }

};


module.exports = assertEqual;