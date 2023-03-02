const insertionSort = require('../basic_sorting/InsertionSort');

module.exports = bucketSort;

function bucketSort(arr) {
    // construct buckets
    const bucketNumber = Math.round(Math.sqrt(arr.length));
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const bucketRange = (max - min + 1) / bucketNumber;

    console.log(bucketNumber, max, min, bucketRange);
    const buckets = Array.from({ length: bucketNumber }, _ => new Array());

    // allocate into buckets
    for (const num of arr) {
        const bucketIndex = Math.floor((num - min) / bucketRange);
        console.log(bucketIndex);
        buckets[bucketIndex].push(num);
    }

    for (const bucket of buckets) {
        insertionSort(bucket);
    }
    return buckets.flat();
}