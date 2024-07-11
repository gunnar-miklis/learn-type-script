// tsc --init :>> create config for the TS compiler
// tsc intro.ts :>> build current directory
// tsc :>> build into ./build directory

// example :>> compile to ./build/intro.js
function addNumbers(x: number, y: number) {
	return x + y;
}
console.log(addNumbers(3, 6));