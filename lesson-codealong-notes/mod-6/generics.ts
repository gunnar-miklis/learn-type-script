// Generics
//	* code templates ( the coder defines ), to reuse them throughout the codebase
//	* provide more flexibility when working with types, without losing the power of type checking
//	* reduces the need to use "type any"

// NOTE: "type any"
//	* no type checking
function getArray( items: any[] ): any[] {
	return new Array().concat( items );
}
const numberArray = getArray( [1, 2, 3, 4] );
numberArray.push( 'a', 'b', 'c' );
console.log( numberArray );  // :>> 1, 2, 3, 'a', 'b', 'c'

// NOTE: "generics"
//	* type checking
function getArrayGeneric<T>( items: T[] ): T[] {
	return new Array().concat( items );
}
const stringArray = getArrayGeneric<string>( ['cat', 'dog', 'bird'] );
// stringArray.push( 1, 2, 3 ); // :>> Invalid, Error
stringArray.push( 'Rabbit' ); 	// :>> Ok
console.log( stringArray );

// multi type
function displayMessage<T, U>( id: T, message: U): T {
	console.log( `Message ${id}: ${message}` ); // :>> "Message 4: We can use multiple type variables in generics." 
	return id;
}
console.log( displayMessage<number, string>( 4,'We can use multiple type variables in generics.' ) ); // :>> 4
