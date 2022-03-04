// Buggy Code 01
// The code below is expected to output the following when run: 
// > let helloVictor = createGreeter('Victor');
// > helloVictor.greet('morning');
// = Good Morning Victor

function createGreeter1(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter1('Victor');
helloVictor.greet('morning');

// However, it instead results in an error. 
// What is the problem with the code? 
// Why isn't it producing the expected results? 

// It doesn't work because we need to add `this`. in front of the object property access.

// Functions are objects.
// Methods are just functions that happen to be object parameter values.
// When a method is called, the `function object` is what's getting invoked. 
// And the function object doesn't care if its reference is assigned to some other object's parameter. 
// Even if a function is a method, that function object can't see the object's other parameters. 
// `name` (parameter), `morning`, `afternoon` and `evening` are not part of the lexical scope of `greet`'s function object. 
// So when `greet`'s function object is invoked, that anonymous function can't find any of `morning`, `afternoon` or `evening`.
// (It can find `name` because it finds the `name` that was passed in an an argument to `createGreeter`, so `name` is in lexical scope.)
// The function object that `greet` is assigned to needs some way to access the object that it's a method on. 
// JavaScript does not make that link automatically. 
// So, we use `this`. 
// `this` becomes an object whose properties we can access.




// I had a hole in my understanding about why we needed `this` until this problem.
// I hadn't thought about why JavaScript wouldn't allow a method any access
// its object's properties without help - why lexical scoping doesn't work in an object factory. 
// So I'd like to go over the thought process that helped me fill it in.

// When we look at the code that was given, the initial thought would be - 
// the `morning` property is in the scope of the object, so why can't the method
// on `greet` find it?

// The answer is that methods are properties whose values are references to a function object.
// We knew this, but I didn't understand the implications of that for property referencing within the function.

// I'll start by making a function expression out of our `greet` method: 
const greetPerson = function(timeOfDay) {
  let msg = '';
  switch (timeOfDay) {
    case 'morning':
      msg += `${morning} ${name}`;
      break;
    case 'afternoon':
      msg += `${afternoon} ${name}`;
      break;
    case 'evening':
      msg += `${evening} ${name}`;
      break;
  }

  console.log(msg);
};

// And then try to call it: 
// greetPerson('Victor', 'morning');
// We'll get a ReferenceError - because of course the program can't find the variable called `morning`.
// There is no `morning` variable that exists in our program so far. 
// (or `name`, or `afternoon` or `evening`)

// Now we'll make the object factory:
function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: greetPerson,  
  }
}

const greetVictor = createGreeter('Victor');
greetVictor.greet('morning'); 

// Same error. 
// JavaScript doesn't make the properties of an object visible to the methods that are on that object.
// Methods are just memory addresses that reference function objects. 
// `greetPerson` has no idea that some object out there has the data its looking for. 
// `greetPerson` has no idea that it's part of that object. 