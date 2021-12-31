// Problem 01
// The code below should output `Christopher Turk is a Surgeon`.
// What will it output? If there is a difference between the actual
// and desired output, explain the difference.
let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal1(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal1(turk.getDescription);

// This will output `undefined` where we try to access the values.
// I know we have context loss but I don't exactly know why.
// I get that it happens when we pass turk.getDescription in 
// as an argument, but I still don't have a good mental image
// of when the value for `this` is being assigned. 

// ---------------------------------------------------------------------------

// Problem 02
// Modify the program from the previous problem so that `logReturnVal`
// accepts an additional context argument. If you then run the program
// with `turk` as the context argument, it should produce the desired
// output. 

turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

// Had to look at solution
function logReturnVal2(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal2(turk.getDescription, turk);

// ---------------------------------------------------------------------------

// Problem 03
// Suppose that we want to extract `getDescription` from `turk`, 
// but we always want it to execute with `turk` as its execution
// context. How would you modify your code to do that?

turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal3(func, context) {
  let returnVal = func;
  return returnVal;
}

//Had to look at solution
const getTurkDescription = turk.getDescription.bind(turk);
logReturnVal3(getTurkDescription);

// ---------------------------------------------------------------------------

// Problem 04
// Consider the following code:

let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();

// Will this code produce the following output? Why or why not?
// The Elder Scrolls: Arena
// The Elder Scrolls: Daggerfall
// The Elder Scrolls: Morrowind
// The Elder Scrolls: Oblivion
// The Elder Scrolls: Skyrim

// Had to look at solution
// It does not; it looses execution context for access to the 
// seriesTitle when we try to take it from the forEach...

// ---------------------------------------------------------------------------

// Problem 05
// Use `let self = this;` to ensure that `TESgames.listGames` uses `TESGames` 
// as its context and logs the proper output.

TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    let self = this;
    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();

// ---------------------------------------------------------------------------

// Problem 06
// The `forEach` method provides an alternative way to supply the execution
// context for the callback function. Modify the grogram from the previous 
// problem to use that technique to produce the proper output:

TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    }, this);
  }
};

TESgames.listGames();

// ---------------------------------------------------------------------------

// Problem 07
// Use an arrow function to achieve the same result
TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(title => {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();

// ---------------------------------------------------------------------------

// Problem 08
// Consider the following code: 
let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

// What will the value of `foo.a` be after this code runs?
// 0, because `increment` gets invoked as a function.

// ---------------------------------------------------------------------------

// Problem 09
// Use one of the methods we learned in this lesson to invoke 
// `increment` with an explicit context such that `foo.a` gets
// incremented with each invocation of `incrementA`.

foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);