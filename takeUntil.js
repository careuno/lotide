/*It will take in two parameters as well:
• The array to work with
• The callback (which Lodash calls "predicate")
• LOOP UNTIL callback/predicate = truthy

• return a slice of the array with elements taken from the beginning
*/

// Sam's Pseudocode for takeUntil
// Loop through the array
// result = []
// if (callback(element)){
//   return result
// } else {
//   result.push(element)
// }
// return result
// End Loop


const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1,array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};


const takeUntil = function(array, callback) {
  let result = [];
  for (let element of array) {
    if (callback(element)) {// if true
      return result;
    } else { // if false
      result.push(element);
    }
  }
  return result;
};

//Since takeUntil returns arrays, the best assertion function to use
//would be assertArraysEqual to compare its return value against an expected array.

//Expected Input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


// assertArraysEqual(variableOfHighOrderFunction, expected output)
assertArraysEqual(results1,[1, 2, 5, 7, 2]);
assertArraysEqual(results2,['I\'ve', 'been', 'to', 'Hollywood']);

// if the callback implied return doesn't exist then all the elements will be pushed into the results array and basically return the same array you had at input




//Expected Output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]


module.exports = takeUntil;