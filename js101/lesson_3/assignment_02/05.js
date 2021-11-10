// What will the following code output?

console.log(false == '0');  // true
console.log(false === '0'); // false

// ---------------------------------

/*
  Since the first operation uses loose equality, 
  the boolean value gets coerced into its number 
  equivalent (0), and the string gets coerced 
  into its number equivalent (0). 

  Strict equality compares values without type
  coercion, leading to the result of 'false.'
*/ 