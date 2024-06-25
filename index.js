const readline = require('readline-sync');

// saying hello!
console.log('Welcome to the calculator! :D');

// getting input
console.log('\nPlease enter the first number:');
const a = readline.prompt();
const A = +a

console.log('\nPlease enter the second number:');
const b = readline.prompt();
const B = +b

const c = A*B;

console.log('\nThe product of those two numbers is ' + c);

