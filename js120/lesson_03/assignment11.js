// Problem 01
// What do we mean whe nwe say that classes are first-class values?
// You can pass classes into functions as arguments, returned from functions,
// assigned to variables and used anywhere a value is expected.
// Expanded my answer after looking at theirs.

// ---------------------------------------------------------------------------

// Problem 02
// Consider the following class declaration: 
class Television {
  static manufacturer() {
    // omitted code
  }

  model() {
    // method logic
  }
}

// What does the `static` modifier do? 
// How would we call the method `manufacturer`?

// The `static` modifier attaches the method to the 
// `Television` object, rather than the new object
// created when `Television` is called with `new`. 
// We can call `manufacturer` with 
// `Television.manufacturer()`. 