import { describe, expect, it } from 'vitest';
import { generateSecret } from './generateSecret';

describe('generateSecret', () => {
  it('generates a secret with the requested length', () => {
    const secret = generateSecret(4, 10);

    expect(secret).toHaveLength(4);
  });

  it('generates unique digits', () => {
    const secret = generateSecret(4, 10);
    const uniqueDigits = new Set(secret);

    expect(uniqueDigits.size).toBe(4);
  });

  it('generates only valid digits for binary base', () => {
    const secret = generateSecret(2, 2);

    expect(secret).toMatch(/^[01]{2}$/);
  });

  it('uses the provided random function', () => {
    const random = () => 0;
    const secret = generateSecret(3, 10, random);

    expect(secret).toBe('012');
  });

  it('generates hexadecimal digits', () => {
    const random = () => 0.99;
    const secret = generateSecret(3, 16, random);

    expect(secret).toBe('FED');
  });
});
