// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

// ------------------------------------
// This is probably a trick question but 
// I'm going to go with `42` anyway. It's 
// all I ca think of for now. Might have 
// more to do with double-precision.

// Yeah, it gave the answer '34'.
// I'm a dumb. Didn't pay attention
// to variable names. They got me. 
