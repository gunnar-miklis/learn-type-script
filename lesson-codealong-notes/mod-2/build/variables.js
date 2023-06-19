"use strict";
let x;
let y = 1;
let z;
x = 1;
console.log(y.toFixed(2));
z = 'bcd';
const yesNo = false;
const num = 0;
const bigNum = 100n;
const str = 'Hello World!';
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus;
employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
let anyValue;
anyValue = 10;
anyValue = 'abc';
anyValue = true;
let unkownValue;
unkownValue = 10;
unkownValue = 'abc';
unkownValue = true;
anyValue = 'hello';
anyValue.toUpperCase();
anyValue.toUpperCase();
if (typeof anyValue === 'string') {
    console.log(anyValue.toUpperCase());
}
else {
    console.log('Error - expected anyValue to be typeof String.');
}
let multiType;
multiType = 20;
multiType = true;
function sum(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    else if (typeof x === 'string' && typeof y === 'string') {
        return Number(x) + Number(y);
    }
    else {
        throw new Error('Invalid Input');
    }
}
console.log(sum(2, 5));
console.log(sum('2', '5'));
console.log(sum('2', 5));
let newManager = { id: 123, age: 45, stockPlan: true };
let result;
result = 'pass';
result = 'fail';
result = 123;
