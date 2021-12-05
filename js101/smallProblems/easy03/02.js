// Write a function that will take a short line of 
// text and write it to the console log within a box.

logInBox('To boldly go where no one has gone before.');
logInBox('');

/*
  INPUT   string
  OUTPUT  printing
  RULES   put a single space between the vertical borders and the string
          put a single line above and below the string
  DATA    strings
  ALGORITHM 
    - function logInBox(str) 
      - declare and init `len` to `str.length + 2`

      - makeSeparator(len)
      - makeRow(len)
      - makeRow(str)
      - makeRow(len)
      - makeSeparator(len)

    - function makeSeparator(len)
      - return `+${-.repeat(len)}+`
    
    - function makeRow(content)
      - declare and init `contentType` to `typeof content`
      - switch (contentType)
        case 'string': return `| ${content} |`
        case 'number': return `|${' '.repeat(content)|`
        default: return `something went wrong`
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