const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//pseudo code
// • takes 2 arrays
// • returns true or false
// • THINK do we care if it's true or do we care if it's false? It's more important to know if it's false to stop code

//In the example below you can't do nested for loops with two indexes,
//cause it will check arr1[0] with every value in arr2 when you only need to check the same value in the same spot


// const eqArrays = function (array,secondArray) {
//   let stat = false;
//   for (let i = 0; i < array.length; i++) {
//      for (let j = 0; j < secondArray.length; j++) {
//       if (array[i] === secondArray[j]) {
//         stat = true
//         return stat;
//       } else {
//         return stat;
//       }
//     }
//   }
//   console.log(eqArrays)
// }

// you need to check length of arrays if they match first,
// cause if it doesn't you can return false and end function right away.

// In this example you use one for loop and since we've already check array length,
// you won't risk an Error with mismatched lengths and the stopping condition for one
// will work for the other since they are equal.
// NOTE: Since you have only one for loop that applies to both arrays, you can share the same index [i] with both.


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

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
