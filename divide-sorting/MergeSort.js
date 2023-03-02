function mergeSort(arr) {
  // YOUR CODE HERE
  if (arr.length === 0) return;
  if (arr.length === 1) return arr;


  const half1 = mergeSort(arr.slice(0, Math.ceil(arr.length / 2)));
  const half2 = mergeSort(arr.slice(Math.ceil(arr.length / 2)));

  return merge(half1, half2);
}

// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}


console.log(mergeSort([1, 2, 5, 4, 6, 2, 3]))
module.exports = mergeSort;
