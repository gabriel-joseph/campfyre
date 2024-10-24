function merge(left, right) {
  let sortedMerged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sortedMerged.push(left[leftIndex]);
      leftIndex++;
    } else {
      sortedMerged.push(right[rightIndex]);
      rightIndex++;
    }

  }

    const leftLeftovers = left.slice(leftIndex);
    const rightLeftovers = right.slice(rightIndex);
    const leftovers = leftLeftovers.concat(rightLeftovers);
    return sortedMerged.concat(leftovers);
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // console.log(right);
  return merge(mergeSort(left), mergeSort(right));
}

// console.log(mergeSort([22, 3, 1, 7, 99, 100]));
console.log(mergeSort([22, 3, 1, 7, 99, 100]));
// mergeSort -> [22, 3, 1] [7, 99, 100]
//   mergeSort -> [22], [3, 1]
//     mergeSort -> [3],[1]
