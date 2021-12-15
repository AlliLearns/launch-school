// Name Swapping
// Write a function that takes a string argument consisting of a
// name, a space and a last name, and returns a new string 
// consisting of the last name, a comma, a space and the first name.

console.log(swapName('Joe Roberts'));             // "Roberts, Joe"
console.log(swapName('Joe Malt Low Roberts'));    // "Roberts, Joe Malt Low"

/*
  PROBLEM
    input is a string representing a first and last name
    output is a string with the first and last names switched, with a comma between them
    assume the input will always be a name of the specified form

  ALGORITHM
    can probably be done with regular expressions and replace...
    can replace take a regex as its second argument? 
    No, but it looks like I can do what I want with a callback as the second parameter
    strings in the second argument also support capturing group patterns...

    define a new regular expression with capturing groups to get the first and second word
    return replace(regex, `$2, $1`)
*/

function swapName(name) {
  return name.replace(/(^.+)\b\s(\w*$)/, `$2, $1`);
}
