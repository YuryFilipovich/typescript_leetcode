function finalValueAfterOperations(operations: string[]): number {
  let x = 0;

  operations.forEach((sign) => {
    if (sign == '++X' || sign == 'X++') {
      x++;
    }

    if (sign == '--X' || sign == 'X--') {
      x--;
    }
  });

  return x;
}
