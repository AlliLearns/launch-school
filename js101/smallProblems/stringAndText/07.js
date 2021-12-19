// Staggered Caps (Part 02)
// Modify the function from the previous exercise
// so that it ignores non-alphabetic characters
// when determining whether it should uppercase or 
// lowercase each letter. The non-alphabetic 
// characters should still be included in the
// return value; they just don't count when 
// toggling the desired case.  

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

/* QUESTIONS
In a study session I had yesterday, we realized my partner kept resorting to hack-and-slash 
because their mind kept trying to solve the whole problem all at once instead of breaking it down
and narrowing their focus to one micro-problem at a time. I haven't thought about this for a while
because engineering school required breaking problems down like this to solve them, so I've been 
doing it for a decade and it feels so fundamental to me that it was too easy for me to overlook. 

We hear the phrase 'break the problem down' all the time, but it's not really taught how. Probably
because something like this is one of those things that needs a personalized strategy - trying to 
learn and apply someone else's approach is too abstractly complicated. You have to find what works 
for you.

For that reason, their 'aha' moment around their current approach will help them out a lot more than 
what I have below, but I still wanted to go through the exercise of bringing my mental process up to 
the surface and examining it in detail. My process involves finding and answering a series of 
questions that focus on atomic parts of the problem on the unconscious level. 

PEDAC - focus is only on the P and the A here. 
(Building my understanding of the problem)
  What's the input? Any special details?   (A string, and not this time)
  What's the output? Any special details?  (A string, with alternating caps)
  What are the explicit rules as stated in the problem statement? 
    (Toggle the capitalization of the characters in the string
    first char is capitalized
    Exclude non-alphabetic chars in case toggle)
  What are the implicit rules as demonstrated by test cases or answered by the interviewer/client? (None that I found)

(Building my algorithm statement)
  Are there any empty-inputs we need to account for? (No, not in this case)
  What's the main problem solving construct? (An iteration - create the iteration boundary now)
  Is there anything external to the iteration that I'll need to return? (Yes, a build-up string - create and return it now)
  What support variables will I need for the iteration? (None that I'm aware of right now)
  What is the body of the iteration and what problems need solved?
    We are going to need to modify the string character-by-character, so grab the current character.
    Any special cases we need to consider? (Yes, behavior is different for index 0 than the rest.)
    How do we skip non-alphabetic characters in the case determination?
      (Jump indices? No, that would keep us from capturing the non-alphabetic chars we want
      Need a boolean then, to help the toggle process
      Create a boolean outside the loop called `toggle`. Init to `true` to handle the first index.)
    How to handle non-alphabetical characters, then? (Put at start of loop. Add char to result and continue)
    How do we use the toggle var to stagger case?
      (If toggle is true, caps the letter
      If toggle is false, lowercase the letter)
    How and when do we change toggle's value?
      (Change toggle's value when we're changing the value of a alphabetical character)

  Each question identifies a micro-problem.    
  These questions and their answers are being asked and answered unconsciously. 
  Only the significant part of the answer bubbles up to my awareness. 
  Like the question about how to handle case change without using an index - only a vague image of 'true/false/change' bubbles up.
  There's one more layer under this one that's constantly asking 'what's the next problem?' after each question/answer pair.
  None of this happens all at once. After each answer, I was filling out my problem statement and algorithm below. 
*/

/*
  PROBLEM
    input is a string
    output is the input string with alternating caps
    toggle character capitalization
    first character is capitalized
    exclude non-alphabetic characters as part of the case toggle count

  ALGORITHM
    create `staggeredStr` and init to empty string
    create `toggle` variable and set to `true`
    iterate over the input string
      grab current char 
      if char is not alphabetical, add to `staggeredStr` and continue
      if `toggle` is true, caps the letter, concat to `staggeredStr` and set `toggle` to false
      if `toggle` is false, lower the letter, concat to `staggeredStr` and set `toggle` to true
    end iteration
    return `staggeredStr`
*/

/*
  Another layer of complication that we recognized when solving problems was my study partner's 
  tendency to want to come up with the most impressive solution right out the gate. But my opinion 
  is that it's important to solve the problem in the most basic way possible and then optimize 
  later, when it's needed (if you're at a stage where you're learning programming fundamentals). 

  'Optimization' could be for readability or for code performance. At this stage of learning, most 
  people are competing to come up with solutions that are quick and easy for others to absorb. I do 
  this too, and more than once I've jumped to solving the problem with a specific built-in method 
  rather than relying on more general iterations and branching to try and feel impressive. 
  
  But I also think that this approach is crippling in a way - when our go-to to solving a 
  problem is to use a language-specific method and our goal is to learn programming, 
  we aren't exposing ourselves to the process of solving these problems in a very general way. 
  And by 'general' I mean using loops and branches. The reason why I think this is a handicap 
  is because it hinders our ability to solve the same problem when we encounter it in 
  another language and you don't have the same language-specific constructs to take care of 
  the overhead. 
*/

