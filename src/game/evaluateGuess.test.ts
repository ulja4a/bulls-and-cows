import { describe, expect, it } from 'vitest';
import { evaluateGuess } from './evaluateGuess';

describe('evaluateGuess', () => {
  it('counts bulls when digits are in the correct positions', () => {
    const result = evaluateGuess('1234', '1536');

    expect(result).toEqual({ bulls: 2, cows: 0 });
  });

  it('counts both bulls and cows', () => {
    const result = evaluateGuess('1234', '1243');

    expect(result).toEqual({ bulls: 2, cows: 2 });
  });

  it('counts all bulls when the guess matches the secret', () => {
    const result = evaluateGuess('1234', '1234');

    expect(result).toEqual({ bulls: 4, cows: 0 });
  });

  it('counts all cows when digits are in wrong positions', () => {
    const result = evaluateGuess('1234', '2143');

    expect(result).toEqual({ bulls: 0, cows: 4 });
  });

  it('returns zero when there are no matching digits', () => {
    const result = evaluateGuess('1234', '5678');

    expect(result).toEqual({ bulls: 0, cows: 0 });
  });

  it('counts cows when only some digits match', () => {
    const result = evaluateGuess('1234', '3456');

    expect(result).toEqual({ bulls: 0, cows: 2 });
  });
});
