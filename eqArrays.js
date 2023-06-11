function eqArrays(arr1, arr2) {
  // Check if the arrays are different lengths
  if (arr1.length !== arr2.length) {
    return false;
  }

  // loop through each element of the arrays
  for (let i = 0; i < arr1.length; i++) {
    // If the elements arent equal return fales
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // All elements are equal, return true
  return true;
}

module.exports = eqArrays;