// Organize code using "namespaces" ( internal modules )
//	* group related code togetherj.
//	* move from global scope to namespace scopej.
//	* limiting "global scope pollution" (reduce the amount of code in the global scope)j.
//	* all components defined within the namespace are scoped to the namespace (and removed from the global scope)j.
//	* namespaces are a "TypeScript-only construct". Code will be compiled to "objects".
//	* namespaces from multiple files can be compiled into one sinlge file.
//	* "it's not recommended to combine namespaces and modules in the same project."

namespace Greetings {
	export function greetingFunction( greeting: string ): string {
		return `${greeting} fellow coder!`;
	}
}

// "export" keyword: to make a function or class available outside. (omiting "export" = only available inside namespace)
namespace GreetingsWithLength {
	function getLength( message: string ): number {
		return message.length;
	}
	
	export function greetingFunction( greeting: string ): string {
		const greetingLength = getLength( greeting );
		return `${greeting} fellow coder! Your greeting is ${greetingLength} characters long.`;
	}
}

console.log( Greetings.greetingFunction( 'Hello' ) );
console.log( GreetingsWithLength.greetingFunction( 'Hello' ) );

// nested namespaces
namespace AllGreetings {
	export namespace Greetings {
		export function greetingFunction( greeting: string ): string {
			return `${greeting} fellow coder!`;
		}
	}
	
	export namespace GreetingsWithLength {
		function getLength( message: string ): number {
			return message.length;
		}
		
		export function greetingFunction( greeting: string ): string {
			const greetingLength = getLength( greeting );
			return `${greeting} fellow coder! Your greeting is ${greetingLength} characters long.`;
		}
	}
}

console.log( AllGreetings.Greetings.greetingFunction( 'Hello' ) );
console.log( AllGreetings.GreetingsWithLength.greetingFunction( 'Hello' ) );

// shorten nested namespaces via "alias"
import greet = AllGreetings.GreetingsWithLength.greetingFunction;
console.log( greet( 'Hello' ) );