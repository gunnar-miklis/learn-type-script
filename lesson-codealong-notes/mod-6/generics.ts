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
//	* Generic types help prevent errors by only allowing certain properties and methods to be used.
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
console.log( 
	displayMessage<number, string>( 4, 'We can use multiple type variables in generics.' ) 
); // :>> 4


// generic constraint
//	* Generic constraints limit the types that can be used for a function or variable.
type ValidTypes = string | number;
function displayMessage2<T extends ValidTypes, U>( id: T, message: U): T {
	console.log( `Message ${id}: ${message}` ); // :>> "Message Twelve: "Now, strings and numbers are valid types for the id."
	return id;
}
console.log( 
	displayMessage2<string, string>( 'Twelve', 'Now, strings and numbers are valid types for the id.' ) 
); // :>> Twelve


// type guards with generics
// Type guards can be used to check the type of a value before doing something with it.
function displayMessage3<T extends ValidTypes, U>( id: T, message: U): ValidTypes {
	const ValueType = typeof id;
	let messageId: ValidTypes = 'msg-';
	
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
