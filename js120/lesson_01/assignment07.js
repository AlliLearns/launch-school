// Functions as Object Factories
// Topic: Automated object creation

// Goal: You want to make multiple objects of the same 'type'
// 'Same type' meaning they exist to model the same real-world concept.
// Like how two dogs can be different, they are still two dogs. 
// We'll show a way to create two dogs without having to use two object literals. 

// We don't want to have to do this: 
const dog1 = { name: 'Drew', bark() { console.log("woof!") } }
const dog2 = { name: 'Jess', bark() { console.log("woof!") } }
// There's a lot of duplication going on.
// If we wanted to change what 'bark' does, we'd have to change it
// on every object literal representing a dog that exists. 


// We'll use an "object factory" to avoid this:
function makeDog(name) {
  const newDog = {
    name, 
    bark() {console.log('Woof!')},
  }

  return newDog;
}

const dog3 = makeDog('James');
const dog4 = makeDog('Larry');

// The object factory wraps a new object in a function call.
// Now if we want to change what `bark` does, we only have to do it in one place.