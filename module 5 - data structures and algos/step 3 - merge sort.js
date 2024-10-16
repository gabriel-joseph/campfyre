// Merge function to merge two sorted arrays
function merge(left, right) {
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Log the left and right arrays before merging
    console.log(`Merging left: [${left}] and right: [${right}]`);
    //[5]
    // leftIndex = 1
    // rightIndex = 1

    // Merge the two arrays into one sorted array
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        sortedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        sortedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Log the sorted portion before concatenating remaining elements
    console.log(`Partially merged array: [${sortedArray}]`);
  
    // Correctly track the remaining elements in both left and right arrays
    const leftLeftovers = left.slice(leftIndex);
    const rightLeftovers = right.slice(rightIndex);
    
    // Concat remaining elements from left or right
    const leftovers = leftLeftovers.concat(rightLeftovers);
    
    const finalArray = sortedArray.concat(leftovers);
  
    // Log the fully merged result
    console.log(`Final merged array: [${finalArray}]`);
  
    return finalArray;
  }
  

// Merge Sort function using divide and conquer
function mergeSort(arr) {
  // Base case: an array with one or no elements is already sorted
  if (arr.length <= 1) {
    console.log(`Base case reached with array: [${arr}]`);
    return arr;
  }

  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Log the current array and its division into two parts
  console.log(
    `Dividing array: [${arr}] into left: [${left}] and right: [${right}]`
  );

    // [5,100,990],[7,19,20]
    // [5],[990,100] -> merge queded
    // 990, 100 -> [100,990]
  // Recursively sort both halves, then merge them
  return merge(mergeSort(left), mergeSort(right));
}


// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Initial array:", array);
const sortedArray = mergeSort(array);
console.log("Sorted array:", sortedArray);

//   Initial array: [
//     38, 27, 43, 3,
//      9, 82, 10
//   ]
//   Dividing array: [38,27,43,3,9,82,10] into left: [38,27,43] and right: [3,9,82,10]
//   Dividing array: [38,27,43] into left: [38] and right: [27,43]
//   Base case reached with array: [38]
//   Dividing array: [27,43] into left: [27] and right: [43]
//   Base case reached with array: [27]
//   Base case reached with array: [43]
//   Merging left: [27] and right: [43]
//   Partially merged array: [27]
//   Final merged array: [27,43]
//   Merging left: [38] and right: [27,43]
//   Partially merged array: [27,38]
//   Final merged array: [27,38,43]
//   Dividing array: [3,9,82,10] into left: [3,9] and right: [82,10]
//   Dividing array: [3,9] into left: [3] and right: [9]
//   Base case reached with array: [3]
//   Base case reached with array: [9]
//   Merging left: [3] and right: [9]
//   Partially merged array: [3]
//   Final merged array: [3,9]
//   Dividing array: [82,10] into left: [82] and right: [10]
//   Base case reached with array: [82]
//   Base case reached with array: [10]
//   Merging left: [82] and right: [10]
//   Partially merged array: [10]
//   Final merged array: [10,82]
//   Merging left: [3,9] and right: [10,82]
//   Partially merged array: [3,9]
//   Final merged array: [3,9,10,82]
//   Merging left: [27,38,43] and right: [3,9,10,82]
//   Partially merged array: [3,9,10,27,38,43]
//   Final merged array: [3,9,10,27,38,43,82]
//   Sorted array: [
//      3,  9, 10, 27,
//     38, 43, 82
//   ]
