const assertEqual = require('./assertEqual');

// const assertEqual = function(actual,expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// }; //removed to refactor and require assert function
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

const tail = (array) => {
  return array.slice(1);
};

module.exports = tail;