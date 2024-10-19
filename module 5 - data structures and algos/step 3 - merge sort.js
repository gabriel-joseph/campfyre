function merge(left, right) {
    let startIndexLeft = 0
    let startIndexRight = 0
    let mergedSortedArray = []
    
    while (startIndexLeft < left.length && startIndexRight < right.length) {
        if (left[startIndexLeft] < right[startIndexRight]) {
            mergedSortedArray.push(left[startIndexLeft])
            startIndexLeft++
        } else {
            mergedSortedArray.push(right[startIndexRight])
            startIndexRight++
        }
    }

    const rightLeftovers = right.slice(startIndexRight)
    const leftLeftovers = left.slice(startIndexLeft)
    const leftovers = rightLeftovers.concat(leftLeftovers)
    return mergedSortedArray.concat(leftovers)

}


function mergeSort(arr) {
  const length = arr.length;
  if (length <= 1) {
    return arr;
  }

  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
    const right = arr.slice(middle);
 
  return merge(mergeSort(left),mergeSort(right))
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
