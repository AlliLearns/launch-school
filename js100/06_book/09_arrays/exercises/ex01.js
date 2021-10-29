// In the following code, what are the final 
// `length` values for `array1`, ..., `array5`?

let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

/*
array1.length === 4
array2.length === 5
array3.length === 1     (Incorrect ; length is 0   (Index positions must be non-negative.))
array4.length === 3
array5.length === 100   (Incorrect ; length is 101 (assigned at index 100, length is index+1))


// Extra note on array3: The -1 'index' gets a value of 3, but it's not an index, it's 
//                       a property on the object represented by that array.
*/