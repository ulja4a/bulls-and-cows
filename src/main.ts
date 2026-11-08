import { generateSecret } from './game/generateSecret';
import { isValidGuess } from './game/isValidGuess';
import { evaluateGuess } from './game/evaluateGuess';

const gameName: string = 'Bulls and Cows';

console.log(gameName);

const app = document.querySelector('#app');

const title = document.createElement('h1');
title.textContent = gameName;

const description = document.createElement('p');
description.textContent = 'Guess the secret number!';

const lengthSelect = document.createElement('select');

for (let length = 2; length <= 6; length += 1) {
  const lengthOption = document.createElement('option');

  lengthOption.value = String(length);
  lengthOption.textContent = String(length);

  lengthSelect.appendChild(lengthOption);
}
lengthSelect.value = '4';

const newGameButton = document.createElement('button');
newGameButton.textContent = 'New Game';

const guessInput = document.createElement('input');
guessInput.placeholder = 'Enter your guess';

const checkButton = document.createElement('button');
checkButton.textContent = 'Check Guess';

const message = document.createElement('p');
const history = document.createElement('div');

app?.append(
  title,
  description,
  lengthSelect,
  newGameButton,
  guessInput,
  checkButton,
  message,
  history,
);

let secret = '';
let isGameOver = false;
let currentLength = 4;
newGameButton.addEventListener('click', () => {
  guessInput.value = '';
  message.textContent = '';
  history.textContent = '';
  currentLength = Number(lengthSelect.value);
  secret = generateSecret(currentLength, 10);
  isGameOver = false;
  console.log(secret);
});

guessInput.addEventListener('input', () => {
  message.textContent = '';
});

checkButton.addEventListener('click', () => {
  if (secret === '') {
    message.textContent = 'Start a new game first!';
    return;
  }

  if (isGameOver === true) {
    message.textContent = 'Game over! Start a new game.';
    return;
  }

  const guess = guessInput.value;
  const isValid = isValidGuess(guess, currentLength, 10);

  if (isValid === false) {
    message.textContent = 'Invalid guess!';
  } else {
    const result = evaluateGuess(secret, guess);
    const historyItem = document.createElement('p');
    historyItem.textContent = `Guess: ${guess}, Bulls: ${result.bulls}, Cows: ${result.cows}`;
    history.appendChild(historyItem);

    if (result.bulls === currentLength) {
      message.textContent = 'You win!';
      isGameOver = true;
    } else {
      message.textContent = `Bulls: ${result.bulls}, Cows: ${result.cows}`;
    }
  }
});
