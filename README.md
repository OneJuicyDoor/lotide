# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cameronshephard/lotide`

**Require it:**

`const _ = require('@cameronshephard/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
 
* `head(...)`: returns the first item of an array
* `tail(...)`: returns an array without the first item
* `middle(...)`: returns the middle or middle two numbers in an array 
* `flattenArray(...)`: takes an array of arrays and returns it as one ([1,[2,3],4] => [1,2,3,4]) 
* `countLetters(...)`: returns an array with the count of each letter in the given string
* `eqObjects(...)`: returns a true or false for if the given objects are the same or not
* `countOnly(...)`: returns the amound each item appears in the first array, as long as it is also in the second array
* `eqArrays(...)`: returns a true if the given arrays are the same
* `findKey(...)`: returns the key in an object when the callback is fufilled 
* `findKeyByValue(...)`: returns the key in an object to a given value
* `letterPositions(...)`: returns the psition of each letter in a string
* `map(...)`: returns a new array after using the callback function on each item of the given array and pushing the result
* `takeUntil(...)`: returns the array untill one of the indexes returns true for the callback
* `without(...)` : returns the first array without the things in the second array
#### `countOnly(allItems, itemsToCount)`

- Description: Counts the occurrences of specific items in an array based on a provided criteria.

- Parameters:

  - `allItems` (Array): The array of items to be counted.

  - `itemsToCount` (Object): The object specifying the items to count and their criteria.

- Returns: An object containing the counts of the specified items.