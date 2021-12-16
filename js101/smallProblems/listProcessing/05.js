// All Substrings
// Write a function that returns a list of all substrings
// of a string. Order the returned list by where in the 
// string the substring begins. This means that all 
// substrings at index position 0 should come first, 
// then all substrings that start at index position 1, 
// and so on. Since multiple substrings will occur at each
// position, return the substrings at a given index from
// shortest to longest. You should use the `leadingSubstrings`
// function you wrote in the previous exercise. 

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

  /*
    PROBLEM
      input is a string of a single word
      output is an array of all possible substrings

    ALGORITHM
  */

function substrings1(str) {
  const substrings = [];

  for (let i = 0; i < str.length; i++) {
    substrings.push(leadingSubstrings(str.slice(i)));
  }

  return substrings.flat();
}


function substrings(str) {
  return [...str].map((_, i) => leadingSubstrings(str.slice(i))).flat();
}

function leadingSubstrings(str) {
  return [...str].map((_, i) => str.slice(0, i + 1));
}
