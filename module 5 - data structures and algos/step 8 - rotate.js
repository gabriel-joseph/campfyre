/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]


var rotate = function(nums, k) {
    // const hashMap = {}
    const head = nums.slice(-k)
    const tail = nums.slice(0,-k)
    console.log(head)
    console.log(tail)

    for (let i = 0; i < nums.length;i++){
        nums[i]= head[i]
    }

    for (let i = k; i < tail.length;i++){
        nums[i]= tail[i]
    }
    
    return head.concat(tail)
};


let list = [-1, -100, 3, 99]
let k = 2

list = rotate(list, k)
console.log(list)