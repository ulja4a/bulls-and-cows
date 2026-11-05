import { describe, expect, it } from 'vitest';
import { evaluateGuess } from './evaluateGuess';

describe('evaluateGuess', () => {
  it('counts bulls when digits are in the correct positions', () => {
    const result = evaluateGuess('1234', '1536');

    expect(result).toEqual({ bulls: 2, cows: 0 });
  });
});
