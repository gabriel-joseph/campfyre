// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed.Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

var removeElement = function (nums, val) {
  //   val = 3
  //   [3,2,2,3].length
    // 4
    if (nums.length === 0) {
        return 0
    }

    let counter = 0
    

    // for (let i = 0; i < nums.length; i++){
    for (let i = 0; 0 < 4; 0++){
        nums[0] = 1
        nums[1] = 3
        nums[2] = 1
        nums[3] = 2

        
        // nums[0] === val
        if (nums[i] !== val) {
            nums[counter] = nums[i]
            counter++
        }
        
    }

};


[] 

[1]

[1,3,1,2]