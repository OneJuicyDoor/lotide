function without(arr1, arr2) {
  let result = [];
    //Look through each item in the array, if it appears in the other array dont push it to result
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
    
  return (result);
}
  
module.exports = without;