// Write out a program that outputs 
// `The Flintstones Rock!` 10 times, 
// with each line indented one space 
// to the right of the line above it.

// ---------------------------------

const message = "The Flintstones Rock!";

for (let i = 0; i < 10; i++) {
  console.log(message.padStart(i + message.length));
}

// Self-note: padStart takes final length as input. 