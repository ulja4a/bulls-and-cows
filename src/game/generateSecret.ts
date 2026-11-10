export function generateSecret(
  length: number,
  base: number,
  random: () => number = Math.random,
): string {
  const digits = '0123456789ABCDEF';
  const availableDigits = digits.slice(0, base);
  const pool = availableDigits.split('');
  let secret = '';
  for (let i = 0; i < length; i += 1) {
    const index = Math.floor(random() * pool.length);
    const selected = pool.splice(index, 1);
    secret += selected[0];
  }
  return secret;
}
