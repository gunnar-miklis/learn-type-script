"use strict";
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 2));
const sumNumbers = function (x, y) {
    return x + y;
};
console.log(sumNumbers(3, 2));
const sum = function (numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
};
console.log(sum([4, 5, 1, 8]));
const subNumbers = (x, y) => x - y;
console.log(subNumbers(5, 2));
function multiplyNumbers(x, y) {
    return y === undefined ? x : x * y;
}
console.log(multiplyNumbers(5));
console.log(multiplyNumbers(5, 5));
function combine(x, y, currency = '€') {
    return x + y + currency;
}
console.log(combine(5, 5));
console.log(combine(5, 5, 'EUR'));
console.log(combine(5, 5, '$'));
function addAll(firstElement, ...allTheRest) {
    firstElement;
    allTheRest;
    return firstElement + allTheRest.join('');
}
console.log(addAll('H', 'e', 'll', 'o', ' ', 'World!'));
function displayMessage({ text, sender }) {
    return `Message from ${sender}: ${text}`;
}
const newMessage = {
    text: "Hi, check this out! How cool's that?!",
    sender: "Gunnar"
};
console.log(displayMessage(newMessage));
const addition = (x, y) => x + y;
const subtraction = (x, y) => x - y;
console.log(addition(5, 3));
console.log(subtraction(5, 3));
function calculation(operation) {
    if (operation === 'add')
        return addition;
    else if (operation === 'substract')
        return subtraction;
    else
        throw new Error('this operation is not available');
}
console.log(calculation('add')(5, 3));
console.log(calculation('substract')(5, 3));
const divide = (X, Y) => X / Y;
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
const exponent = (num1, num2) => num1 ** num2;
console.log(divide(25, 5));
console.log(multiply(5, 5));
console.log(exponent(5, 5));
