
function countLetters(sentence) {
    var result = {};
    for (var i = 0; i < sentence.length; i++) {
      var currentLetter = sentence[i];
      if (result[currentLetter]) {
        result[currentLetter] += 1;
      } else {
        result[currentLetter] = 1;
      }
    }
    console.log(result);
  }
  
  countLetters("beilzabib");
  countLetters("mewhe")  





const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`assertion Passed💚💚💚:  ${actual}  ===  ${expected}`);
    }
    if (actual !== expected) {
      console.log(`assertion Failed🚩🚩🚩:  ${actual}  !==  ${expected}`);
    }
  
  };