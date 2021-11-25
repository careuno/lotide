const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//inputs
//• a string

//outputs
//• count of each letter = object with key:value pairs of each letter

const countLetters = function(strings) {
  const results = {};
  let noSpaceStrings = strings.replace(/\s/g,'');
  for (const noSpaceString of noSpaceStrings) {
     
    if (noSpaceString) {
      if (results[noSpaceString]) {
        results[noSpaceString] += 1;
      } else {
        results[noSpaceString] = 1;
      }
    }
  }
  return results;
};
  

const sentence = "Hello my name is Karen";

const result1 = countLetters(sentence);

assertEqual(result1["H"], 1); //true
assertEqual(result1["m"], 2); // true
assertEqual(result1["i"], 2); //false


