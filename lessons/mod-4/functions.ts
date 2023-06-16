// FUNCTIONS
//	* TS enables to specify the type of parameters and return values
//	* TS enables to make parameters "required" or "optional"
//	* TS offers the benefit of "type checking" the values that you pass to the function and what is returned.

//	* type checking of parameters & return values
//	* required, optional, default, rest parameters
//	* function types using alias or interface




// NOTE: named functions
//	* provide a distinct name within the current scope

// COMMENT: named function declarations are loaded into the "execution context" BEFORE any code runs = "Hoisting" ( we can use the function before it's declared )

function addNumbers( x: number, y: number ): number {
	return x + y
}
console.log( addNumbers( 3, 2 ) ); 




// NOTE: anonymous functions = function expressions
//	* have no name
//	* represent values
//	* often assigned to a variable ( or passed to other functions, [as "callback"] )
//	* (after assigning to a variable), we can use the variable to call the function

// COMMENT: anonymous functions are NOT pre-loaded into the "execution context" = "NOT Hoisted" ( MUST be declared before they've been called )
//	* only runs when the code encounters the function. created on runtime

const sumNumbers = function( x: number, y: number ): number {
	return x + y
}
console.log( sumNumbers( 3, 2 ));

const sum = function( numbers: number[] ): number {
	return numbers.reduce( (sum, number) => sum + number, 0 )
}
console.log( sum( [4,5,1,8] ) );




// NOTE: arrow function
//	* provide shorthand syntax of defining anonymous functions
//	* often used with simple functions and in some event handling scenarios
//	* for single line functions, the "return" keyword and the curly brackets can be omitted

// COMMENT: arrow functions were introduced in ES2015. when specified, the tsc compiler converts it into a non-arrow function, which makes it compatible for older browsers as well

const subNumbers = ( x: number, y: number ): number => x - y;
console.log( subNumbers( 5, 2 ));




// NOTE: parameters
//	* all parameters are required, unless otherwise specified

// optional parameters
//	* to define an optional parameter, has to be "?" will be appending
//	* optional parameters must come after all required in the list
function multiplyNumbers( x: number, y?: number ): number {
	return y === undefined ? x : x * y;
}
console.log( multiplyNumbers(5) );
console.log( multiplyNumbers(5, 5) );


// default parameters
//	* similar to an optional parameter, but with an default value already assigned
function combine( x: number, y: number, currency: string = '€' ): string {
	return x + y + currency;
}
console.log( combine( 5, 5 ));
console.log( combine( 5, 5, 'EUR' ));
console.log( combine( 5, 5, '$' ));


// rest parameters
//	* Rest parameters are treated as a boundless number of optional parameters
//	* if you want to work with multiple parameters ( array )
//	* if you don't know how many parameters a function will ultimately take
//	* so to say: "an array of arguments"
function addAll( firstElement: string, ...allTheRest: string[] ): string {
	firstElement; // :>> H
	allTheRest; // :>> ['e','ll','o',' ','World!']
	return firstElement + allTheRest.join('')
}
console.log( addAll( 'H','e','ll','o',' ','World!' ) );


// deconstructed object parameters
//	1. a interface will define the properties
//	2. then they'll be implemented, using the interface as a type
//	3. in the function, the object can be deconstructed, using the interface as a type, too
interface Message {
	text: string;
	sender: string;
}
function displayMessage( { text, sender }: Message ): string {
	return `Message from ${sender}: ${text}`;
}
const newMessage: Message = {
	text: "Hi, check this out! How cool's that?!",
	sender: "Gunnar"
}
console.log( displayMessage( newMessage ));




// NOTE: define "type function"
//	* to apply the same function type signature to more than one function, we can use the "function types"
//	* either with an alias or an interface ( interfaces: ability to extend )

// interface declaration
//	* (PascalCase). use colon syntax
interface Calculator {
	( x: number, y: number ): number;
}
// alias declaration
//	* use arrow syntax
type calculatorAlias = ( x: number, y: number ) => number;

// use function type while implementing
const addition: Calculator = ( x: number, y: number ): number => x + y;
const subtraction: Calculator = ( x: number, y: number ): number => x - y;
console.log( addition( 5, 3) );
console.log( subtraction( 5, 3) );

// also possible: passing values from another function
function calculation( operation: 'add' | 'substract' ): Calculator {
	if ( operation === 'add' ) return addition
	else if ( operation === 'substract' ) return subtraction;
	else throw new Error('this operation is not available');
}
console.log( calculation('add')(5,3) );
console.log( calculation('substract')(5,3) );


// COMMENT: type inference 
//	* the parameter names don't need to match the one in the function type (x, y)
//	* we can also leave off the parameter types
const divide: Calculator = ( X: number, Y: number ): number => X / Y;
const multiply: Calculator = ( firstNumber: number, secondNumber: number ): number => firstNumber * secondNumber;
const exponent: Calculator = ( num1, num2 ) => num1**num2;
console.log( divide(25,5) );
console.log( multiply(5,5) );
console.log( exponent(5,5) );