// Matching Parentheses? 
// Write a function that takes a string as an argument
// and returns `true` if all parenthesis in the string 
// are property balanced, `false` otherwise. To be 
// properly balanced, parentheses must occur in matching
// pairs. 

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

/*
  PROBLEM
    input is a string
    output is a boolean
    return whether all parenthesis are balanced
    assume string inputs

  ALGORITHM
    split string into characters
    create empty array `balanced`

    iterate over character array
      if char is open par, push to `balanced`
      if char is closed par 
        check len of `balanced`
          pop if len === 1
          push if len === 0 and break
    end iteration

    return if `balanced` is empty array
*/

function isBalanced(str) {
  const chars = str.split('');
  const balanced = [];

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    if (char === '(') balanced.push(char);
    if (char === ')') {
      if (balanced.length === 0) return false;
      if (balanced.length > 0) balanced.pop();
    }
  }  

  return balanced.length === 0;
}
