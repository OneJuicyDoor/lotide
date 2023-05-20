
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`assertion Passed💚💚💚:  ${actual}  ===  ${expected}`);
    }
    if (actual !== expected) {
      console.log(`assertion Failed🚩🚩🚩:  ${actual}  !==  ${expected}`);
    }
  
  };
  function eqArrays(arr1, arr2) {
   if(arr1.length != arr2.length) {
    return false
   }
    for (let i = 0; i < arr1.length; i++) {
   if (arr1[i] !== arr2[i]) {
        return false;
    }
 }
  
    return true;
  }
  
  //test
  assertEqual("lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  assertEqual("one", 1);
  assertEqual("beebs", "beebs");
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  assertEqual(eqArrays([5, 2, 3], [1, 2, 5]), true);
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 6]), true);