// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in -place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Then return the number of unique elements in nums.

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let k = 1; // this is the key difference
  for (let i = 1; i < nums.length ; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

