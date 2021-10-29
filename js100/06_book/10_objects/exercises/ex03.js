// Use object literal syntax to create
// and object that behaves as an array
// in a `for` statement.
// The object should contain at least 3 elements. 
// You should pace your code between the braces in the 
// `let` statement: 

let myArray = {
  0: 'bob',
  1: 'cherry',
  2: 'larz',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

