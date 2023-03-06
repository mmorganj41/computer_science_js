class trieNode {
    constructor(data, isWord = false) {
        this.data = data;
        this.isWord = isWord
        this.children = [];
    }
}

class wordTrie {
    constructor() {
        this.root = new trieNode("");
    }
    addWord(word) {
        // this method accepts a complete word in string format
        // it adds a node for each letter if that node doesn't already exist in the Trie
        // each letter should reference the next node in its children array
        word = word.toLowerCase();

        let node = this.root;
        for (const [index, letter] of Array.from(word).entries()) {
            let childIndex = letter.charCodeAt(0) - 97;

            if (node.children[childIndex]) {
                node = node.children[childIndex];
                if (index === word.length - 1) node.isWord = true;
            } else {
                const newNode = new trieNode(letter, index === word.length - 1);
                node.children[childIndex] = newNode;
                node = newNode;
            }
        }
    }
    isWord(word) {
        // this method accepts a string
        // return true if the string is a complete word
        // return false if the string is not a word
        word = word.toLowerCase();
        let node = this.root;
        console.log(word);

        for (const [index, letter] of Array.from(word).entries()) {
            let childIndex = letter.charCodeAt(0) - 97;

            if (!node.children[childIndex]) return false;

            node = node.children[childIndex];
            if (index === word.length - 1 && node.isWord) return true;
        }
        return false;
    }
    autoComplete(str) {
        // this method takes in a string representing what a user has typed so far
        // return an array of possible words that could complete the string given
        str = str.toLowerCase();

        let node = this.root;
        const output = [];

        for (const letter of str) {
            let childIndex = letter.charCodeAt(0) - 97;

            if (!node.children[childIndex]) return output;

            node = node.children[childIndex];
        }

        if (node.isWord) output.push(str);

        nextLetterHelper(node, str);

        return output;

        function nextLetterHelper(node, word) {
            for (const nextNode of node.children) {
                if (!nextNode) continue;
                let newWord = word + nextNode.data;
                if (nextNode.isWord) output.push(newWord);
                nextLetterHelper(nextNode, newWord);
            }
        }
    }
    bestWord(arrayOfLetters) {
        // this method accepts an array of single character letters
        // using the array, find the largest word in the Trie that uses the combination of letters in the given array
        // use only the letters in the array, i.e. if the array contains two 's' letters, the best word can only have two 's' letters total

        const possibleWords = [];

        letterHelper('', this.root, arrayOfLetters);

        return possibleWords.reduce((a, e) => {
            if (e.length > a.length) return e;

            return a;
        }
        );

        function letterHelper(str, node, array) {
            if (!array?.length) return;

            for (const [index, letter] of array.entries()) {
                const newNode = node.children[letter.charCodeAt(0) - 97];

                if (!newNode) continue;

                const newArray = [...array];
                newArray.splice(index, 1);
                const newStr = str + letter;

                if (newNode.isWord) possibleWords.push(newStr);

                letterHelper(newStr, newNode, newArray);
            }
        }
    }
}

// npm package for words found here: https://www.npmjs.com/package/word-list
const fs = require('fs');
const wordListPath = require('word-list');
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');

const theDictionary = new wordTrie();
// loop over wordArray and add each letter to theDictionary

wordArray.forEach(e => {
    theDictionary.addWord(e);
})

module.exports = theDictionary;