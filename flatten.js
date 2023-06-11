function findKeyByValue(myObj, value) {
  const keys = Object.keys(myObj);

  // go through the keys in the object
  for (const key of keys) {
    // Check if the current value matches the correct one
    if (myObj[key] === value) {
      return key;
    }
  }
}

module.exports = findKeyByValue;
