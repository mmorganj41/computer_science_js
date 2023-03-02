module.exports = [findMax, factorial, fibonacci, coinFlips, letterCombinations];

function findMax(array) {
    let index = 0;
    let max = array[0];

    return helperFindMax(index, max);

    function helperFindMax(index, max) {

        if (index >= array.length) return max;
        if (array[index] > max) max = array[index];

        return helperFindMax(index + 1, max);
    }
}

function factorial(n) {
    if (n <= 1) return n;

    return n * factorial(n - 1);

}

const dictionary = {
    1: 1,
    2: 1,
}

function fibonacci(n) {
    if (n in dictionary) return dictionary[n];

    let result = fibonacci(n - 1) + fibonacci(n - 2);
    dictionary[n] = result;

    return result;
}

function coinFlips(n) {
    let results = ['H', 'T'];
    if (n === 1) return results;

    let answer = [];
    for (let result of results) {
        answer = answer.concat(coinFlips(n - 1).map(e => e + result));
    }
    return answer;

    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations(a) {
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

    return helperCombination(0);

    function helperCombination(length) {
        if (length >= a.length - 1) return [...a];

        let combined = [];

        for (let char of a) {
            combined = combined.concat(helperCombination(length + 1).map(e => char + e));
        }

        return [...a, ...combined];
    }

}