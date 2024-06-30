const userInput = require('./userInput');

exports.performOneArithmeticCalculation = performOneArithmeticCalculation;

function getOperatorChoice() {
    validOperators = ['+', '-', '*', '/'];
    let operator;
    console.log('This calculator can perform operations using the four operators: +, -, *, /.');
    do {
        operator = userInput.getInput('Please enter the operator you would like to use:');
    } while ((!validOperators.includes(operator)) && (console.log(`${operator} is not a valid operator choice.`) || true))
    return operator;
}

function getIterationValue() {
    let iterations;
    console.log(`How many numbers do you wish to ${operator}?`)
    do {
        iterations = userInput.getNumberInput();
    } while (((!(Number.isInteger(iterations))) || (!(iterations > 1))) && (console.log(`You need to input an integer >= 2.`) || true ))
    return iterations;
}

function getNumbers(iterations) {
    let numbers = new Array(iterations);
    for (let i = 0; i < iterations; i++) {
        console.log(`Please enter number ${i+1}.`)
        numbers[i] = userInput.getNumberInput();
    }
    return numbers;
}

function computeCalculation(operator, numbers) {
    firstNumber = numbers[0]
    numbers = numbers.slice(1);
    if (operator == '/') {
        numbers = numbers.filter(x => x !== 0);
    }

    if (operator == '+') {
        return numbers.reduce((acc, curr) => acc + curr, firstNumber);
    } else if (operator == '-') {
        return numbers.reduce((acc, curr) => acc - curr, firstNumber);
    } else if (operator == '*') {
        return numbers.reduce((acc, curr) => acc * curr, firstNumber);
    } else if (operator == '/') {
        return numbers.reduce((acc, curr) => acc / curr, firstNumber);
    }
}

function performOneArithmeticCalculation() {
    operator = getOperatorChoice();
    iterations = getIterationValue();
    numbers = getNumbers(iterations);
    ans = computeCalculation(operator, numbers);

    console.log(`\nThe answer is ${ans}.`);
}