const readline = require('readline-sync');

// saying hello!
console.log('Welcome to the calculator! :D');

// getting input for operator and number of iterations
console.log('This calculator can perform operations using the four operators: +, -, *, /.\nPlease enter the operator you would like to use:');
const operator = readline.prompt();

console.log('How many numbers do you wish to ' + operator + ' ?');
const iterationsStr = readline.prompt();
const iterations = +iterationsStr

let ans = 0;

// request values and perform calculation using for loop
for (let i = 0; i < iterations; i++) {
    console.log('\nPlease enter number ' + (i + 1) + ':');
    const input = readline.prompt();
    const num = +input;

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
            console.log('Operator input invalid.')
        }
    }
}

console.log('\nThe answer is ' + ans);

