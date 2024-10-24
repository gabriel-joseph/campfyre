function merge(nums1, m, nums2, n) {
  let pointer1 = m - 1;
  let pointer2 = n - 1;
  let totalIndex = nums1.length -1;

  while (pointer1 >= 0 && pointer2 >= 0) {
    // if we hit here it means there is at least 1 element in the list 
    if (nums1[pointer1] > nums2[pointer2]) {
      nums1[totalIndex] = nums1[pointer1];
      pointer1--;
    } else {
      nums1[totalIndex] = nums2[pointer2];
      pointer2--;
    }
    totalIndex--;
  }

  while (pointer2 >= 0) {
    nums1[totalIndex] = nums2[pointer2];
    pointer2--;
    totalIndex--;
  }
}

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
