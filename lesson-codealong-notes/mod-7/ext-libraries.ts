// importing (third-party) libraries
//	* in JS: "requires"
//	* in TS: "import"

// When working with modules in TypeScript, you can create and use "type definitions" to define the shape of module exports, import types, and other related entities.
// "Type definitions" for modules are typically defined in separate files with the .d.ts extension, commonly referred to as "declaration files."
//		==> module.ts: export const PI = 3.14; 
//		==> module.d.ts: export const PI: number;
// By defining "type definitions", you enable TypeScript to catch potential type errors during compilation and provide auto-completion.
// In many cases, popular libraries and frameworks already provide bundled "type definitions".
// You can often install these "type definitions" using a package manager (e.g., @types/package-name), allowing you to benefit from static type checking.
//		==> terminal: npm install dotenv
//		==> terminal: npm install --save-dev @types/node @types/dotenv

import dotenv from 'dotenv';	// import module
const result = dotenv.config(); // read .env file, parse content, assign to proccess.env, return an object
if (result.error) {				// "error checking statement" to verify that the config operation worked as expect
    throw result.error;
} else {						// "parsed" contains the content ( object ), while "process" allows to access the values
	console.log(result.parsed); // :>> { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
	console.log(process.env.DB_HOST); // :>> localhost
	console.log(process.env.WEB_HOST); // :>> staging.adventure-works.com
}



