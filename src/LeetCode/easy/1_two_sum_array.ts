/*
 **Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 ** You may assume that each input would have exactly one solution, and you may not use the same element twice.**
 ** You can return the answer in any order.
 **
 */
/*
 **  [1,2,4] result =5
 ** index 1 =
 **
 */
function twoSum(nums: number[], target: number): number[] {
  for (let index = 0; index < nums.length; index++) {
    console.log(`index: ${index}`);
    for (let pointer = index + 1; pointer < nums.length; pointer++) {
      console.log(`pointer: ${pointer}`);
      if (nums[index]! + nums[pointer]! === target) {
        return [index, pointer];
      }
    }
  }
  return [];
}

function twoSumUsingMap(nums: readonly number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const compliment = target - current!;

    if (map.has(compliment)) {
      return [map.get(compliment)!, i];
    }
    map.set(current!, i);
  }

  return [];
}

console.log(twoSumUsingMap([1, 2, 4], 5));

console.log(twoSumUsingMap([1, 2, 4, 17, 78, 170], 18));
