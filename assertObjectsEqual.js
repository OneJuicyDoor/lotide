const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
  
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  
  return true;
};
  
function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true;
}
  
  
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectEqual(shirtObject, anotherShirtObject);
  
const carObject = { color: "red", size: "large" };
const carShirtObject = { size: "medium", color: "red" };
assertObjectEqual(carObject, carShirtObject);
  
assertObjectEqual("hurble", "hurble");
  
const houseObject = { color: "red", size: "medium", bedsBaths: [1, 2] };
const anotherHouseObject = { size: "medium", color: "red", bedsBaths: [1, 3] };
assertObjectEqual(houseObject, anotherHouseObject);
  
function assertObjectEqual(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`assertion Passed💚💚💚:  ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`assertion Failed🚩🚩🚩:  ${inspect(actual)} !== ${inspect(expected)}`);
  }
}
  