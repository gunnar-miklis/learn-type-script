// multi file namespaces
// represents the main cod of the application: calls the function in "functions.ts"

// NOTE: to inform the TypeScript compiler, multiple files are related, add the "reference" tag with triple slash ( /// ) syntax.
// 2 relations
/// <reference path="interfaces.ts" />
/// <reference path="functions.ts" />
const foo = Functions.myFunc();

// NOTE: compiling multi file namespaces
// "tsc": compile into separated single files. need to be associated with <script> tag in the HTML.
// "tsc --outFile main.js main.ts": compile all files into one single file.