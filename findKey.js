function findKey(myObj, callback) {
  const keys = Object.keys(myObj);
  for (const key of keys) {
    if (callback(myObj[key])) {
      return key;
    }
  }
}
  
const result = findKey(
  {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  },
  x => x.stars === 2
);
  
console.log(result);
  