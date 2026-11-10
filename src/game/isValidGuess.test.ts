import { describe, expect, it } from 'vitest';
import { isValidGuess } from './isValidGuess';

describe('isValidGuess', () => {
  it('returns true for a valid guess', () => {
    const result = isValidGuess('1234', 4, 10);

    expect(result).toBe(true);
  });

  it('returns false when guess length is incorrect', () => {
    const result = isValidGuess('123', 4, 10);

    expect(result).toBe(false);
  });

  it('returns false when digits are repeated', () => {
    const result = isValidGuess('1123', 4, 10);

    expect(result).toBe(false);
  });

  it('returns false when guess contains invalid digits', () => {
    const result = isValidGuess('12A4', 4, 10);

    expect(result).toBe(false);
  });

  it('returns true for valid hexadecimal digits', () => {
    const result = isValidGuess('12AF', 4, 16);

    expect(result).toBe(true);
  });

  it('returns false for invalid binary digits', () => {
    const result = isValidGuess('02', 2, 2);

    expect(result).toBe(false);
  });

  it('rejects duplicate hexadecimal digits with different cases', () => {
    const result = isValidGuess('aA12', 4, 16);

    expect(result).toBe(false);
  });
});
