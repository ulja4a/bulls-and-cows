import { generateSecret } from './game/generateSecret';
import { isValidGuess } from './game/isValidGuess';
import { evaluateGuess } from './game/evaluateGuess';
import { createDigitValidator } from './game/createDigitValidator';

const gameName: string = 'Bulls and Cows';

const app = document.createElement('div');
app.id = 'app';
document.body.append(app);

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

const baseSelect = document.createElement('select');
const binaryOption = document.createElement('option');
binaryOption.value = '2';
binaryOption.textContent = 'bin';

const octalOption = document.createElement('option');
octalOption.value = '8';
octalOption.textContent = 'oct';

const decimalOption = document.createElement('option');
decimalOption.value = '10';
decimalOption.textContent = 'dec';

const hexOption = document.createElement('option');
hexOption.value = '16';
hexOption.textContent = 'hex';

baseSelect.addEventListener('change', () => {
  const selectedBase = Number(baseSelect.value);

  Array.from(lengthSelect.options).forEach((option) => {
    option.disabled = Number(option.value) > selectedBase;
  });
  if (Number(lengthSelect.value) > selectedBase) {
    lengthSelect.value = '2';
  }
});

baseSelect.append(binaryOption, octalOption, decimalOption, hexOption);
baseSelect.value = '10';

const newGameButton = document.createElement('button');
newGameButton.textContent = 'New Game';

const startButton = document.createElement('button');
startButton.textContent = 'Start Game';

const guessInput = document.createElement('input');
guessInput.placeholder = 'Enter your guess';

const checkButton = document.createElement('button');
checkButton.textContent = 'Check Guess';

const message = document.createElement('p');
const history = document.createElement('div');
const attemptsDisplay = document.createElement('p');
attemptsDisplay.textContent = 'Attempts: 0';

app?.append(
  title,
  description,
  lengthSelect,
  baseSelect,
  startButton,
  newGameButton,
  guessInput,
  checkButton,
  message,
  attemptsDisplay,
  history,
);

let secret = '';
let isGameOver = false;
let currentLength = 4;
let currentBase = 10;
const guesses = new Set<string>();
let attempts = 0;
startButton.addEventListener('click', () => {
  guessInput.value = '';
  message.textContent = '';
  history.textContent = '';
  guesses.clear();
  attempts = 0;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  currentLength = Number(lengthSelect.value);
  currentBase = Number(baseSelect.value);
  secret = generateSecret(currentLength, currentBase);
  lengthSelect.disabled = true;
  baseSelect.disabled = true;
  startButton.disabled = true;
  isGameOver = false;
  console.log(secret);
});

newGameButton.addEventListener('click', () => {
  lengthSelect.disabled = false;
  baseSelect.disabled = false;
  secret = '';
  guessInput.value = '';
  message.textContent = '';
  history.textContent = '';
  startButton.disabled = false;
});

guessInput.addEventListener('input', () => {
  message.textContent = '';
  const validateDigit = createDigitValidator(currentBase);
  const digits = guessInput.value.split('');
  const validDigits = digits.filter(validateDigit);
  const filteredGuess = validDigits.join('');
  guessInput.value = filteredGuess.toUpperCase();
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
  if (guesses.has(guess)) {
    message.textContent = 'You already tried this guess!';
    return;
  }
  const isValid = isValidGuess(guess, currentLength, currentBase);

  if (isValid === false) {
    message.textContent = 'Invalid guess!';
  } else {
    guesses.add(guess);
    attempts += 1;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
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
