function subtractProductAndSum(n: number): number {
  let sum = 0;
  let mult = 1;

  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    sum += digit;
    mult *= digit;
  }
  return mult - sum;
}
