function flattenArray(arr) {
    var flattened = [];
  
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        for(var i2 = 0; i2 < arr[i].length; i2++) {
             flattened.push(arr[i][i2])
        }
        }
      else {
        flattened.push(arr[i]);
      }
    }
  
    console.log(flattened)
  }
  
  flattenArray([1,2,3,[3,5],55,5,[5]])