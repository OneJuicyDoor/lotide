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
  return(theMiddle)
}

module.exports = middle;