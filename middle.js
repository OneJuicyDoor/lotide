const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }

  var theMiddle = [];

  if (array.length % 2 === 0) {
    // If the array length is even then push both middle parts of the array
    const secondMid = array.length / 2;
    const firstMid = secondMid - 1;
    theMiddle.push(array[firstMid], array[secondMid]);
  } else {
    // If the array length is odd then just push the one in the middle
    const firstMid = (array.length / 2) + 0.5;
    theMiddle.push(array[firstMid]);
  }

  return theMiddle;
}

module.exports = middle;
