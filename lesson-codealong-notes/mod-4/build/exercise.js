"use strict";
function displayAlert(message) {
    alert('The message is ' + message);
}
function sumArray(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
console.log(sumArray([1, 2, 3]));
const addThreeNumbers = (x, y, z) => !z ? x + y : x + y + z;
console.log(addThreeNumbers(10, 20));
console.log(addThreeNumbers(10, 20, 30));
const subtractThreeNumbers = (x, y, z = 100) => x - y - z;
console.log(subtractThreeNumbers(10, 20));
console.log(subtractThreeNumbers(10, 20, 15));
