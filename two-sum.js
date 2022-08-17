// optimize: use a hashmap

// https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const elementI = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const elementJ = nums[j];
      if (elementI + elementJ === target) {
        return [i,j]
      }
    }
  }
};

// const nums = [3,2,4];
// const target = 6;
const nums = [3,3];
const target = 6;
// const nums = [2, 7, 11, 15];
// const target = 9;
const res = twoSum(nums, target);
console.log(res); // [0, 1]
