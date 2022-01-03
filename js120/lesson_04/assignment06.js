// Problem 01
// Suppose we have the following classes:
class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
}

// What would happen if we added a `play` method to the `Bingo`
// class, keeping in mind there is already a method of this name 
// in the `Game` class from which `Bingo` class inherits?
// Explain your answer. 
// What do we call it when a method is defined like this?

// The added `play` method will essentially overwrite access
// to `Game`'s `play` method - it does this because JavaScript
// will find a `play` method in `Bingo` first, and it won't look
// any further.
// This is called 'method overriding'

// ---------------------------------------------------------------------------

// Problem 02
// Let's practice creating a class hierarchy. 
// Create a class named `Greeting` that has a single method
// named `greet`. The method should take a string argument
// and it should print that argument to the console.

// Now create two more classes that inherit from Greeting, 
// One named `Hello` and another named `Goodbye`. The 
// `Hello` class should have a `hi` method that takes no 
// arguments and logs 'Hello'. The `Goodbye` class should 
// have a `bye` method that logs 'Goodbye'. Use the `greet`
// method from the greeting class when implementing `Hello`
// and `Goodbye`; don't call console.log from either `Hello`
// or `Goodbye`.

class Greeting {
  greet(message) { console.log(message) }
}

class Hello extends Greeting {
  hi() { this.greet("Hello") }
}

class Goodbye extends Greeting {
  bye() { this.greet("Goodbye") }
}