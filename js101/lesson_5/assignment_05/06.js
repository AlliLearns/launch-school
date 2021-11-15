// One of the most frequently used 
// real-world string operations is 
// "string substitution," where we 
// take a hard-coded string and 
// modify it with various parameters
// from our program. 

// Given the previously seen family object,
// print the name, age and gender of each.

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// With this format:
// `${name} is a ${age}-year-old ${gender}

/*
  INPUT   object
  OUTPUT  nothing, just printing internally
  RULES   print the data of the object
          assume a consistent object structure
  DATA    objects, arrays
  ALGORITHMS
    function printFamily(familyObj)
      - store familyObj entries into `entries`
      - iterate over all of `entries`
        - store name in `name`
        - store age in `age
        - store gender in `gender
        - print message
*/

function printFamily(familyObj) {
  const entries = Object.entries(familyObj);

  entries.forEach(member => {
    let name = member[0];
    let age = member[1].age;
    let gender = member[1].gender;

    console.log(`${name} is a ${age}-year-old ${gender}.`);
  });
}

printFamily(munsters);
