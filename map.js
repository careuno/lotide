// Our map function will take in two arguments:

// -- An array to map
// -- A callback function
// -- The map function will return a new array based on the results of the callback function.

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


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


const words = ["ground", "control", "to", "major", "tom"];
const ages = [20, 30, 40, 50, 60];
const singular = ["ball", "hat", "cup", "table"];


const results1 = map(words, word => word[0]);
const results2 = map(ages, age => ++age);
const results3 = map(singular, plural => plural + "s")
//console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(results2, [21, 31, 41, 51, 61])
assertArraysEqual(results3, ["balls", "hats", "cups", "tables"])

// worked together with Sam Leung to make test cases