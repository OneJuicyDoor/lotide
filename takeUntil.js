const takeUntil = function(array, callback) {
  const results = [];

  for (let item of array) {
    // Check if the callback function returns true for the current item
    if (callback(item)) {
      // If true, return the results array
      return results;
    }

    // If false, push it  to the results array
    results.push(item);
  }

  return results;
};

module.exports = takeUntil;
