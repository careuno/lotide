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
    console.log(`✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`❌ Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

//assertArraysEqual([1, 2, 3], [1, 2, 3]);

const without = (sourceArray, itemsToRemove) => {
  let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
      let isEqual = false;
       for (let j = 0; j < itemsToRemove.length; j++) {
        if (sourceArray[i] === itemsToRemove[j]) {
          isEqual = true;
        } 
        }
      if (!isEqual) {
        newArray.push(sourceArray[i])
      }
    }
    //console.log(sourceArray);       //this is the test case to make sure original array is not modified?
    return newArray;
  };

  //if (!isEqual) === if (isEqual === false)
  //using let isEqual = false is an example of a FLAG

  console.log(without([1, 2, 3], [1]))
  console.log(without(["1", "2", "3"], [1, 2, "3"]))
  console.log(without(["kitkats", "suckers", "maynards"], ["gum", "rockets", "suckers"]))

// This block of code is testing that the original array is not modified by taking advantage
// of the assertArraysEqual function rather than modifying the without function with a console.log
// line like you had before. 


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
  

module.exports = without;