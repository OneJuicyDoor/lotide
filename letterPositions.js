function letterPositions(sentence) {
  var result = {};

  // look through each character in the sentence
  for (var i = 0; i < sentence.length; i++) {
    var currentLetter = sentence[i];

    // Check if the current letter already exists
    if (result[currentLetter]) {
      // If it exists push it to the array of positions
      result[currentLetter].push(i);
    } else {
      // If it doesn't exist create it
      result[currentLetter] = [i];
    }
  }

  return result;
}

module.exports = letterPositions;
