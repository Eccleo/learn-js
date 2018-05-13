function getFibonacciNumbers(numberCount) {
    if (typeof numberCount !== 'number' || numberCount < 1 || isNaN(numberCount)) {
        throw new Error('Wrong number is provided');
    }

    if (numberCount === 1) {
        return [0];
    }

    var fibonacciNumbers = [0, 1];

    for (var i = 2; i < numberCount; i++) {
        fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
    }

    return fibonacciNumbers;
}

var enteredNumber = parseInt(prompt('Enter number'), 10);
var sequence = getFibonacciNumbers(enteredNumber);

alert(sequence);