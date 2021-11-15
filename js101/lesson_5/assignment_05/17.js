// A UUID is a type of identifier often used to uniquely 
// identify items, even when some of those items were created
// on a different server or by a different application.
// That is, without any synchronization, two or more computer
// systems can create new items and label them with a UUID with
// no significant risk of stepping on each other's toes. 

// It accomplishes this feat through massive randomization. 
// The number of possible UUIDs is approximately 3.4e38.
// The chance of a conflict is vanishingly small with such
// a large number of possible values.

// Each UUID consists of 32 hexadecimal characters
// (digits `0-9` and letters `a-f`) represented as a string.
// The value is typically broken into 5 sections. 
// 8-4-4-4-12 pattern.

// Write a function that contains no arguments and returns 
// a string containing a UUID.


// Returns the maximum decimal value for a hex number of the given length
function determineMax(hexLength) {
  return (16 ** hexLength) - 1;
}

// Takes an integer and returns the hexadecimal string
function makeHexString(dec) {
  return dec.toString(16);
}

// Generates a UUID of the form "8-4-4-4-12"
// where each number is the length of a hex digit.
function generateUUID() {
  let uuid = "";
  const hexLengths = [8, 4, 4, 4, 12];

  
  hexLengths.forEach(len => {
    const maxValue = determineMax(len);
    const value = Math.floor(Math.random() * maxValue);
    let hexValue = makeHexString(value);
    
    // Could also pad the start with 0s...but I don't know if that's allowed in UUIDs.
    // Doesn't that significantly restrict the number of values that this can contain?
    // printValueRange(len);
    // Nope, guess not.
    while (hexValue.length < len) {
      value = Math.floor(Math.random() * maxValue);
      hexValue = makeHexString(value);
    }

    uuid += `${hexValue}-`;
  });

  uuid = uuid.slice(0, uuid.length - 1);

  return uuid;
}

function printValueRange(len) {
  console.log(determineMax(len) - determineMax(len - 1));
}

console.log(generateUUID());

// ------------------------------------------
// Their solution
function generateUUID2() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}

generateUUID2(); // => '02e51c2f-dacd-c319-53b5-e40e6e8c1f78'
generateUUID2(); // => '39038ab9-3b95-43d8-6959-5d785ccb9b69'
generateUUID2(); // => 'f7d56480-c5b2-8d4d-465f-01a4ea605729'