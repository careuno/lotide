//Implement the function findKey which takes in an object and
//a callback. It should scan the object and return the first key
//for which the callback returns a truthy value.
//If no key is found, then it should return undefined.

// function findKey (object, callback)
//loop through object for(let obj of object)
// let returnKey = ""; //maybe we don't need to do any reassignment, since you are just returning the key that matches what is being requested
// loop through object
// if callback (obj) = true   // here REMEMBER THAT WHEN YOU LOOK AT THE TEST CODE FOR THE CALLBACK it needs a parameter to pass through the callback function... think what does it need access too so the callback can be true... it needs access to the property of the inner object so use object[key].
// return key;
// else  // cause if it evaluates false on the first loop it will end loop and return false
// return undefined;
//end loop

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    //console.log("callback(key) = ", callback(key))
    //console.log("key = ", key)
    if (callback(object[key])) { // if callback function returns true
      return key; // return key
    }
  }
  return undefined;
};

// ---------test-------------

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2));// => "noma"


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2),"noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 6),"noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3),"noma");

// const object = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }

// console.log(object["Blue Hill"])
// console.log(object["Blue Hill"]["stars"])


