// Object-Oriented Rock Paper Scissors with 
// objects and factory functions 

/* Classical approach to planning an object-oriented application: 
    1. Write a textual description of the problem or exercise.
    2. Extract the significant nouns and verbs from the description (state and behavior)
    3. Organize and associate the verbs with the nouns.
*/ 

/* 1. Textual Description of Rock Paper Scissors
      RPS is a two player game where each player chooses one of three 
      possible moves: rock, paper, scissors. The winner is chosen by 
      comparing their moves with the following rules: 
        - Rock     > Scissors
        - Scissors > Paper
        - Paper    > Rock
        - If the moves are equal, game is a tie.
*/

/* 2. Extract Significant Nouns and Verbs
      Nouns: player, move, rule 
      Verbs: choose, compare
*/

/* 3. Associate Verbs and Nouns
      Player - choose
      Move   - xx
      Rule   - xx
      ??     - compare
*/



/* Make skeleton objects */
function createPlayer() {
  const newPlayer = {
    // state...
    choose() {/*...*/},
  };

  return newPlayer;
}

function createMove() {
  const newMove = {};

  return newMove;
}

function createRule() {
  const newRule = {};

  return newRule;
}

const compare = function(move1, move2) {};



/* Create an orchestration engine for the game */
// The engine is where the procedural program flow should be. 

const RPSGame = {
  human:    createPlayer(),
  computer: createPlayer(),

  play() {
    displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    displayGoodbyeMessage();
  },
};


RPSGame.play();