const readLine = require('readline-sync');

const ACE   = 1;
const JACK  = 10;
const QUEEN = 10;
const KING  = 10;

const SUIT_TYPES = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const SUIT = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'JACK', 'QUEEN', 'KING', 'ACE'];

const WIN = 'win';
const BUST = 'bust';
const NO_RESULT = '';

const PLAYER = 'Player';
const DEALER = 'Dealer';

greetUser();
runGame();
farewellUser();

function greetUser() {
  printHeader("Welcome to Twenty-One!");
  waitForUser("Hit 'enter' to play.");
}

function farewellUser() {
  console.log(`\n`);
  printHeader("Thanks for playing!");
}

function printHeader(message) {
  const border = `-`.repeat(message.length);

  console.clear();
  console.log(border);
  console.log(message);
  console.log(border);
}

function waitForUser(message) {
  console.log(`\n`);
  readLine.question(message);
  console.clear();
}


function runGame() {
  let playAgain = false;

  do {
    runGameLoop();

    playAgain = shouldGoAgain("Play again?");

  } while (playAgain);
}



function runGameLoop() {
  const deck = initDeck();
  const [playerHand, dealerHand] = dealHands(deck);

  const knownDealerCard = generateKnownDealerCard(dealerHand);

  reportHands(playerHand, knownDealerCard);

  let result = runPlayerTurn(playerHand, deck);
  let player = PLAYER;

  if (result === NO_RESULT) {
    result = runDealerTurn(dealerHand, deck);
    player = DEALER;
  }

  // let winningMessage = generateWinner(result, player, playerHand, dealerHand);
  // console.log(winningMessage);
}


function initDeck() {
  const newDeck = new Array(SUIT_TYPES.length);

  for (let suit = 0; suit < SUIT_TYPES.length; suit++) {
    newDeck[suit] = SUIT.slice();
  }

  return newDeck;
}

function dealHands(deck) {
  const playerHand = [];
  const dealerHand = [];
  const HAND_SIZE = 2;

  for (let i = 0; i < HAND_SIZE; i++) {
    playerHand.push(removeRandomCard(deck));
    dealerHand.push(removeRandomCard(deck));
  }

  return [playerHand, dealerHand];
}

function removeRandomCard(deck) {
  const randomSuitIndex = Math.floor(Math.random() * SUIT_TYPES.length);
  const randomCardIndex = Math.floor(Math.random() * deck[randomSuitIndex].length);

  const randomCard = deck[randomSuitIndex].splice(randomCardIndex, 1);
  randomCard.push(SUIT_TYPES[randomSuitIndex]);

  return randomCard;
}

function generateKnownDealerCard(dealerHand) {
  const randomIndex = Math.floor(Math.random() * dealerHand.length);
  return dealerHand[randomIndex];
}

function reportHands(playerHand, knownDealerCard) {
  reportDealerHand(knownDealerCard);
  reportPlayerHand(playerHand);
}

function reportDealerHand(knownDealerCard) {
  const [cardValue, cardName] = knownDealerCard;
  console.log(`The dealer has a ${cardValue} of ${cardName}.`);
}

function reportPlayerHand(playerHand) {
  let handStr = '';

  for (let card = 0; card < playerHand.length; card++) {
    const currCard = playerHand[card];
    const [cardValue, cardName] = currCard;

    handStr += `\n  - ${cardValue} of ${cardName}.`;
  }

  const sum = sumHand(playerHand);

  console.log(`Your hand is: ${handStr}\n    For a current sum of: ${sum}`);
}

// Try again using ACE = 11 and arr.filter 
// instead of a manual filter for aces. 
function sumHand(hand) {
  const cardValues = buildCardValueArray(hand);
  const aces = [];
  let sum = 0;

  for (let i = 0; i < cardValues.length; i++) {
    if (cardValues[i] === 1) {
      aces.push(1);
      continue;
    }

    sum += cardValues[i];
  }

  sum += handleAces(sum, aces);

  return sum;
}

function buildCardValueArray(hand) {
  const cardValues = [];

  for (let card = 0; card < hand.length; card++) {
    let cardValue = hand[card][0];

    if (typeof cardValue === 'string') {
      cardValue = retrieveSpecialCardValue(cardValue);
    }

    cardValues.push(cardValue);
  }

  return cardValues;
}

function retrieveSpecialCardValue(card) {
  switch (card) {
    case 'JACK':  return JACK;
    case 'QUEEN': return QUEEN;
    case 'KING':  return KING;
    case 'ACE':   return ACE;
    default:      return 0; // check spelling in your SUIT array. 
                            // Consider changing the return type to highlight that there was a problem.
  }
}

function handleAces(sum, aces) {
  let result = 0;

  aces.forEach(() => {
    let val = oneOrEleven(sum);
    result += val;
    sum += val;
  });

  return result;
}

function oneOrEleven(sum) {
  const maxSum = 10;

  if (sum <= maxSum)  return 11;
  return 1;
}


function runPlayerTurn(hand, deck) { 
  let keepGoing = true;
  let result = NO_RESULT;

  result = checkForWinOrBust(hand);
  if (result !== '')  return result;

  do {
    let hitAgain = prompt("Hit or stay").toLowerCase();
    const acceptableAnswers = ['hit', 'h', 'stay', 's'];

    while (!validateAnswer(hitAgain, acceptableAnswers)) {
      hitAgain = prompt("Sorry, we need a 'hit' or 'stay' answer").toLowerCase();
    }

    if (hitAgain[0] === 'h') {
      hand.push(removeRandomCard(deck));
      reportPlayerHand(hand);

      result = checkForWinOrBust(hand);
      if (result !== '')  return result;
    } else {
      keepGoing = false;
    }
  } while (keepGoing);
}

function runDealerTurn(hand, deck) {
  let sum = sumHand(hand);
  const DEALER_MAX = 17;

  while (sum <= DEALER_MAX) {
    hand.push(removeRandomCard(deck));
    sum = sumHand(hand);
  }

  return checkForWinOrBust(hand);
}

function checkForWinOrBust(hand) {
  const sum = sumHand(hand);

  if (sum === 21) return WIN;
  if (sum > 21)   return BUST;
  return NO_RESULT;
}

function generateWinner(result, player, playerHand, dealerHand) {
  switch (result) {
    case WIN:   return `${player} won!`;
    case BUST:  return `${player} bust!`;
    default:    return decideWinner(playerHand, dealerHand);
  }
}

function decideWinner(playerHand, dealerHand) {
  const playerSum = sumHand(playerHand);
  const dealerSum = sumHand(dealerHand);

  if (playerSum > dealerSum) return `${PLAYER} won!`;
  return `${DEALER} won!`;
}

function shouldGoAgain(message) {
  let answer = prompt(`${message}`).toLowerCase();
  const acceptableAnswers = ['yes', 'y', 'yea', 'yep', 'yeah', 'no', 'n', 'nah', 'nope'];

  while (!validateAnswer(answer, acceptableAnswers)) {
    answer = prompt(`Type 'y' or 'n'`).toLowerCase();
  }

  return answer[0] !== 'n';
}


function validateAnswer(answer, acceptedAnswers) {
  return acceptedAnswers.includes(answer);
}

function prompt(message) {
  return readLine.question(`${drawPrompt()} ${message}: `);
}

function drawPrompt() {
  return '=>';
}




// Unnecessarily general. Keeping until first commit.
// Deck structures aren't gonna change any time soon.
// function initDeckSoft() {
//   const SUIT_TYPES.length = 4;
//   const CARDS_IN_SUIT = 13;
//   const SPECIAL_VALUES = [JACK, QUEEN, KING, ACE];
//   const FACE_CARD_COUNT = CARDS_IN_SUIT - SPECIAL_VALUES.length;

//   const newDeck = new Array(SUIT_TYPES.length);

//   for (let suit = 0; suit < SUIT_TYPES.length; suit++) {
//     newDeck[suit] = new Array(CARDS_IN_SUIT);

//     for (let card = 0; card < FACE_CARD_COUNT; card++) {
//       newDeck[suit][card] = card + 2;
//     }

//     for (let specialCard = FACE_CARD_COUNT;
//         specialCard < CARDS_IN_SUIT;
//         specialCard++) {
//           newDeck[suit][specialCard] = SPECIAL_VALUES[specialCard - FACE_CARD_COUNT];
//         }
//   }

//   return newDeck;
// }