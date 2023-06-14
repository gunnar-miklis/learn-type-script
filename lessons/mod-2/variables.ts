// TYPES
//	* primitive & enum & literal
//	* any & unkown
//	* union & intersection
//	* type assertion & type guards
//	* type alias

// "Type safety" is one of the main motivations for using TypeScript.

// ---------------------------------------------------------------------

// dynamic run-time type system (JS) vs static compile-time type styem (TS)
//	* static enable to accurately express the type relationships that are exprected
//	* pre-validation while compiling
//	* provide better documentation for the intention of the code

let x: number; 	// TS: explicit declaration
let y = 1; 		// JS: implicit declaration
let z;			// JS: without initialization

// initialize, obviously only possible with numbers
x = 1;

// intellisense only suggests number-related methods
console.log( y.toFixed(2) );

// type: any
z = 'bcd'



// types:
//	* any: any value without constraints
//	* primitive: number, string, boolean, enum, void (indicates the absence of a value)
//	* objects: array, class, interface, literals
//	* parameters
//	* null / undefined

// NOTE: primitives
// boolean
const yesNo: boolean = false;
// number
const num: number = 0;
// big numbers
const bigNum: bigint = 100n;
// strings
const str: string = 'Hello World!';



// NOTE: enum
//	* a symbolic name for a set of values
//	* used to create sets of constants
//	* makes code easier to read
//	By default, enum values begin with a value of 0, so Permanent is 0, Temp is 1, and Apprentice is 2
enum ContractStatus {
	Permanent = 1,
	Temp,
	Apprentice
}
// declare a new variable with the type "ContractStatus"
let employeeStatus: ContractStatus;
// refer to a enum value ( like an object )
employeeStatus = ContractStatus.Temp
// display the value
console.log( employeeStatus ); // :>> 2
// display the name
console.log( ContractStatus[employeeStatus]); // :>> Temp



// NOTE: type any: bypass any compile-time checks = flexible at the cost of losing type safety
let anyValue: any;
anyValue = 10;		// Ok
anyValue = 'abc';	// Ok
anyValue = true;		// Ok

// NOTE: type unkown: unable to interact with a variable of type unkown
let unkownValue: unknown;
unkownValue = 10;
unkownValue = 'abc';
unkownValue = true;



// COMMENT: type assertion
//	* A type assertion is like "allowing" a type cast.
//	* It tells the compiler "trust me, I know what I’m doing."
//	* e.g. allows to force-apply a string method: toUpperCase().
//	* best-practice: to make sure the type is the one we expect, we use "type guards"
anyValue = 'hello';
// on JSX use "as"
(anyValue as string).toUpperCase(); // :>> HELLO
// another way of type assertion using <>
(<string> anyValue).toUpperCase(); // :>> HELLO


// COMMENT: type guards
//	* conditional test, to learn the type of a variable
//	* "typeof" or "instanceof"
// Type			|	Predicate
// -----------	|	---------------------
// string		|	typeof s === "string"
// number		|	typeof n === "number"
// boolean		|	typeof b === "boolean"
// undefined	|	typeof undefined === "undefined"
// function		|	typeof f === "function"
// array		|	Array.isArray(a)
if ( typeof anyValue === 'string' ) {
	console.log( (anyValue as string).toUpperCase() ); // :>> HELLO
}
else {
	console.log( 'Error - expected anyValue to be typeof String.');
}



// NOTE: Union types
//	* a value that can be one of several types
//	* compared to the "any type", "union type" restricts the assignment to a specific type
//	* uses OR |
let multiType: number | boolean;
multiType = 20;			// Ok
multiType = true;		// Ok
// multiType = 'hello';	// not valid

// union type + type guard
function sum( x: number | string, y: number | string ) {
	if ( typeof x === 'number' && typeof y === 'number' ) {
		return x + y;
	}
	else if ( typeof x === 'string' && typeof y === 'string' ) {
		return Number(x) + Number(y);
	}
	else {
		throw new Error('Invalid Input');
	}
}
console.log( sum(2, 5) ); // 7
console.log( sum('2', '5') ); // 7
console.log( sum('2', 5) ); // invalid innput



// NOTE: intersection types
//	* closely related to "union types"
//	* "intersection types" combine two or more types, to create a new type
//	* often used with interfaces
//	* uses AND &&
interface Employee {
	id: number;
	age: number;
}
interface Manager {
	stockPlan: boolean;
}

// define new intersection type
type ManagmentEmployee = Employee & Manager;

// create new variable based on intersection type
let newManager: ManagmentEmployee = { id: 123, age: 45, stockPlan: true };



// NOTE: literal types
//	* There are three sets of literal types available in TypeScript: string, number, and boolean.
//	* narrowing down the possibilities: ( const x = "hello" ) = 1 possiblity ( let x = '' ) = infinit possibilities
//	* we can "pre-define" values, so to say

// COMMENT: "type" keyword expresses a "type alias"
//	* A type alias is a definition of a type of data, for example, a union, primitive, intersection, tuple, or any other type.
//	* alias are used to define "data" itself, while interfaces are to describe a "shape" (of an object)
type testCases = 'pass' | 'fail' | 'incomplete' | 123 ;

// declare variable of type "testCase"
let result: testCases;
// initialize variable
result = 'pass';	// Ok
result = 'fail';	// Ok
result = 123;		// Ok
// result = 'try';	// invalid
// result = 456;	// invalid

