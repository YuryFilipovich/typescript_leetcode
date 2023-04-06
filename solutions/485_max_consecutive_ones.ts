function findMaxConsecutiveOnes(nums: number[]): number {
  let maxCount = 0;
  let count = 0;

  nums.forEach((num) => {
    if (num === 1) {
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 0;
    }
  });

  return maxCount;
}
