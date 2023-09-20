## Yarn V3 + TypeScript + ESLint + Prettier

```bash
yarn init -2
yarn dlx @yarnpkg/sdks vscode
```

```bash
yarn add -D typescript eslint
yarn add -D prettier --exact
```

```bash
yarn eslint --init
touch tsconfig.json .prettierrc.json .prettierignore .eslintignore 
```

# &nbsp;

| EDIT			| file 				| with content 				|
| ------------- | ----------------- | ------------------------- |
| **yarn** ->	| package.json 		| scripts  					|
| **ts** ->		| tsconfig.json 	| compilerOptions  			|
| **eslint** ->	| .eslintrc.js 		| parserOptions, typescript |
| 				| .eslintignore 	| [...], .eslintrc.js  		|
| **prettier**->| .prettierrc.json 	| customizations  			|
| 				| .prettierignore 	| node_modules, dist, [...] |