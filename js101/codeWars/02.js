// Problem 02
// Find all pairs
// You are given an array of integers. Your task
// will be to count all pairs in that array and 
// return their count. If the array is empty or 
// contains only one value return `0`. If there 
// are more pairs of a certain number, count each
// pair only once. 

/*
  INPUT   array of integers
  OUTPUT  numerical value
  RULES   if array is under 2 elements, return 0
          count each pair only once
          assume array will only contain integer numbers
  DATA    arrays
  ALGORITHM
    function countPairs(arr) {

    }

  THOUGHTS
    I'm having a a hard time knowing whether my solution will work right out.
    I'm used to being able to come up with an initial solution and keep working it 
    until I arrive at something that works. But I'm not so sure that will work here.
    There isn't time for me to approach these problems the way I usually do, and it's 
    better if I can get a logically correct solution out the gate anyway, so I'd like 
    to adjust my problem solving process. 

    Solving a problem with words isn't natural to me anymore. I think in terms of code. 
    But I'm not catching all the issues that my solution will have, all the missing 
    pieces. Is that expected? Not really, they want to see how you recover if your logic
    was incorrect...and right now I don't recover well because my approach is to test out
    what I think was wrong until I get it right - and I think that counts as 'hack and slash'
    to them. But as it stands I don't have 'full control over my code' as they want. 

    So what can I do? 

    Slow down. Solve the problem with words only. Check your logic mentally. 
    Get used to this method, as it'll take a long time to adjust. 
    I'll get faster as I keep using it. For now, go ahead and go into 
    implementation details? Is that too close to solving with code instead 
    of solving with logic? 

    1. Read the problem and note inputs, outputs and rules.
    2. Look at the given test cases or make your own.
    3. Verify assumptions about the problem against these test cases. 
    4. Make high-level algorithm for one or more solutions. 
    5. Think through and talk about the details for selected algorithm.
    6. Try to keep it implementation-independent? We'll see. 

    (words don't always cover the important details)
*/


console.log(countPairs([1, 2, 5, 6, 5, 2]) === 2);
console.log(countPairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) === 4);
console.log(countPairs([0, 0, 0, 0, 0, 0]) === 3);
console.log(countPairs([1000, 1000]) === 1);
console.log(countPairs([]) === 0);
console.log(countPairs([54]) === 0);