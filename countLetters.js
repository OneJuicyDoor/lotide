function countLetters(sentence) {
  var result = {};


  for (var i = 0; i < sentence.length; i++) {
    var currentLetter = sentence[i];

    // If the current letter already exists in the result object, increase its number
    if (result[currentLetter]) {
      result[currentLetter] += 1;
    } else {
      // set the count for the current letter to 1
      result[currentLetter] = 1;
    }
  }

  return result;
}

// console.log(countLetters("astring")); // { a: 1, s: 1, t: 1, r: 1, i: 1, n: 1, g: 1 }
// console.log(countLetters("mewhe")); // { m: 1, e: 2, w: 1, h: 1, e: 1 }

module.exports = countLetters;