import { describe, expect, it } from 'vitest';
import { createDigitValidator } from './createDigitValidator';

describe('createDigitValidator', () => {
  it('accepts valid binary digits', () => {
    const isBinaryDigit = createDigitValidator(2);

    expect(isBinaryDigit('0')).toBe(true);
    expect(isBinaryDigit('1')).toBe(true);
  });
});
