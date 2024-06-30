const userInput = require('./userInput');
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

printWelcomeMessage();
while (true) {
    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
        arithmetic.performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
        vowelCounting.performOneVowelCountingCalculation();
    }
}

function printWelcomeMessage() {
    console.log('Welcome to the calculator! :D');
}

function getCalculationMode() {
    validModes = ['1', '2'];
    let mode
    console.log(`Which calculator mode do you want?
    1) Arithmetic
    2) Vowel counting`)
    do {
        mode = userInput.getInput('Please enter the mode number:');
    } while ((!validModes.includes(mode)) && (console.log(`${mode} is not one of the mode options.`) || true))
    return mode
}