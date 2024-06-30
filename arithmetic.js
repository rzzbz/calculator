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

function computeCalculation(operator, iterations) {
    let ans = 0;

    for (let i = 0; i < iterations; i++) {
        console.log(`Please enter number ${i+1}.`)
        num = userInput.getNumberInput();

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