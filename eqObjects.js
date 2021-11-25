const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Function takses two objects
// Returns T/F based on match

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

//if it's an array than use eqArrays
//if these arrays are not equal then return false

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      const arrayIsEqual = eqArrays(object1[key], object2[key]);
      if (!arrayIsEqual) {
        return false;
      }
      //if you have objects within your object you won't be able to compare using eqArrays and you'll have to add the lines of code written in pseudocode
      //check if it's an Object, not array and not null, if true, call eqObjects
      //set a variable to equal what you pass to eqObjects similar to line 36
      // if that variable isn't true {
      // return false; again like line 38
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
// if (typeof )

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);


//Block below is an example of how it would maybe work as a FOR OF loop


// const eqObjects = function(object1, object2) {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (const key of keys1) {
//     if (Array.isArray(object1[key])) {
//       if (!eqArrays(object1[key], object2[key])) {
//         return false;
//       }
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
//};