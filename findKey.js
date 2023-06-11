function findKey(myObj, callback) {
  const keys = Object.keys(myObj);

  // loop through each keyin the object
  for (const key of keys) {
    // If the callback function returns true then return the key
    if (callback(myObj[key])) {
      return key;
    }
  }
}

module.exports = findKey;
