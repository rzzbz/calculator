const readline = require('readline-sync');

function getInput(prompt) {
    console.log('\n' + prompt);
    return readline.prompt();
}

function getNumberInput() {
    let response;
    do {
        response = getInput('Please enter a number:');
    } while (isNaN(response) && (console.log(`${response} is not a number.`) || true));
    return +response;
}

exports.getInput = getInput;
exports.getNumberInput = getNumberInput;
