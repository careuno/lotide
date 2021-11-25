const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// countOnly will be given an array and an object. It will return an object
//containing counts of everything that the input object listed.

// • recognize from the object which elements we should be looking for in the array
// • if the signaled keys match the elements of the array
// • count up how many of each element in the array, have a counter that keeps track


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// If results[item] exists count += 1
// else results[item] = 1
//if it doesn't exist - undefined = false && if it doesn't exist, we want to assign key:value to object
//if it does exist it would come back defined = true && if it does exist, we want to increment the existing value in the key:value +1


/* ALTERNATIVE

for (const item of allItems) {
    if (!results[item]){
        results[item] = 1
    } else {
      results[item] += 1
    }
  }
*/


// Functions can only return one thing.
// That thing can be a primitive data type, like a number, a boolean, null or a string.
// In some cases it makes sense to return an object.

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
//you see in the assertEqual lines that it's passing a key:value pair of an object and a number
//you get the first error because when assertEqual looks for result1, and then result one goes to countOnly, it doesn't see an object to find the key:value pair therefore is ERROR result1/ jason is undefined
//you fix that first error by returning an empty object in the function countOnly, so now when you run it, the object exists but is undefined.

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);



//Error Message reads:

// /Users/ngo/lighthouse/w1/lotide/countOnly.js:48
// assertEqual(result1["Jason"], 1);
//                    ^

// TypeError: Cannot read property 'Jason' of undefined
//     at Object.<anonymous> (/Users/ngo/lighthouse/w1/lotide/countOnly.js:48:20)
//     at Module._compile (node:internal/modules/cjs/loader:1092:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1121:10)
//     at Module.load (node:internal/modules/cjs/loader:972:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:813:14)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)

//means there is the a mismatch at result1["Jason"] and so what could that be, this notation is referring to an object,
//and the code currently doesn't defined result1 as an object.

//you don't need to pass info to all parameters for code to run, ready for future use in function

