// GENERICS
//	* code templates ( the coder defines ), to reuse them throughout the codebase
//	* provide more flexibility when working with types, without losing the power of type checking
//	* reduces the need to use "type any"


// COMMENT: "type any" vs "generics"
// type any: no type checking
function getArray( items: any[] ): any[] {
	return new Array().concat( items );
}
const numberArray = getArray( [1, 2, 3, 4] );
numberArray.push( 'a', 'b', 'c' );
console.log( numberArray );  // :>> 1, 2, 3, 'a', 'b', 'c'

// COMMENT: "type any" vs "generics"
// generics: type checking
//	* Generic types help prevent errors by only allowing certain properties and methods to be used.
function getArrayGeneric<T>( items: T[] ): T[] {
	return new Array().concat( items );
}
const stringArray = getArrayGeneric<string>( ['cat', 'dog', 'bird'] );
// stringArray.push( 1, 2, 3 ); // :>> Invalid, Error
stringArray.push( 'Rabbit' ); 	// :>> Ok
console.log( stringArray );


// NOTE: multi type
function displayMessage<T, U>( id: T, message: U): T {
	console.log( `Message ${id}: ${message}` ); // :>> "Message 4: We can use multiple type variables in generics." 
	return id;
}
console.log( 
	displayMessage<number, string>( 4, 'We can use multiple type variables in generics.' ) 
); // :>> 4


// NOTE: generic constraint
//	* Generic constraints limit the types that can be used for a function or variable.
type ValidTypes = string | number;
function displayMessage2<T extends ValidTypes, U>( id: T, message: U): T {
	console.log( `Message ${id}: ${message}` ); // :>> "Message Twelve: "Now, strings and numbers are valid types for the id."
	return id;
}
console.log( 
	displayMessage2<string, string>( 'Twelve', 'Now, strings and numbers are valid types for the id.' ) 
); // :>> Twelve


// NOTE: type guards with generics
// Type guards can be used to check the type of a value before doing something with it.
function displayMessage3<T extends ValidTypes, U>( id: T, message: U): ValidTypes {
	const ValueType: ValidTypes = typeof id;
	let messageId: ValidTypes = 'msg-';
	
	// type guard
	if ( ValueType === 'string' ) {
		messageId += id;
	} else if ( ValueType === 'number' ) {
		messageId += id.toString();
	}
	
	console.log( `ID type ${ValueType.toUpperCase()}. ID: ${messageId}. Message: ${message}` );
	return messageId; // notice, using "ValidTypes" on return to make sure it's either 'string' or 'number'
}
console.log( displayMessage3<string, string>( '123-abc', 'lorem...' ) ); // :>> 'ID type STRING. ID: msg-123-abc. Message: lorem...'
console.log( displayMessage3<number, string>( 456, 'lorem...' ) ); // :>> 'ID type NUMBER. ID: msg-456. Message: lorem...'



// NOTE: generic variables with interface
interface TypeIdentity<T, U> {
	value: T;
	message: U;
	process?(): T;
}
const returnNumber: TypeIdentity<number, string> = { value: 25, message: 'Hello!' };
const returnString: TypeIdentity<string, number > = { value: 'Hello!', message: 25 };

// NOTE: generic functions with interface
// 1. declare interface
interface TypeProcessIdentity<T, U> {
	( value: T, message: U ): T;
}
// 2. declare function
function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value;
}
// 3. use interface to type check function
const processor: TypeProcessIdentity<number, string> = processIdentity;
// 4. call function
const returnNumber2 = processor(100, 'Hello!');   	// OK
// const returnString2 = processor('Hello!', 100);  // invalid: string not assignable to a number

// NOTE: generic classes with interface
class ProcessIdentity<T, U> implements TypeIdentity<T, U> {
	value: T;
	message: U;

	constructor( val: T, msg: U) {
		this.value = val;
		this.message = msg;
	}

	process(): T {
		console.log( this.message );
		return this.value;
	}
}
const processResult = new ProcessIdentity( 25, 'Hello!' );
console.log( processResult.process() ); // :>> 25
console.log( processResult.message ); // :>> 'Hello!'
// processResult.value = '100'; // invalid: not a number
// processResult.message = 100; // invalid: not a string

// NOTE: generic class without interface
class ProcessIdentity2<T, U> {
	private _value: T;
	private _message: U;

	constructor( value: T, message: U ) {
		this._value = value;
		this._message = message;
	}

	getIdentityValue(): T {
		return this._value;
	}
}
const processResult2 = new ProcessIdentity2<number, string>( 25, 'Hello!' );
console.log(  processResult2.getIdentityValue() ); // :>> 25

// generic with classes and subclasses
class Car {
	name: string = 'generic car';
	doors: number = 3;
}
class ElectricCar extends Car {
	name = 'electric car';
}
class Truck extends Car {
	name = 'truck';
	doors = 2;
}
function getDoors<T extends Car> (car: T): T {
	console.log( `${car.name} has ${car.doors} doors.` );
	return car;
}

const myElectricCar = new ElectricCar;
getDoors<ElectricCar>( myElectricCar ); // :>> 'electric car has 3 doors'

const myTruck = new Truck;
getDoors<Truck>( myTruck ); // :>> 'truck has 2 doors.'