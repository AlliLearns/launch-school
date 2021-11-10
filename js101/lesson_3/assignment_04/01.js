// Write three different ways to 
// remove all of the elements from 
// the following array. 

let numbers = [1, 2, 3, 4];

// -------------------------------

numbers.length = 0;
numbers.splice(0, numbers.length);

while (numbers.length) {
  numbers.pop();
}

// Not run since each of these
// are destructive of the 
// numbers array. 