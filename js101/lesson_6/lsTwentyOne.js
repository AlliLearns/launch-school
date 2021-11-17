// Launch School's solution for the 21 game. 

const readLine = require('readline-sync');

const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1));
    [array[first], array[second]] = [array[second], array[first]];
  }

  return array;
}

function initializeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}

function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0; 
  values.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // Correct for Aces
  values.filter(value => value === 'A').forEach(_ => {
    if (sum > 21) sum -= 10;
    // Won't this give a value of 2 instead of 12 for 
    // drawing 2 aces initially? 
    // ...It takes off just one 10. 
    // I see. If more than one ace, only one will be 11. 
    // Any more than that and you'd lose. 
    // It takes advantage of 11 * 2 = 22.
    // All but the last iteration pass the if. 
  });

  return sum;
}

function busted(cards) {
  return total(cards) > 21;
}

function detectResult(dealerCards, playerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > 21) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > 21) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResults(dealerCards, playerCards) {
  let result = detectResult(dealerCards, playerCards);

  switch (result) {
    case 'PLAYER_BUSTED': 
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED': 
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER': 
      prompt('You win!');
      break;
    case 'DEALER': 
      prompt('Dealer wins!')
      break;
    case 'TIE': 
      prompt("It's a tie!");
  }
}

function playAgain() {
  console.log(`----------------------`);
  prompt('Do you want to play again? (y or n)');
  let answer = readLine.question();
  return answer.toLowerCase()[0] === 'y';
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}

while (true) {
  prompt ('Welcome to Twenty-One!');

  let deck = initializeDeck();
  let playerCards = [];
  let dealerCards = [];

  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));

  prompt(`Dealer has ${dealerCards[0]} and ?`);
  prompt(`You have ${playerCards[0]} and ${playerCards[1]} for a total of ${total(playerCards)}.`);

  // player turn
  while (true) {
    let playerTurn;
    while (true) {
      prompt(`Would you like to (h)it or (s)tay?`);
      playerTurn = readLine.question().toLowerCase();
      if (['h', 's'].includes(playerTurn)) break;
      prompt("Sorry, must enter 'h or 's'");
    }

    if (playerTurn === 'h') {
      playerCards.push(deck.pop());
      prompt(`You chose hit!`);
      prompt(`Your cards are now: ${hand(playerCards)}`);
      prompt(`Your total is now: ${total(playerCards)}`);
    }

    if (playerTurn === 's' || busted(playerCards)) break;
  }

  if (busted(playerCards)) {
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${total(playerCards)}`);
  }

  // dealer turn
  prompt(`Dealer turn...`);

  while (total(dealerCards) < 17) {
    prompt(`Dealer hits!`);
    dealerCards.push(deck.pop());
    prompt(`Dealer's cards are now: ${hand(dealerCards)}`);
  }

  if (busted(dealerCards)) {
    prompt(`Dealer total is now: ${total(dealerCards)}`);
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stays at ${total(dealerCards)}`);
  }


  // both player and dealer stays - compare cards
  console.log('==============');
  prompt(`Dealer has ${dealerCards}, for a total of: ${total(dealerCards)}`);
  prompt(`Player has ${playerCards}, for a total of: ${total(playerCards)}`);
  console.log('==============');

  displayResults(dealerCards, playerCards);

  if (!playAgain()) break;
}