const readline = require('readline-sync');

// saying hello!
console.log('Welcome to the calculator! :D');

// getting input for operator and values
console.log('This calculator can perform operations using the four operators: +, -, *, /.\nPlease enter the operator you would like to use:');
const operator = readline.prompt();

console.log('\nPlease enter the first number:');
const input1 = readline.prompt();
const number1 = +input1

console.log('\nPlease enter the second number:');
const input2 = readline.prompt();
const number2 = +input2

let ans = 0;

switch (operator){
    case "+":
        ans = number1 + number2;
        break;
    case "-":
        ans = number1 - number2;
        break;
    case "*":
        ans = number1 * number2;
        break;
    case "/":
        ans = number1 / number2;
        break;
    default:
        console.log('Your operator input was not one of the four options.')
}

console.log('\nThe answer is ' + ans);

