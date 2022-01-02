// Problem 01
// What naming convention separates constructor functions from other functions?
// Starting with a capital letter. 

// ---------------------------------------------------------------------------

// Problem 02
// What happens if you run the following code? Why?
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // ?

// Had to look for full answer
// lizzy.scamper will throw a TypeError. 
// `scamper` is an undefined property on `lizzy`. 
// `Lizard` was invoked without the `new` operator and 
// it doesn't have an explicit return value, so the 
// return value is `undefined`. 


// ---------------------------------------------------------------------------

// Problem 03
// Alter the code in problem 02 so that it produces the desired
// output: 'I'm scampering!'

function Lizard2() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy2 = new Lizard2();
lizzy2.scamper(); // ?