
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


console.log(middle(['cat', 'dog', 'lizard', 'chicken'])); // returns: ['dog','lizard']
console.log(middle(['cat', 'dog', 'lizard', 'chicken', 'pizza'])); // returns: ['lizard']
console.log(middle([1, 5, 6, 9, 10, 25, 78, 21, 90])); // returns: [10]
console.log(middle([1])); //returns: []
console.log(middle(['cat'])); // returns: []
console.log(middle([])); //returns: ?
console.log(middle(['print', 'this', 'that', 'now'])); //returns: ['this','that']

//Test Code
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(middle(words), ["world"], true);

const animals = ['cat', 'dog', 'lizard', 'chicken', 'pizza'];
assertArraysEqual(middle(animals), ['pizza'], false);
