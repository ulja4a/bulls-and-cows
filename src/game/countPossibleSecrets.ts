const cache = new Map<string, number>();

export function countPossibleSecrets(length: number, base: number): number {
  if (length === 0) {
    return 1;
  }

  const key = `${length}-${base}`;

  if (cache.has(key)) {
    return cache.get(key)!;
  }

  const result = base * countPossibleSecrets(length - 1, base - 1);
  cache.set(key, result);
  return result;
}
