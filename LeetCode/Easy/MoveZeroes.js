/**
 * 283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let nums = [1, 3, 6, 0, 4, 2, 1, 0];
var moveZeroes = function(nums) {
  let insertPos = 0;

  // move non-zero elements forward
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  // fill remaining positions with 0
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }

  console.log(nums);
};