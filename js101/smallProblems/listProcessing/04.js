// Leading Substrings
// Write a function that takes a string argument and returns
// a list of substrings of that string. Each substring should
// begin with the first letter of the word, and the list should 
// be ordered from shortest to longest. 

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/*
  PROBLEM
    input is a string
    output is an array
    list of the possible substrings (that start with the first letter)
    ordered by substring length
    assume only one-word strings

  ALGORITHM
  split input string into an array `chars`
  create a new empty array `substrings`

  iterate over `chars`
    join every character from 0 to i in the current iteration
    (by taking the last value in substrings and appending the current character)
    append to `substrings`
  end iteration

  return `substrings
*/

function leadingSubstrings1(str) {
  // for
  const chars = str.split('');
  const substrings = [];

  chars.forEach(char => {
    if (substrings.length === 0) substrings.push(char);
    else {
      const nextStr = substrings[substrings.length - 1] + char;
      substrings.push(nextStr);
    }
  })

  return substrings;
}

// map
function leadingSubstrings2(str) {
  return [...str].map((_, i) => str.slice(0, i + 1));
}
