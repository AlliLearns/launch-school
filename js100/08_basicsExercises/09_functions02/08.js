// The function `initGame` below returns an object.
// Refactor it using arrow function syntax.

// let initGame = function () {
//     return {
//       level: 1,
//       score: 0
//     }
//   };

// const initGame = () => { 
//     return {
//         level: 1,
//         score: 0,
//     };
//  };

//I'd forgotten about the parentheses thing with arrow functions.
const initGame = () => ( {level: 1, score: 0} ); 


let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);