// CLASSES
//	* express common object-oriented patterns.
//	* another way to define the shape of an object.
//	* blueprint for building objects. to make it an instance (object), it has to be "build" first.
//	* can be "extended". it'll have the same attributes but with it's own unique attributes on top.
//	* encapsulation, abstraction: allows to hide all but the relavent data (unwanted details omitted).

// NOTE: class members
// PROPERTIES/fields: data/attributes for the object
// CONSTRUCTOR function: used to create and initialize objects based on the class
//	=> the constructor creates a new object with the class shape, and initialize it with values
// ACCESSORS: type of function to "set" or "get" values of a property
//	=> accessors are only neccessary to control access to values
// METHODS: functions that define the behavior/action an object can perform

// the underscore (_) provides a way to distinguish the property declaration from the parameters that are accessible through the constructor

// NOTE: create a class
class Car {
	// Properties
	_manufacturer: string;
	_color: string;
	_doors: number;

	// constructor
	constructor( manufacturer: string, color: string, doors = 3 ) {
		this._manufacturer = manufacturer;
		this._color = color;
		this._doors = doors;
	}

	// accessors
	get manufacturer(): string { 
		return this._manufacturer;
	}
	set manufacturer( manufacturer: string ) {
		this._manufacturer = manufacturer
	}
	get color(): string { 
		return 'The color of the car is ' + this._color;
	}
	set color( color: string ) {
		this._color = color
	}
	get doors(): number { 
		return this._doors;
	}
	set doors( doors: number ) {
		if ( (doors % 2 ) === 1 ) {
			this._doors = doors;
		} else {
			throw new Error('Doors must be an odd number.');
		}
	}

	// methods
	accelerate( speed: number ): string {
		return `${this.worker()} is accelerating to ${speed} MPH.`
	}
	brake(): string {
		return `${this.worker()} is braking with the standard braking system.`
	}
	turn( direction: 'left' |'right' ): string {
		return `${this.worker()} is turning ${direction}.`
	}
	worker(): string {
		return this._manufacturer;
	}
}

// NOTE: Instantiate a class
const myCar1 = new Car( 'Ford', 'blue' ); // doors parameter is optional

// COMMENT: accessing parameter/property
//	* important to understand the difference
//	* often we don't want to allow direct access to a property (without doing validations)
// represents constructor parameter: access property through "get"/"set"
console.log( myCar1.color ); // :>> The color of the car is blue
// represents class property: access property (raw) data, directly
console.log( myCar1._color ); // :>> blue

// validation
const myCar2 = new Car( 'Octane', 'orange', 2 );	// no error, because there's no validation on the constructor
// myCar2.doors = 4;								// :>> Error: Doors must be an odd number
myCar2.doors = 3; 									// Ok

console.log( myCar2.accelerate( 35 ) );				// :>> Octane is accelerating to 35 MPH.
console.log( myCar2.brake() ); 						// :>> Octane is braking...
console.log( myCar2.turn('right') ); 				// :>> Octane is turning right.



// NOTE: access modifiers, for access control
//	* by default, all class members are "public"
//	* in TS there's the ability to control the visibility of class members: public | private | protected
//	* in addition, properties can be made readonly

// access modifiers
//	* public: default
//	* private: cannot be accessed from outside of it's containing class
//	* protected: same like private, BUT CAN be accessed from deriving classes (extended classes)

class Motorbike {
	// Properties
	private _manufacturer: string;				// COMMENT: only available inside this class
	private _color: string;
	private static numberOfBikes: number = 0;	// COMMENT: static: shared by all instances

	// constructor
	constructor( manufacturer: string, color: string ) {
		this._manufacturer = manufacturer;
		this._color = color;
		Motorbike.numberOfBikes++;
	}

	// accessors
	get manufacturer(): string { 
		return this._manufacturer;
	}
	set manufacturer( manufacturer: string ) {
		this._manufacturer = manufacturer
	}
	get color(): string { 
		return 'The color of the motorbike is ' + this._color;
	}
	set color( color: string ) {
		this._color = color
	}

	// methods
	accelerate( speed: number ): string {
		return `${this.worker()} is accelerating to ${speed} MPH.`
	}
	brake(): string {
		return `${this.worker()} is braking with the standard braking system.`
	}
	turn( direction: 'left' |'right' ): string {
		return `${this.worker()} is turning ${direction}.`
	}

	// COMMENT: protected: available inside extended classes as well
	protected worker(): string {
		return this._manufacturer;
	}

	// COMMENT: static: shared by all instances
	public static getNumberOfBikes(): number {
		return Motorbike.numberOfBikes;
	}
}

// try accessing a private property
const myMotorbike1 = new Motorbike( 'Honda', 'green' );
// myMotorbike1._color = 'red'; // Invalid
myMotorbike1.color = 'red'; // Ok = only through "set"/"get"

// NOTE: static property
//	* the properties so far are just for each "instance", instance properties.
//	* static properties are shared by ALL instances
const myMotorbike2 = new Motorbike( 'BMW', 'black' );
const myMotorbike3 = new Motorbike( 'Kawasaki', 'red' );
console.log( Motorbike.getNumberOfBikes() ); // :>> 3


// NOTE: inheritance: extend a class
// create a "hierarchy": inherent a sub-class to the base-class/parent-class
// methods from the base-class can be overwritten: same name, but different functionality
class ElectricMotorbike extends Motorbike {
	// properties
	private _range: number;

	// constructor
	constructor( manufacturer: string, color: string, range: number ) {
		super( manufacturer, color );
		this._range = range;
	}

	// accessor
	get range(): number {
		return this._range;
	}
	set range( range: number ) {
		this._range = range;
	}

	// methods
	charge(): string {
		return `${this.worker()} is charging.`
	}
	// COMMENT: overwrite brake()
	brake(): string {
		return `${this.worker()} is braking with the regenerative braking system.`
	}
}

const myEbike = new ElectricMotorbike( 'Zero Motorcycles', 'black', 200 );
console.log( myEbike.range ); // :>> 200
console.log( myEbike.charge() ); // :>> '... is charging'
console.log( myMotorbike1.brake() ); // :>> ...is braking with standard...
console.log( myEbike.brake() ); // :>> ...is braking with regenerative...

console.log( Motorbike.getNumberOfBikes() ); // :>> 4



// NOTE: interface to ensure class shape
//	* "code contract": describes the required properties of an object and their types.
//	* an interace for a class can only describe the "public-facing side", not it's private members.
interface Vehicle {
	manufacturer: string;
	color: string;
	accelerate( speed: number ): string;
	turn( direction: 'left' |'right' ): string;
}

class Boat implements Vehicle {
	// properties
	private _manufacturer: string;
	private _color: string;

	// constructor
	constructor( manufacturer: string, color: string ) {
		this._manufacturer = manufacturer;
		this._color = color;
	}

	// accessor
	get manufacturer(): string {
		return this._manufacturer;
	}
	set manufacturer( manufacturer: string ) {
		this._manufacturer = manufacturer;
	}
	get color(): string {
		return this._color;
	}
	set color( color: string ) {
		this._color = color;
	}

	// methods
	accelerate(speed: number): string {
		return `${this.worker()} accelerates with ${speed} MPH.`
	}
	turn(direction: "left" | "right"): string {
		return `${this.worker()} turns ${direction}.`
	}
	protected worker(): string {
		return this._manufacturer;
	}
}
const myBoat = new Boat( 'House Boat', 'white' );
console.log( myBoat.accelerate(1) );
console.log( myBoat.turn('left') );
console.log( myBoat.color );
