const assertEqual = function (actual, expected) {
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



const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (key in object1) {
    if (Array.isArray(object1[key])) {
      const arrayIsEqual = eqArrays(object1[key], object2[key])
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

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  
  if (eqObjects(object1,object2)) {
    console.log(`✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

//Functions that do not return values and instead print messages to the console are more
// difficult to test using assertions because we cannot compare their return value to an expected value.
// So, we can't write assertions (test codes) so instead call the function below it's declaration and confirm a message prints.
assertObjectsEqual(cd,dc);


//Prints: ✅ Assertion Passed: [object Object] === [object Object]
// Not very descriptive and will not help when debugging
// workaround, modify function to use util library's inspect function
//https://web.compass.lighthouselabs.ca/cce0707b-2160-470b-bc43-98f3f7d10da4