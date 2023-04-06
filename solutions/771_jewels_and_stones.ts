function numJewelsInStones(jewels: string, stones: string): number {
  let jewelsCount = jewels.split('');
  let stonesCount = stones.split('');

  let count = 0;

  for (let i = 0; i < jewelsCount.length; i++) {
    for (let j = 0; j < stonesCount.length; j++) {
      if (jewelsCount[i] === stonesCount[j]) {
        count++;
      }
    }
  }
  return count;
}
