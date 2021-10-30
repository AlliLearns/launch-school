// Run node's debugger with `node inspect <file>`

let counter = 1;

while (counter < 5) {
  console.log(counter);
  debugger;
  counter += 1;
}