// Ben was tasked to write a simple JavaScript 
// function to determine whether an input string
// is an IP address using four dot-separated numbers.
// He is not familiar with regular expressions.

// Alyssa supplied Ben with a function named 
// `isAnIpNumber`. It determines whether a 
// string is a numeric string between `0` 
// and `255` as required for IP numbers and asked 
// Ben to use it. Here's what Ben wrote:

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

// Alyssa reviewed Ben's code and said 
// "It's a good start, but you missed a few 
// things. You're not returning a false 
// condition, and you're not handling the 
// case where the input string has more or 
// less than 4 components."

// Help Ben fix his code. 

// ---------------------------------

function isDotSeparatedIpAddress2(inputString) {
  let ipNumbers = inputString.split(".");
  if (ipNumbers.length !== 4) {
    return false;
  }

  ipNumbers.forEach(num => {
    if (!isAnIpNumber(num)) {
      return false;
    }
  });

  return true;
}


console.log(isDotSeparatedIpAddress2("10.4.5.11"));
console.log(isDotSeparatedIpAddress2("4.5.5"));
console.log(isDotSeparatedIpAddress2("1.2.3.4.5"));