
const eqArrays = function(arr1, arr2) { 
      for (let i = 0; i < arr1.length; i++) {
   if (arr1[i] !== arr2[i]) {
        console.log(`assertion Failed🚩🚩🚩:  ${arr1}  !==  ${arr2}`);
        return(`assertion Failed🚩🚩🚩:  ${arr1}  !==  ${arr2}`);
    }
  } 
if(arr1.length != arr2.length) {
    console.log(`assertion Failed🚩🚩🚩:  ${arr1}  !==  ${arr2}`);
    return(`assertion Failed🚩🚩🚩:  ${arr1}  !==  ${arr2}`);
  }
  else {
    console.log(`assertion Passed💚💚💚:  ${arr1}  ===  ${arr2}`);
    return(`assertion Passed💚💚💚:  ${arr1}  ===  ${arr2}`);
  }
}

  //test

eqArrays([1, 2, 3], [1, 2, 3, 6])
eqArrays([1, 2, 3], [1, 2, 5,])
eqArrays([1, 2, 3], [1, 2, 3,])