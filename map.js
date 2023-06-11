const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    // use the callback function ont item and then push it to the array
    results.push(callback(item));
  }

  return results;
}

module.exports = map;
