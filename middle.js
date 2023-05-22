function middle(array) {
    if (array.length <= 2) {
      return ([])
    }
    var theMiddle = []
    if (array.length % 2 === 0) {
    secondMid = (array.length / 2)
    firstMid = secondMid - 1
    theMiddle.push(array[firstMid],array[secondMid])
}
    if (array.length % 2 !== 0) {
        firstMid = (array.length / 2) + 0.5
        theMiddle.push(firstMid)
    }
  console.log(theMiddle)
}
middle([1,2,3,4,5,6])
middle([1,2,3,4,5,6,7])
middle([1])