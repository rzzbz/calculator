const userInput = require('./userInput');

exports.performOneVowelCountingCalculation = performOneVowelCountingCalculation;

function getStringInput() {
    return userInput.getInput('Please enter a string:').toUpperCase();
}

function countVowels(str) {
    let vowelCounts = {A:0, E:0, I:0, O:0, U:0};
    for (let char of str) {
        if (char in vowelCounts) {
            vowelCounts[char]++;
        }
    }
    return vowelCounts;
}

function displayCounts(vowelCounts) {
    console.log(`The vowel counts are:
    A: ${vowelCounts.A}
    E: ${vowelCounts.E}
    I: ${vowelCounts.I}
    O: ${vowelCounts.O}
    U: ${vowelCounts.U}`);
}

function performOneVowelCountingCalculation() {
    str = getStringInput();
    vowelCounts = countVowels(str);
    displayCounts(vowelCounts);
}