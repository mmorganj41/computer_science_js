function binarySearch(arr, element) {
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found

    let start = 0;
    let end = arr.length - 1;

    while (true) {
        console.log(start, end);
        let midpoint = Math.floor((end - start) / 2) + start;
        console.log(midpoint);
        if (arr[midpoint] === element) {
            return midpoint;
        } else if (start >= end) {
            return -1;
        } else if (arr[midpoint] > element) {
            end = midpoint - 1;
        } else if (arr[midpoint] < element) {
            start = midpoint + 1;
        }
    }

}

function recursiveBinarySearch(arr, element) {
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    if (arr.length === 0) return -1;
    if (arr.length === 1) {
        if (arr[0] === element) {
            return 0
        } else {
            return -1
        }
    }

    let midpoint = Math.floor(arr.length - 1 / 2);

    if (arr[midpoint] === element) {
        return midpoint;
    } else if (arr[midpoint] > element) {
        const result = recursiveBinarySearch(arr.slice(0, midpoint), element);
        if (result === -1) return -1;
        return result;
    } else if (arr[midpoint < element]) {
        const result = recursiveBinarySearch(arr.slice(midpoint + 1, arr.length), element);
        if (result === -1) return -1;
        return result + midpoint + 1;
    }

    return -1;

}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}