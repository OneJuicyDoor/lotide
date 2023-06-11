const countOnly = function(allItems, itemsToCount) {
  const results = {};

  // Loop through each item
  for (const item of allItems) {
    // Check if the item should be counted
    if (itemsToCount[item]) {
      // If the item already exists in the object increment it
      if (results[item]) {
        results[item] += 1;
      } else {
        // initialize the count for the item to 1
        results[item] = 1;
      }

      console.log(item);
    }
  }

  return results;
}

module.exports = countOnly;


/*
const firstNames = [
  
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined); */