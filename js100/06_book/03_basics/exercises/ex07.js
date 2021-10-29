// Will an error occur if you try to access 
// and array element with an index that is 
// greater than or equal to the length of 
// the array? 

let foo = ['a', 'b', 'c'];
console.log(foo.length);
console.log(foo[3]);

// No, it'll just print `undefined`. 
// JavaScript lets you access array indicies
// outside of the length of the array, 
// so be careful not to leave gaps of 
// `undefined` by assigning to beyond the 
// end of an array. 

