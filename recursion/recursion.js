function sumArrayOfNums(arr, index = 0, sum = 0) {
    if (index === arr.length) {
        return sum;
    }
    sum += arr[index];
    return sumArrayOfNums(arr, index + 1, sum);
}

console.log(sumArrayOfNums([2, 4, 5, 8]));