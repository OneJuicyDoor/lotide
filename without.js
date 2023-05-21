function without(arr1, arr2) {
    var result = [];
    
    for (var i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
    
    console.log (result)
  }
  
  without([1,2,3,4,5], [1,3,5,6]);