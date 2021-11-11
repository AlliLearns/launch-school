// Given the following similar sets of code,
// what will each code snippet print?

// a
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// ------------------------------
// one is: "one"
// two is: "two"
// three is: "three"
// Yay got it! 




// b
function messWithVars2(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

one = ["one"];
two = ["two"];
three = ["three"];

messWithVars2(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

//-----------------------------
// one is: "one"
// two is: "two"
// three is: "three"
// Yay got it! 



// c
function messWithVars3(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

one = ["one"];
two = ["two"];
three = ["three"];

messWithVars3(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

//-----------------------------
// one is: "two"
// two is: "three"
// three is: "one"
// Yay got it! 
