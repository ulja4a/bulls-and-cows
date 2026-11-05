import { describe, expect, it } from 'vitest';
import { generateSecret } from './generateSecret';

describe('generateSecret', () => {
  it('generates a secret with the requested length', () => {
    const secret = generateSecret(4, 10);

    expect(secret).toHaveLength(4);
  });
});
