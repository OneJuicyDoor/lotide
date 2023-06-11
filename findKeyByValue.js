function findKeyByValue(myObj, value) {
  const keys = Object.keys(myObj);

  // Iterate through the keys
  for (const key of keys) {
    // Check if the current value matches the right value
    if (myObj[key] === value) {
      // Return if a match is found
      return key;
    }
  }
}

module.exports = findKeyByValue;
