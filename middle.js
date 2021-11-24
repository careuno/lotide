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

//assertArraysEqual([1, 2, 3], [1, 2, 3]);

//• take in an array
//• return the middle-most element(s) of an array
// The middle function should return an array with only the middle element(s) of the provided array.
// This means that the length of the returned elements could vary.


const middle = (array) => {
  if (array.length === 1 || array.length === 2) {
    return [];
  }
  else if (array.length % 2 !== 0) {
    return [(array[(array.length - 1) / 2 ])];
} else {
    return [array[((array.length/2)-1)] , array[(array.length/2)]];
  }
};
console.log(middle(['cat','dog','lizard','chicken'])); // returns: ['dog','lizard']
console.log(middle(['cat','dog','lizard','chicken','pizza'])); // returns: ['lizard']
console.log(middle([1,5,6,9,10,25,78,21,90])); // returns: [10]
console.log(middle([1])); //returns: []
console.log(middle(['cat'])); // returns: []
console.log(middle([])); //returns: ?
console.log(middle(['print', 'this', 'that', 'now'])); //returns: ['this','that']

//Test Code
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(middle(words), ["world"]);

const animals = ['cat','dog','lizard','chicken','pizza'];
assertArraysEqual(middle(animals), ['lizard']);