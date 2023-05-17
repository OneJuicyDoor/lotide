const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`assertion Passed💚💚💚:  ${actual}  ===  ${expected}`);
  }
  if (actual !== expected) {
    console.log(`assertion Failed🚩🚩🚩:  ${actual}  !==  ${expected}`);
  }

};

//test
assertEqual("lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("one", 1);
assertEqual("beebs", "beebs");