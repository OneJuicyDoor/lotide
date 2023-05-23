

  function letterpositions(sentence) {
    var result = {};
    for (var i = 0; i < sentence.length; i++) {
      var currentLetter = sentence[i];
      if (result[currentLetter]) {
        result[currentLetter].push(i);
      } else {
        result[currentLetter] = [i];
      }
    }
    console.log(result);
  }
  
  letterpositions("beilzabib");
  letterpositions("mewhe");
  letterpositions("abcdefg");
  