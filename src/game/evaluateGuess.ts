export function evaluateGuess(secret: string, guess: string) {
  const secretDigits = secret.split('');
  const guessDigits = guess.split('');
  const bulls = secretDigits.filter((digit, index) => {
    return digit === guessDigits[index];
  }).length;
  const cows = guessDigits.filter((digit, index) => {
    return secretDigits.includes(digit) && digit !== secretDigits[index];
  }).length;

  return { bulls, cows };
}
