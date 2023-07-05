// Organize code using "modules"
//	* group related code together
//	* export any declaration (variable, function, class, alias, interface)
//	* keywords: export / import
//	* move from global scope to module scope

// EXPORT
//	* export function myFunc() {}
//	* in tsconfig.json the module code can be specified: the compiler will generate the appropriate code 
//		==> "commonjs" = require() = nodeJS
//		==> "ES6" = export/import = Browser: <script type="module" src="./build/modules.js"></script>

//	./greet.ts
//	./greet-utils.ts

// IMPORT: single module | rename module | entire module
//	* import { <component name> } from '<module name>'
//	* import { <component name> as <new name> } from '<module name>'
//	* import * as <new name> from '<module name>'

import { greetingFunction  } from "./greet";
import { greetingFunction as greetingLength } from "./greet-utils";
import * as allGreetings from "./greet";

// only the ".js file" in the "build" directory can be executed
console.log( greetingFunction('Hello') );	// :>> 'Hello fellow coder!'
console.log( greetingLength('Hello') ); 	// :>> 'Hello fellow coder! Your greeting is 5 characters long.'
console.log( allGreetings.greetingFunction('Hello') ); // :>> 'Hello fellow coder!'