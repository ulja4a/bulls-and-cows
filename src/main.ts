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

const newGameButton = document.createElement('button');
newGameButton.textContent = 'New Game';

const guessInput = document.createElement('input');
guessInput.placeholder = 'Enter your guess';

const checkButton = document.createElement('button');
checkButton.textContent = 'Check Guess';

const message = document.createElement('p');

app?.append(title, description, newGameButton, guessInput, checkButton, message);

let secret = '';
let isGameOver = false;
newGameButton.addEventListener('click', () => {
  guessInput.value = '';
  message.textContent = '';
  secret = generateSecret(4, 10);
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
  const isValid = isValidGuess(guess, 4, 10);

  if (isValid === false) {
    message.textContent = 'Invalid guess!';
  } else {
    const result = evaluateGuess(secret, guess);

    if (result.bulls === 4) {
      message.textContent = 'You win!';
      isGameOver = true;
    } else {
      message.textContent = `Bulls: ${result.bulls}, Cows: ${result.cows}`;
    }
  }
});
