function twoSum(nums: number[], target: number): number[] {
  const indices = new Map();
  let result = [];

  nums.forEach((num, index) => {
    const complement = target - num;

    if (indices.has(complement)) {
      result = [indices.get(complement), index];
      return;
    }

    indices.set(num, index);
  });

  return result;
}
