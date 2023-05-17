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

  const head = function(array) {
  return array[0];

  }
  assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


