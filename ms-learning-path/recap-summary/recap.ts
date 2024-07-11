// TYPESCRIPT
// "Type safety" is one of the main motivations for using TypeScript.
//	* accurately express the type relations
//	* pre-validation (compiling)

// While earlier versions of ECMAScript, such as ES3, do not support async and await for example, ... 
//	* the TypeScript compiler is able to generate compatible code to implement this feature. 
//	* This enables you to take advantage of the newer feature while still being able to target older browsers!


// ------------------------------------------------------------------


// NOTE: setup: tsc --init


// -------------------------------------------------------------------


// NOTE: types
let num: number;
let str: string;
let bool: boolean;
let bigNum: bigint;

let valueAbscence: void;			// might indicate, that a function executes without returning anything

let anyValue: any;					// allows to perform any operation on the value without type-checking
let unkownValue: unknown; 			// enforces type safety. requries to validate the value type ( with a type guard, see below )

let unionType: string | boolean;	// restrict to specific types
let literalType: 'pass' | 'fail';	// pre-define possibilities

let array: number[];				// strictly one type. also: "Array<number>"
let tuple: [string, number];		// mixed types, BUT specific/exact number of elements [here: 2 elements, first: string, second: number]

enum DaysOfWeek {					// define a set of named values or options.
	Monday,							// each value has a numeric index (default starting at 0)
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday
}
let today: DaysOfWeek = DaysOfWeek.Friday;
console.log( 'Today is: ' +  DaysOfWeek[today] ); // :>> Today is: Friday
for ( let i: DaysOfWeek = DaysOfWeek.Monday; i <= DaysOfWeek.Friday; i++ ) {
	console.log( DaysOfWeek[i] )
} // :>> Monday > Tuesday > Wednesday > Thursday > Friday


// ------------------------------------------------------------------


// NOTE: type guards: "manual type checking"
// Type			|	Predicate
// -----------	|	---------------------
// string		|	typeof s === "string"
// number		|	typeof n === "number"
// boolean		|	typeof b === "boolean"
// undefined	|	typeof undefined === "undefined"
// function		|	typeof f === "function"
// array		|	Array.isArray(a)
unkownValue = 'this';
if ( typeof unkownValue === 'string' ) console.log( `${unkownValue} is a string`.toUpperCase() );
unkownValue = 5;
if ( typeof unkownValue === 'number' ) console.log( 5 + unkownValue );

// NOTE: type assertion: force/allow type casting
// best practice: used with type guards to ensure the correct type
anyValue = 5
console.log( anyValue as string ); // :>> 5: string
console.log( anyValue as number ); // :>> 5: number

// NOTE: type alias: used to define "data" itself ( while interfaces describe the "shape" )
type testCases = 'yes' | 'no' | 'y' | 'n' | 1 | 0 | true | false;
let testResult: testCases;
testResult = 'yes';


// ------------------------------------------------------------------


// NOTE: interface: describe the shape of an object
//	* objects that implement an interface must implement all the required members of the interface.
//	* Interfaces have no run-time representation; they are purely a compile-time construct.
//	* weightless, no impact on the code execution

interface Student {
	readonly id: number;		// readonly
	name: string,
	age: number,
	country?: string,			// optional
	isEnrolled: boolean,
	displayStudent(): string;	// function
}
const bob: Student = {
	id: 1,
	name: 'Bob',
	age: 26,
	isEnrolled: true,
	displayStudent(): string {
		return `${this.name} is ${this.age} years old. ${this.name} is currently ${this.isEnrolled ? 'enrolled' : 'not enrolled'}.`;
	},
}
console.log( bob.displayStudent() ); // :>> Bob is 26 years old. Bob is currently enrolled.

// extend interfaces
interface InformaticStudent extends Student {
	technologies: string[],
	courses?: number[]
}
const maya: InformaticStudent = {
	id: 2,
	name: 'Maya',
	age: 28,
	isEnrolled: false,
	technologies: ['javascript', 'mongoDB', 'express', 'react', 'node'],
	country: 'PT',
	displayStudent(): string {
		return `${this.name} is ${this.age} years old. ${this.name} is currently ${this.isEnrolled ? 'enrolled' : 'not enrolled'}.`;
	},
}
console.log( maya.displayStudent() );
console.log( maya.technologies );


// ------------------------------------------------------------------


// NOTE: functions
// ts allows to specify: default and optional parameters
// ts allows to specify: return type
function addNumbers( x: number, y: number = 5, z?: number ): string {
	return `The result of the given numbers added: ${ z ? x+y+z : x+y }`
}
console.log( addNumbers( 5 ) ); // :>> ... numbers add: 10
console.log( addNumbers( 5, 2 ) ); // :>> ... numbers add: 7
console.log( addNumbers( 5, 2, -4 ) ); // :>> ... numbers add: 3

function sumNumber( arr: number[] ): void {
	console.log( arr.reduce( (sum, num) => sum + num, 0 ) ); // :>> 23
}
sumNumber( [10, 7, 3, 5, 2, -4] );

// deconstruct
interface User {
	name: string;
	status: 'online' | 'away' | 'offline';
}
const mat: User = { name: 'Mat', status: 'online' }
function onlineStatus( { name, status }: User ): string {
	return `${name} is currently ${status}.`;
}
console.log( onlineStatus( mat ) ); // :>> Mat is currently online.

// function as type
interface Steps {
	( number: number ): string;	// function
}
const headWest: Steps = ( n ) => `Heading "west" for ${n} steps.`;
const headEast: Steps = ( n ) => `Heading "east" for ${n} steps.`;
const headNorth: Steps = ( n ) => `Heading "north" for ${n} steps.`;
const headSouth: Steps = ( n ) => `Heading "south" for ${n} steps.`;

const navigate = ( operation: 'left' | 'right' | 'forward' | 'backwards' ): Steps => {
	if ( operation === 'left' ) return headWest;
	else if ( operation === 'right' ) return headEast;
	else if ( operation === 'forward' ) return headNorth;
	else if ( operation === 'backwards' ) return headSouth;
	else throw new Error( 'This operation is not available.' );
}
console.log( navigate('left')(3) ); // :>> Heading west for 3 steps.
console.log( navigate('right')(2) ); // ...
console.log( navigate('forward')(4) );
console.log( navigate('backwards')(1) );


// ------------------------------------------------------------------


// NOTE: classes
//	* blueprint (similar to interfaces) to define properties, methods and default values for objects
interface TypePhone {
	model: string;
	company: string;
	camera?: number;
	fiveG?: boolean;
	displayDetails(): string;
}
class Phone implements TypePhone {
	// properties
	private _model: string;										// only visible inside class
	private _company: string;
	private static _numberOfPhones: number = 0;					// shared by all instances ( myPhone, mySmarthphone, etc.)

	// constructor
	constructor( model: string, company: string ) {
		this._model = model;
		this._company = company;
		Phone._numberOfPhones++;								// count + 1 on construct
	}

	// accessors
	get model(): string { return this._model }					// data only accessible via "get/set"
	set model( model: string ) { this._model = model }
	get company(): string { return this.company }
	set company( company: string ) { this.company = company }

	// methods
	protected name(): string {									// only available inside "inheritance scope"
		return `${this._model} by ${this._company}`
	}
	displayDetails(): string {
		return `${this.name()}.`
	}
	public static getNumberOfPhones(): number {
		return Phone._numberOfPhones;
	}
}
const myPhone = new Phone( 'Galaxy S23', 'Samsung');
console.log( myPhone.displayDetails() ); // :>> Galaxy S23 by Samsung.

class Smartphone extends Phone {								// extend classes
	private _camera: number;
	private _fiveG: boolean;

	constructor( model: string, company: string, camera: number = 1, fiveG: boolean = false ) {
		super( model, company );								// calling base-class constructor
		this._camera = camera;
		this._fiveG = fiveG;
	}

	get camera(): number { return this._camera }
	set camera( camera: number ) { this._camera = camera }
	get fiveG(): boolean { return this._fiveG }
	set fiveG( fiveG: boolean ) { this._fiveG = fiveG }

	displayDetails(): string {									// overwriting method here
		return `${this.name()} has ${this._camera} camera(s)${this.fiveG ? ' and 5G' : ''}.`;
	}
}
const mySmartphone = new Smartphone( 'Pixel 7', 'Google' );
console.log( mySmartphone.displayDetails() ); // :>> Pixel 7 by Google has 1 camera(s).
mySmartphone.camera = 2;
mySmartphone.fiveG = true;
console.log( mySmartphone.displayDetails() ); // :>> Pixel 7 by Google has 1 camera(s) and 5G.

console.log( Phone.getNumberOfPhones() ); // :>> 2