function getLength( message: string ): number {
	return message.length;
}

export function greetingFunction( greeting: string ): string {
	const greetingLength = getLength( greeting );
	return `${greeting} fellow coder! Your greeting is ${greetingLength} characters long.`;
}
