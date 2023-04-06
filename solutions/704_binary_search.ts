function search(nums: number[], target: number): number {
  let index = -1;
  nums.forEach((num, i) => {
    if (num === target) {
      index = i;
    }
  });
  return index;
}
