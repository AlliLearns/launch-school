// Create a function that takes two arguments,
// an array and an object. The array will contain
// 2 or more elements that, when combined with 
// adjoining spaces, will produce a person's name.
// The object will contain two keys, `"title"` and 
// `"occupation"`, and the appropriate values. 
// Your function should return a greeting that uses
// the person's full name and mentions the person's title.


/*
  INPUT   An array with two or more elements, representing someone's name
          An object that contains the person's title and occupation. 
  OUTPUT  A string that returns a greeting using this information. 
  RULES   The input array will have at least two elements
          The input object will have a 'title' and an 'occupation' key.
  DATA    Primitive strings, arrays and objects.
  ALGORITHM
    - function greetings(nameArr, jobObj)
      - declare `personName` variable and init it to the joined `nameArr`, with space delimiter. 
      - declare `title` and init to `jobObj[title].
      - declare `occupation` and init to `jobObj[occupation].
      - return a string `Hello, ${personName}! Nice to have a ${title} ${occupation} around.`
*/

function greetings(nameArr, jobObj) {
  const personName = nameArr.join(' ');
  const title = jobObj.title;
  const occupation = jobObj.occupation;

  return `Hello, ${personName}! Nice to have a ${title} ${occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.