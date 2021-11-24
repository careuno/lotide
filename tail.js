const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
/*
const assertEqual = function (actual,expected) {
  let array = [];
  let tailArray = [];
  for (let i = 0; i < array.length; i++) {
      (let j = 0; j < tailArray.length; j++) {
      if (array[i] === tailArray[j]) {
        return true;
      }
    }
  };*/


/* ATTEMPT #1
const tail = (array) => {
  let tailArray = [];               //but you don't need to store it in a variable
  tailArray = array.slice(1)
  return tailArray;
}
*/

let array = [5,6,7,9,10,11];
const tail = (array) => {
  return array.slice(1);
};

console.log(tail([5,6,7,9,10,11]));
console.log(array);
//this test case shows that the original array was not modified


// Another Test Case: Check the original array was not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//Other Test Cases

//An array with only one element should yield an empty array for its tail
console.log(tail([5])); //returns []

//An empty array should yield an empty array for its tail
console.log(tail([])); //returns []





// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2:
const final = tail([1,2,3]);
assertEqual(final[0],2);
