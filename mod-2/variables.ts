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



// COMMENT: "Type safety" is one of the main motivations for using TypeScript.
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

// enum
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
let randomValue: any;
randomValue = 10;		// Ok
randomValue = 'abc';	// Ok
randomValue = true;		// Ok
// NOTE: type unkown: unable to interact with a variable of type unkown
let unkownValue: unknown;
unkownValue = 10;
unkownValue = 'abc';
unkownValue = true;


// COMMENT: type assertion
//	* A type assertion is like a type cast.
//	* It tells the compiler "trust me, I know what I’m doing."
//	* e.g. allows to force-apply a string method: toUpperCase().
//	* best-practice: to make sure the type is the one we expect, we use "type guards"
randomValue = 'hello';
(randomValue as string).toUpperCase(); // :>> HELLO


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
if ( typeof randomValue === 'string' ) {
	console.log( (randomValue as string).toUpperCase() ); // :>> HELLO
}
else {
	console.log( 'Error - expected randomValue to be typeof String.');
}