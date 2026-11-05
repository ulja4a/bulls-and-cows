import { describe, expect, it } from 'vitest';
import { isValidGuess } from './isValidGuess';

describe('isValidGuess', () => {
  it('returns true for a valid guess', () => {
    const result = isValidGuess('1234', 4, 10);

    expect(result).toBe(true);
  });
});
