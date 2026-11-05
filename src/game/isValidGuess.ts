export function isValidGuess(guess: string, length: number, base: number): boolean {
  if (guess.length !== length) {
    return false;
  }

  const digits = '0123456789ABCDEF';
  const allowedDigits = digits.slice(0, base);
  const validDigits = guess.split('').every((digit) => {
    return allowedDigits.includes(digit);
  });

  if (validDigits === false) {
    return false;
  }

  const guessDigits = guess.split('');
  const uniqueDigits = new Set(guessDigits);
  if (uniqueDigits.size !== guessDigits.length) {
    return false;
  }
  return true;
}
