// Lettercase Percentage Ratio
// Write a function that takes a string and returns an object
// containing the following three properties: 
// The percentage of characters that are in lowercase letters
// The percentage of characters that are uppercase letters
// The percentage of characters that are neither 
// You may assume that the string will always contain at least one character.

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

/*
  PROBLEM
    input is a string 
    output is an object
    object contains the percentage of: chars that are lowercase, that are uppercase, that are neither
    percentage values are strings
    percentage values are fixed to two decimal points
    do spaces count as part of the 'neither' percentage? Yep, looks like it.

  ALGORITHM 
    create object with properties initialized to 0
    break the string into characters
    iterate over the array
      if char is not an alphabetic character, increment count
      if char is uppercase, increment count
      if char is lowercase, increment count
    end iteration
    
    replace object values with their calculations
    return object

    function formatResult(obj, strLength) {
      iterate over object
        value at object key is reassigned to `(count / strLength).toFixed(2).toString()`
      end iteration
    }
*/

function letterPercentages(str) {
  const result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  const chars = str.split('');
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    if (char.match(/[^a-z]/i)) result.neither += 1;
    else if (char.toUpperCase() === char) result.uppercase += 1;
    else if (char.toLowerCase() === char) result.lowercase += 1;
  }

  formatResult(result, str.length);

  return result;
}

function formatResult(obj, strLength) {
  for (let key in obj) {
    const count = obj[key];
    obj[key] = ((count / strLength) * 100).toFixed(2).toString();
  }
}

// First completed in twelve minutes.