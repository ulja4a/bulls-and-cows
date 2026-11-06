import { describe, expect, it } from 'vitest';
import { countPossibleSecrets } from './countPossibleSecrets';

describe('countPossibleSecrets', () => {
  it('counts possible secrets without repeated digits', () => {
    expect(countPossibleSecrets(2, 4)).toBe(12);
  });

  it('counts possible secrets with three digits', () => {
    expect(countPossibleSecrets(3, 5)).toBe(60);
  });

  it('counts secrets when length equals base', () => {
    expect(countPossibleSecrets(4, 4)).toBe(24);
  });

  it('returns 1 when length is 0', () => {
    expect(countPossibleSecrets(0, 5)).toBe(1);
  });

  it('returns 0 when length exceeds base', () => {
    expect(countPossibleSecrets(3, 2)).toBe(0);
  });
});
