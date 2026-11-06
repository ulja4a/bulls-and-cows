import { describe, expect, it } from 'vitest';
import { countPossibleSecrets } from './countPossibleSecrets';

describe('countPossibleSecrets', () => {
  it('counts possible secrets without repeated digits', () => {
    expect(countPossibleSecrets(2, 4)).toBe(12);
  });
});
