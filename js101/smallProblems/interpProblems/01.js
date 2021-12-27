// 1000 Lights
// You have a bank of switches before you, numbered from `1` to `count`.
// Every switch is connected to exactly one light that is initially off. 
// You walk down the row of switches and toggle every one of them, that is,
// you flip every switch. All the lights are now on. You walk back to the 
// beginning of the row and start another pass. On this second pass, you
// toggle switches `2`, `4`, `6`, and so on. Now every other light is on. 
// On the third pass, you go back to the beginning again, this time toggling
// switches `3`, `6`, `9`, and so on. You continue to repeat this process
// until you have made `count` passes. 

// Write a program that takes one argument - the total number of switches -
// and returns an array of the lights that are on after `count` passes.



console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// Took about 25 minutes on first solution

/*
  PROBLEM
    input is a positive integer representing `count` lights
    output is an array of the lights that are on after the program is complete
    program makes `count` passes, toggling multiples of iterator + 1 per pass

  ALGORITHM
  create array `lightsOn` and set to array of 0s with length count
  iterate from [1, count] count times...
    if iterator is evenly divisible by divisor, 
      toggle value
  end iteration
  return new array whose values are the indices (plus one) of `lightsOn` whose values are 1
*/

function lightsOn(switches) {
  const lightsOn = new Array(switches).fill(0);

  for (let pass = 1; pass <= switches; pass++) {
    for (let i = 0; i < switches; i++) {
      if ((i + 1) % pass === 0) lightsOn[i] = toggle(lightsOn[i]);
    }
  }
  return lightsOn.map((num, i) => num * (i + 1)).filter(num => num);
}

function toggle(num) {
  return num ? 0 : 1;
}