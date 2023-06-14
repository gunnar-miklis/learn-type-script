// NOTE: arrays
// two ways
let arr: number[] = [ 1, 2, 3 ];
let arr2: Array<number> = [ 1, 2, 3 ];

// NOTE: tuples
//	* arrays of mixed types
//	* A Tuple is an array that has a specific number of elements. Each element is of a specific type and must appear in the exact same order when values are assigned to it.
let person: [string, number];
person = [ 'Mark', 30 ];			// Ok
// person = [ 'Mark', 30, true ];	// invalid
// person = [ 30, 'Mark' ];			// invalid
