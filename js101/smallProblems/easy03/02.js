// Write a function that will take a short line of 
// text and write it to the console log within a box.

logInBox('To boldly go where no one has gone before.');
logInBox('');

/*
  PROBLEM
    input is a line of text
    output is printing the input in a box

  ALGORITHM
    print the top border
    print a line of empty spaces the length of the string + 2
    print a line with the given string
    print a line of empty spaces the length of the string + 2
    print the top border

*/

function logInBox(str) {
  const len = str.length + 2;

  console.log(makeSeparator(len));
  console.log(makeRow(len));
  console.log(makeRow(str));
  console.log(makeRow(len));
  console.log(makeSeparator(len));
}

function makeSeparator(len) {
  return `+${'-'.repeat(len)}+`;
}

function makeRow(content) {
  const contentType = typeof content;

  switch (contentType) {
    case 'string':  return `| ${content} |`;
    case 'number':  return `|${' '.repeat(content)}|`;
    default:        return `invalid content type. should be a string or number.`; 
  }
}