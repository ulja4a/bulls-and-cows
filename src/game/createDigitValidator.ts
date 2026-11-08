export function createDigitValidator(base: number) {
  const digits = '0123456789ABCDEF';
  const allowedDigits = digits.slice(0, base);

  return (digit: string): boolean => {
    return allowedDigits.includes(digit.toUpperCase());
  };
}
