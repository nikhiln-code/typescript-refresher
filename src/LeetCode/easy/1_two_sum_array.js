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
function twoSum(nums, target) {
    for (var index = 0; index < nums.length; index++) {
        console.log("index: ".concat(index));
        for (var pointer = index + 1; pointer < nums.length; pointer++) {
            console.log("pointer: ".concat(pointer));
            if (nums[index] + nums[pointer] === target) {
                return [index, pointer];
            }
        }
    }
    return [];
}
function twoSumUsingMap(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var current = nums[i];
        var compliment = target - current;
        if (map.has(compliment)) {
            return [map.get(compliment), i];
        }
        console.log("current: ".concat(current, ", compliment: ").concat(compliment));
        map.set(current, i);
    }
    return [];
}
console.log(twoSumUsingMap([1, 2, 4], 5));
console.log(twoSumUsingMap([1, 2, 4, 17, 78, 170], 18));
