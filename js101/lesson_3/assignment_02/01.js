// Will the code raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;


/*
  - No, the code won't raise an error. 
  - JavaScript allows array values be assigned to any index, 
              even indices past the current end of the array. 
  - You can also assign to non-integer or negative integer keys, 
              since arrays are just objects in JavaScript. 
              Doing so will add to the properties of the array
              object, but it won't affect the length of the array. 
              This is not recommended behavior though. 
  - Adding elements to the end of the array will also affect
              the array.length in a way you might not expect.
              The length will reflect the highest index + 1
              instead of the actual number of elements if 
              you assign past the end. 
*/

// Bonus
numbers[4]; // What will this line return?

/*
  - Line 22 will return `undefined`. 
*/