const readLine = require('readline-sync');

const ACE   = 11;
const JACK  = 10;
const QUEEN = 10;
const KING  = 10;

const SUIT_TYPES = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const SUIT = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'JACK', 'QUEEN', 'KING', 'ACE'];

const MAX_SUM = 21;
const DEALER_MAX = 17;

const WIN = 'win';
const BUST = 'bust';
const TIE = 'tie';
const NO_RESULT = '';

const PLAYER = 'Player';
const DEALER = 'Dealer';

tests();

function tests() {
  // const testDeck = initDeck();
  // const [playerHand, dealerHand] = dealHands(testDeck);

  // const dummyHandAce = [['ACE', 'Clubs'], ['ACE', 'Spades']];
  // const dummyHandCourt = [['JACK', 'Spades'], ['QUEEN', 'Clubs'], ['KING', 'Diamonds']]

  // console.log(buildCardValueArray(dummyHandCourt));
  // console.log(sumHand(dummyHandCourt));

  // reportHand(playerHand, PLAYER);
  // reportHand(dealerHand, DEALER);

  // playRound()

  // runDealerTurn(dealerHand, testDeck);


  // const playerBust = [BUST, PLAYER];
  // const dealerBust = [BUST, DEALER];
  // const playerWin = [WIN, PLAYER];
  // const dealerWin = [WIN, DEALER];
  // const tie = [TIE];
  // console.log(formulateWinningMessage(playerBust));
  // console.log(formulateWinningMessage(dealerBust));
  // console.log(formulateWinningMessage(playerWin));
  // console.log(formulateWinningMessage(dealerWin));
  // console.log(formulateWinningMessage(tie));
}

greetUser();
runGame();
farewellUser();

function greetUser() {
  printHeader(`Welcome to Twenty-One!`);
  waitForUser(`${drawPrompt()} Hit 'enter' to play.`);
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
    console.clear();

    const roundResult = playRound();
    printWinningMessage(roundResult);

    playAgain = shouldGoAgain("Play again?");

  } while (playAgain);
}



function playRound() {
  const deck = initDeck();
  const [playerHand, dealerHand] = dealHands(deck);

  const knownDealerCard = generateKnownDealerCard(dealerHand);

  reportKnownDealerHand(knownDealerCard);
  reportHand(playerHand, PLAYER);

  runPlayerTurn(playerHand, deck);
  if (winOrBust(playerHand)) {
    return roundResult(playerHand, dealerHand);
  }

  runDealerTurn(dealerHand, deck);
  return roundResult(playerHand, dealerHand);
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
    drawCard(playerHand, deck);
    drawCard(dealerHand, deck);
  }

  return [playerHand, dealerHand];
}

function drawCard(hand, deck) {
  hand.push(removeRandomCard(deck));
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

// function reportHands(playerHand, dealerHand) {
//   reportHand(playerHand);
//   reportHand(dealerHand);
// }

function reportKnownDealerHand(knownDealerCard) {
  const [cardValue, cardName] = knownDealerCard;
  informUser(`The dealer has a ${cardValue} of ${cardName}.\n`);
}

function reportHand(hand, user) {
  let handStr = '';

  hand.forEach(card => {
    const [cardValue, cardName] = card;
    handStr += `\n${drawPrompt()}   ${cardValue} of ${cardName}.`;
  });

  const sum = sumHand(hand);

  informUser(`${user}'s hand is: ${handStr}\n` +
             `${drawPrompt()} For a current sum of: ${sum}\n`);
}

function sumHand(hand) {
  const cardValues = buildCardValueArray(hand);
  let sum = cardValues.reduce((sum, next) => sum + next, 0);
  sum += handleAces(cardValues, sum);

  return sum;
}

function buildCardValueArray(hand) {
  return hand.map(card => {
    const val = card[0];
    if (typeof val === 'string') return retrieveCardValue(val);
    return val;
  })
}

function retrieveCardValue(card) {
  switch (card) {
    case 'JACK':  return JACK;
    case 'QUEEN': return QUEEN;
    case 'KING':  return KING;
    case 'ACE':   return ACE;
    default:      return `Invalid card`; // check spelling in your SUIT array. 
  }
}

function handleAces(hand, sum) {
  const retractValue = 10;
  let result = 0;
  hand.filter(val => val === ACE).forEach(_ => {
    if (sum > MAX_SUM) {
      sum -= retractValue;
      result -= retractValue;
    }
  });

  // Should be 0 or negative.
  return result;
}

function runPlayerTurn(hand, deck) { 
  informUser(`${PLAYER}'s turn.`);

  do {
    const hitAgain = askHitOrStay();
    if (!hitAgain) break;

    informUser(`${PLAYER} hits.\n`);
    drawCard(hand, deck);
    reportHand(hand, PLAYER);

    if (winOrBust(hand)) break;

  } while (true)

  informUser(`${PLAYER} has decided to stay.\n`);
}

function askHitOrStay() {
    let hitAgain = getUserInput("Hit or stay").toLowerCase();
    const acceptableAnswers = ['hit', 'h', 'stay', 's'];

    while (!validateAnswer(hitAgain, acceptableAnswers)) {
      hitAgain = getUserInput("Sorry, we need a 'hit' or 'stay' answer").toLowerCase();
    }

    return hitAgain[0] === 'h';
}

function winOrBust(hand) {
  const sum = sumHand(hand);

  if (checkWin(sum))  return true;
  if (checkBust(sum)) return true;
  return false;
}

function checkWin(sum) {
  return sum === MAX_SUM;
}

function checkBust(sum) {
  return sum > MAX_SUM;
}

function runDealerTurn(hand, deck) {
  informUser(`${DEALER}'s turn.`);

  let sum = sumHand(hand);

  while (sum <= DEALER_MAX) {
    informUser(`${DEALER} hits.\n`);
    drawCard(hand, deck);
    reportHand(hand, DEALER);
    sum = sumHand(hand);
  }
}

function roundResult(playerHand, dealerHand) {
  const playerTotal = sumHand(playerHand);
  const dealerTotal = sumHand(dealerHand);

  if (checkBust(playerTotal))     return [BUST, PLAYER];
  if (checkBust(dealerTotal))     return [BUST, DEALER];
  if (playerTotal < dealerTotal)  return [WIN, DEALER];
  if (playerTotal > dealerTotal)  return [WIN, PLAYER];
  return [TIE];
}

function printWinningMessage(resultArr) {
  const message = formulateWinningMessage(resultArr);
  informUser(message);
}

function formulateWinningMessage(resultArr) {
  const [outcome, player] = resultArr;

  let result = '';
  if (resultArr.length > 1) {
    result = `${outcome}${player}`;
  } else {
    result = outcome;
  }

  switch (result) {
    case TIE:           return `It's a tie!`;
    case BUST + PLAYER: return `You busted! Dealer wins!`;
    case BUST + DEALER: return `Dealer busted! You win!`;
    case WIN  + PLAYER: return `You win!`;
    case WIN  + DEALER: return `Dealer wins!`;
    default:            return `invalid result`;
  }
}

function shouldGoAgain(message) {
  let answer = getUserInput(`${message}`).toLowerCase();
  const acceptableAnswers = ['yes', 'y', 'yea', 'yep', 'yeah', 'no', 'n', 'nah', 'nope'];

  while (!validateAnswer(answer, acceptableAnswers)) {
    answer = getUserInput(`Type 'y' or 'n'`).toLowerCase();
  }

  return answer[0] !== 'n';
}

function validateAnswer(answer, acceptedAnswers) {
  return acceptedAnswers.includes(answer);
}

function getUserInput(message) {
  return readLine.question(`${drawPrompt()} ${message}: `);
}

function informUser(message) {
  console.log(`${drawPrompt()} ${message}`);
}

function drawPrompt() {
  return '=>';
}