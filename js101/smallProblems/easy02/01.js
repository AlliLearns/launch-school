// Create a function that takes two arguments,
// an array and an object. The array will contain
// 2 or more elements that, when combined with 
// adjoining spaces, will produce a person's name.
// The object will contain two keys, `"title"` and 
// `"occupation"`, and the appropriate values. 
// Your function should return a greeting that uses
// the person's full name and mentions the person's title.


/*
  PROBLEM
    input is an array and and object
    input array contains two or more elements that represent a person's name
    input object will contain a `title` and `occupation` property with their values
    output will print a greeting that uses the person's full name and mentions the person's title

  ALGORITHM
    isolate the person's name, title and occupation into variables
    return the greeting `Hello, ${personName}! Nice to have a ${title} ${occupation} around.`
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