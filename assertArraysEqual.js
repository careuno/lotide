const eqArrays = require('./eqArrays');


// const eqArrays = (array1, array2) => {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// }; //  NO LONGER NEEDED BECAUSE REQUIRING EQARRAYS ABOVE

// Implement assertArraysEqual which will take in two arrays and console.log
//an appropriate message to the console.

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1,array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);



module.exports = assertArraysEqual;