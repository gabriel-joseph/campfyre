function merge(nums1, m, nums2, n) {
    let p1 = m - 1;          // Pointer for nums1
    let p2 = n - 1;          // Pointer for nums2
    let p = m + n - 1;       // Pointer for the final position in nums1
  
    // While there are elements to compare
    while (p1 >= 0 && p2 >= 0) {
      // Place the larger of the two elements at the end of nums1
      if (nums1[p1] > nums2[p2]) {
        nums1[p] = nums1[p1];
        p1--;
      } else {
        nums1[p] = nums2[p2];
        p2--;
      }
      p--;
    }
  
    // If there are remaining elements in nums2, copy them
    // No need to copy nums1 elements since they are already in place
    while (p2 >= 0) {
      nums1[p] = nums2[p2];
      p2--;
      p--;
    }
  }
  
  // Example usage:
  let nums1 = [1, 2, 3, 0, 0, 0];
  let m = 3;
  let nums2 = [2, 5, 6];
  let n = 3;
  
  merge(nums1, m, nums2, n);
  console.log(nums1);  // Output: [1, 2, 2, 3, 5, 6]
  