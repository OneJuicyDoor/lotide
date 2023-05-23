
bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
function findKeyByValue (myObj, value) {
    const keys = Object.keys(myObj);
console.log(keys);
    for (const key of keys) {
        if (myObj[key] === value) {
            return key;
    }
}
}






const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`assertion Passed💚💚💚:  ${actual}  ===  ${expected}`);
    }
    if (actual !== expected) {
      console.log(`assertion Failed🚩🚩🚩:  ${actual}  !==  ${expected}`);
    }
  
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);