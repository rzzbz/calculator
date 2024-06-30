const readline = require('readline-sync');
const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

printWelcomeMessage();
while (true) {
    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
        performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
        performOneVowelCountingCalculation();
    }
}

function printWelcomeMessage() {
    console.log('Welcome to the calculator! :D');
    console.log('This calculator can perform operations using the four operators: +, -, *, /.');
}

function getCalculationMode() {
    return getInput(`Which calculator mode do you want?
    1) Arithmetic
    2) Vowel counting`)
}

function getInput(prompt) {
    console.log('\n' + prompt);
    return readline.prompt();
}

function getNumberInput() {
    let response;
    do {
        response = getInput('Please enter a number:');
    } while (isNaN(response));
    return +response;
}

function getOperatorChoice() {
    return getInput('Please enter the operator you would like to use: ');
}

function getIterationValue() {
    console.log(`How many numbers do you wish to ${operator}?`);
    return getNumberInput() ;
}

function computeCalculation(operator, iterations) {
    let ans = 0;

    for (let i = 0; i < iterations; i++) {
        console.log(`Please enter number ${i+1}.`)
        num = getNumberInput();

        if (i == 0){
            ans = num;
        } else {
            if (operator == '+'){
                ans += num;
            } else if (operator == '-'){
                ans -= num;
            } else if (operator == '*'){
                ans *= num;
            } else if (operator == '/'){
                ans /= num;
            } else {
                console.log('Operator input invalid.');
            }
        }
    }

    return ans;
}

function performOneArithmeticCalculation() {
    operator = getOperatorChoice();
    iterations = getIterationValue();
    ans = computeCalculation(operator, iterations);

    console.log(`\nThe answer is ${ans}.`);
}

function getStringInput() {
    return getInput('Please enter a string:').toUpperCase();
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