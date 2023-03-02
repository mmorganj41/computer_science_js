function quickSort(arr) {
  // YOUR CODE HERE
  if (arr.length <= 1) return arr;

  const less = [];
  const pivot = arr[0];
  const greater = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

module.exports = quickSort;