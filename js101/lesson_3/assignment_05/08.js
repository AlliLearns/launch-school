// One day, Spot was playing with the Munster's
// home computer and he wrote a small program
// to mess with their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] = 42;
    familyMember["gender"] = "other";
  }); 
}

messWithDemographics(munsters);

// Did the family's data get ransacked? 
// Why or why not?

// ----------------------------------
// I'm gonna go with `yes`. 
// Object.values would have grabbed the 
// references. Got it, yay!

console.log(munsters);