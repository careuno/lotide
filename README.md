# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @karuno/lotide`

**Require it:**

`const _ = require('@karuno/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: assesses an array and returns the first value at array[0]
* `tail(...)`: assesses an array and slices off the head/first element in the array and returns the rest of the array. It DOES NOT modify the array that is passed in. It returns a new array. 
* `middle(...)`: assesses an array, returns an array of the the middle element if it's odd, if it's even it returns the middle two elements, and if array length is only 1 or 2, it returns empty array.
* `assertArraysEqual(...)`: uses eqArray to check if two arrays are equal and logs assertion message.
* `eqArrays(...)`: checks and compares two arrays length and elements, returning true or false.
* `assertEqual(...)`: used to do simple comparisons of primititive data with strings, numbers etc and logs assertion message.
* `assertObjectsEqual(...)`: uses eqObjects to check if two objects are equal and logs assertion message.
* `countLetters(...)`: count letters of a string and keeps track of how many occurences in the form of an object with letters as keys and number of occurences as values. 
* `countOnly(...)`: takes two parameters (allItems,itemsToCount). It assesses an array- allItems, and if the element in the array matches itemsToCount (an object specifying what to count with true/false values), it will return an objext with a count of all the things you wished to count and the number of occurences it appears. 
* `eqObjects(...)`: takes two objects and returns True if both objects have identical keys and identifcal values otherwise returns false. It checks length and then loops through the object with a for in loop and assess the object[key] values with eqArrays.
* `findKey(...)`: takes an object and a callback, scans the object with a for in loop and returns the first key for which the callback returns a truthy value. If no key is found, it returns undefined. It is more elaborate than findKeyByValue as you can check if the values are truthy say if you are looking for something that is even or divisible by a certain number. 
Eg. console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2));// => "noma"


* `findKeyByValue(...)`: takes in an object and value, scans teh object and returns the first key when matching the identified value, returning undefined if value doesn't match any keys. 
* `letterPositions(...)`: return all the indices (zero-based positions) in the string where each character is found. Maps out the index of all the letters that you can then later use object.key notation to find the value. Eg. console.log(letterPositions("my name is Karen").K) prints: 11
* `map(...)`: similar to array.prototype.map. It takes in two arguments and with every value in the array, applies the defined callback function. The map function will return a new array based on the results of the callback function. 
Eg. 
const results1 = map(words, word => word[0]);  //will go over each element in the array and take the letter at index[0] and output a new array with the first letter of each element so const words = ["ground", "control", "to", "major", "tom"]; will return [ 'g', 'c', 't', 'm', 't' ])

const results2 = map(ages, age => ++age); // will go over each element in ages and increment by 1, so const ages = [20, 30, 40, 50, 60]; would return - [21, 31, 41, 51, 61]

const results3 = map(singular, plural => plural + "s") // will go over each element in the array and add an 's' to the end of each string and return an array of the plural words const singular = ["ball", "hat", "cup", "table"]; ---> returns ["balls", "hats", "cups", "tables"])
* `takeUntil(...)`: takes in two parameters, looping through, pushes each element from arr 1 into a new array until an element in arr1 matches the value of the second parameter you set. 

eg. 
6const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);takeUntil(data1, x => x < 0); returns,[1, 2, 5, 7, 2] 

Another eg. 
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // ['I\'ve', 'been', 'to', 'Hollywood']

* `without(...)`: assesses an array, takes in two parameters, (sourceArray, itemsToRemoveArray) and returns an array 'without' the items you wanted to remove.
