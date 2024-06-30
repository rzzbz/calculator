const userInput = require('./userInput');

exports.performOneArithmeticCalculation = performOneArithmeticCalculation;

function getOperatorChoice() {
    console.log('This calculator can perform operations using the four operators: +, -, *, /.');
    return userInput.getInput('Please enter the operator you would like to use: ');
}

function getIterationValue() {
    console.log(`How many numbers do you wish to ${operator}?`);
    return userInput.getNumberInput() ;
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