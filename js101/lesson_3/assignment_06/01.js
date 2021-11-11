// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return 
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// ---------------------------
// No, second() will return before executing 
// the object literal definition. 
// It returns 'undefined'.

// They site JavaScript's semicolon insertion rules. 