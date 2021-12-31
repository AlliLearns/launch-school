// RPS is a two-player game where each player chooses one of three 
// possible moves: rock, paper or scissors. The winner is chosen
// by comparing their moves with the following rules: 
// Rock crushes scissors 
// Scissors cuts paper
// Paper wraps rock
// If the players have the same move, the game is a tie.

// Get nouns and verbs
// Nouns: player, move, rule
// Verbs: choose, compare

// Associate nouns and verbs
// Player: choose
// Move:   ?
// Rule:   ?
// ???:    Compare


function createPlayer() {
  const newPlayer = {
    // possible state: player name?
    // possible state: player's current move?

    choose() {/*Not yet implemented*/},
  };

  return newPlayer;
}

let compare = function(move1, move2) {/*...*/};

RPSGame.play();

const RPSGame = {
  human: createPlayer(),
  computer: createPlayer(),

  play() {
    displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    displayGoodbyeMessage();
  },
};