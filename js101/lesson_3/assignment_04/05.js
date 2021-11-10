// The following function unnecessarily 
// uses two `return` statements to return
// boolean values. Can you rewrite this 
// function so it only has one `return`
// statement and does not explicitly 
// use either `true` or `false`

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// Try to come up with at least two different solutions.

// --------------------------------------------

function isColorValid(color) {
  return color === "blue" || color === "green";
}

// I had to look at their solutions.
// Couldn't think of a second one. 

const isValidColor = color => color === "blue" || color === "green";

const isValidColor2 = color => ["blue", "green"].includes(color);