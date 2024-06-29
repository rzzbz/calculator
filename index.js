const readline = require('readline-sync');

printWelcomeMessage();
while (true) {
    performOneCalculation();
}

function printWelcomeMessage() {
    console.log('Welcome to the calculator! :D');
    console.log('This calculator can perform operations using the four operators: +, -, *, /.');
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
    console.log('How many numbers do you wish to ' + operator + ' ?');
    return getNumberInput() ;
}

function computeCalculation(operator, iterations) {
    let ans = 0;

    for (let i = 0; i < iterations; i++) {
        console.log('Please enter number (' + (i+1) + ').')
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

function performOneCalculation() {
    operator = getOperatorChoice();
    iterations = getIterationValue();

    ans = computeCalculation(operator, iterations);

    console.log('\nThe answer is ' + ans + '.');
}
