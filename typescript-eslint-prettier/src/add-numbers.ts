function addNumbers(a: number, b: number): string {
	return 'The result is: ' + a + b;
}

const arr = [3, 5, 6];

const ten = 10;
const twelve: number = 12;

const result = addNumbers(ten, twelve);

console.log(result); // :>> The result is: 1012

arr.push(ten);
console.log(arr); // :>> [3,5,6,10]
