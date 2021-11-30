// return all the indices (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent its number of occurrences, 
//multiple numbers may be needed to represent all the places in the string that it shows up.

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1,array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
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



const letterPositions = function(sentence) {
  const results = {};
  //let noSpaceStrings = sentence.replace(/\s/g,'');        //the output wants the index in the original string (including spaces in the index count)
  for (let i = 0; i < sentence.length; i++) {
    
    if (sentence[i]!== " ") {               //don't need (sentence[i]) infront of (sentence[i]!== " ") also this line is to not push spaces into the object
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};



const sentence = "lighthouse in the house";

const result1 = letterPositions(sentence);
console.log(result1)

assertArraysEqual(letterPositions("my name is Karen").K, [11]); //it is case sensitive, K !=== k
assertArraysEqual(letterPositions("hello").e, [1]);



// Side Notes

// Consider using a typical for(let i = 0; i < n; i++) loop since it works with 
// indices which are needed for the results. Alternatively you could use for..of to 
// loop over the string but then manage your own 0-based counter using a variable 
// and incrementing it within the loop.

module.exports = letterPositions;