const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // Check if the objects have different number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // loop through each key
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];

    // Check if the current key's value is an array in both objects
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If the arrays are not equal return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      // If the values are not equal return false
      return false;
    }
  }

  // if everything is equal return true
  return true;
}

module.exports = eqObjects;

  
 /* const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  eqObjects(shirtObject, anotherShirtObject);
  
  const carObject = { color: "red", size: "large" };
  const carShirtObject = { size: "medium", color: "red" };
  eqObjects(carObject, carShirtObject);
  
  eqObjects("hurble", "hurble");
  
  const houseObject = { color: "red", size: "medium", bedsBaths: [1, 2] };
  const anotherHouseObject = { size: "medium", color: "red", bedsBaths: [1, 2] };
  eqObjects(houseObject, anotherHouseObject);
  */