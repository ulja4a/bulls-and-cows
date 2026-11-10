import { createDigitValidator } from './createDigitValidator';

export function isValidGuess(guess: string, length: number, base: number): boolean {
  if (guess.length !== length) {
    return false;
  }

  const validDigits = guess.split('').every(createDigitValidator(base));

  if (validDigits === false) {
    return false;
  }

  const guessDigits = guess.toUpperCase().split('');
  const uniqueDigits = new Set(guessDigits);
  if (uniqueDigits.size !== guessDigits.length) {
    return false;
  }
  return true;
}
