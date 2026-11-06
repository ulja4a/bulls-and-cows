import { describe, expect, it } from 'vitest';
import { createDigitValidator } from './createDigitValidator';

describe('createDigitValidator', () => {
  it('accepts valid binary digits', () => {
    const isBinaryDigit = createDigitValidator(2);

    expect(isBinaryDigit('0')).toBe(true);
    expect(isBinaryDigit('1')).toBe(true);
  });

  it('rejects invalid binary digits', () => {
    const isBinaryDigit = createDigitValidator(2);

    expect(isBinaryDigit('2')).toBe(false);
    expect(isBinaryDigit('A')).toBe(false);
  });

  it('validates hexadecimal digits', () => {
    const isHexDigit = createDigitValidator(16);

    expect(isHexDigit('A')).toBe(true);
    expect(isHexDigit('F')).toBe(true);
    expect(isHexDigit('G')).toBe(false);
  });

  it('validates hexadecimal digits', () => {
    const isHexDigit = createDigitValidator(16);

    expect(isHexDigit('A')).toBe(true);
    expect(isHexDigit('F')).toBe(true);
    expect(isHexDigit('G')).toBe(false);
  });
});
