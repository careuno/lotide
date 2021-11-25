const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


//Implement the function findKeyByValue which takes in an object and a value. 
//It should scan the object and return the first key which contains the given value. 
//If no key with that given value is found, then it should return undefined.

// • takes in an object + value
// • scan object
// • return first key when match value
// • return undefined if no value match


// This function is what COMPASS hints at, with object keys and for of. but the other one with a for in also works.
// The mistake I made is mistaking what condition I set, also the value I pass through isn't "drama", it's "The Wire" so we need to compare to the property value, not the key

// const findKeyByValue = function (object, value) {
//   const keys = Object.keys(object)
//   for (key of keys) {
//     if (object[key] === value) {
//       return key;
//     }

//   }
//   return undefined;
// };

const findKeyByValue = function (object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }

  }
  return undefined;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);



