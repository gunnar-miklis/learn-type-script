// One of TypeScript's core principles is that type checking focuses on the shape that values have.
// This is sometimes called "duck typing" or "structural subtyping".

// INTERFACES
//	* use interfaces to describe an object. (The only job of an interface is to describe a type, not to initialize.)
//	* after defining an interface, we can use it as a "type" (to get all benefits of "type checking")
//	* if the variables, functions, etc. "satisfy" the interface, the "contract" is fulfilled
//	* objects that implement an interface must implement all the required members of the interface.
//	* Interfaces have no run-time representation; they are purely a compile-time construct.
//	* Interfaces are particularly useful for documenting and validating the required shape of properties, objects
//	* while "type alias" are used to define "data" itself, interfaces are to describe a "shape" (of an object)
interface Employee {
	firstName: string;
	lastName: string;
	fullName(): string;
}

// COMMENT: the ": string" is best-practice since it specifies the "return type" of the function
const employee: Employee = {
	firstName: 'Emil',
	lastName: 'Anderson',
	fullName(): string {
		return this.firstName + ' ' + this.lastName;
	}
}
console.log( employee.firstName )
console.log( employee.fullName() )



// declare an interface
interface PascalCaseName {
	requiredProperty: string;
	optionalProperty?: string;
	readonly readOnlyProperty: number;
}
// implement an interface
const obj: PascalCaseName = {
	requiredProperty: 'required',
	readOnlyProperty: 123456
}
console.log( obj.requiredProperty );
console.log( obj.readOnlyProperty );

// modify property values
obj.requiredProperty = 'is required';
// obj.readOnlyProperty = 654321 // invalid
console.log( obj.requiredProperty );
console.log( obj.readOnlyProperty );



interface IceCream {
	readonly flavor: string;
	scoops: number;
	instructions?: string;
}
const myIceCream: IceCream = {
	flavor: 'chocolate',
	scoops: 2
}
console.log( myIceCream.flavor );

function tooManyScoops( dessert: IceCream ) {
	return dessert.scoops > 3 ? dessert.scoops + ' is too much!' : 'here you go!'

}
console.log( tooManyScoops( myIceCream ));

myIceCream.scoops = 4;
console.log( tooManyScoops( myIceCream ));

myIceCream.instructions = 'sprinkle some stuff on top'
console.log( myIceCream );