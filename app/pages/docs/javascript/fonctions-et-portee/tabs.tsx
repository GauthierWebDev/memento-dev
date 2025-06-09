import { Snippet } from "@/components/Snippet";

const jsFunctionsSnippets = [
	{
		name: "Fonction déclarée",
		codeLanguage: "js",
		code: `function addition(a, b) {
  return a + b;
}`,
	},
	{
		name: "Fonction anonyme",
		codeLanguage: "js",
		code: `const addition = function(a, b) {
  return a + b;
};`,
	},
	{
		name: "Fonction fléchée avec retour explicite",
		codeLanguage: "js",
		code: `const addition = (a, b) => {
  return a + b;
};`,
	},
	{
		name: "Fonction fléchée avec retour implicite",
		codeLanguage: "js",
		code: "const addition = (a, b) => a + b;",
	},
];

const jsIsEvenSnippets = [
	{
		name: "Fonction déclarée",
		codeLanguage: "js",
		code: `function isEven(number) {
	return number % 2 === 0;
}`,
	},
	{
		name: "Fonction anonyme",
		codeLanguage: "js",
		code: `const isEven = function(number) {
	return number % 2 === 0;
};`,
	},
	{
		name: "Fonction fléchée avec retour explicite",
		codeLanguage: "js",
		code: `const isEven = (number) => {
	return number % 2 === 0;
};`,
	},
	{
		name: "Fonction fléchée avec retour implicite",
		codeLanguage: "js",
		code: "const isEven = (number) => number % 2 === 0;",
	},
];

const jsCallIsEvenSnippets = [
	{
		name: "Appel de la fonction isEven",
		codeLanguage: "js",
		code: `console.log(isEven(4)); // true
console.log(isEven(5)); // false`,
	},
];

const jsBlockScopeSnippets = [
	{
		name: "Exemple avec let",
		withLineNumbers: true,
		codeLanguage: "js",
		code: `let x = 10;

if (true) {
	let x = 20;
	console.log(x); // 20
}

console.log(x); // 10`,
	},
	{
		name: "Exemple avec const",
		withLineNumbers: true,
		codeLanguage: "js",
		code: `const x = 10;

if (true) {
	const x = 20;
	console.log(x); // 20
}

console.log(x); // 10`,
	},
	{
		name: "Exemple avec var",
		withLineNumbers: true,
		codeLanguage: "js",
		code: `var x = 10;

if (true) {
	var x = 20;
	console.log(x); // 20
}

console.log(x); // 20`,
	},
];

const jsBlockScopeExplanations = [
	{
		name: "Utilisation de let",
		children: (
			<ul>
				<li>
					La variable <code>x</code> est déclarée avec <code>let</code> dans le
					scope global.
				</li>
				<li>
					Dans le bloc <code>if</code>, une nouvelle variable <code>x</code> est
					déclarée, masquant la variable globale.
				</li>
				<li>
					Lorsque nous affichons <code>x</code> à l'intérieur du bloc, il
					renvoie la valeur de la variable locale (20).
				</li>
				<li>
					Lorsque nous affichons <code>x</code> en dehors du bloc, il renvoie la
					valeur de la variable globale (10).
				</li>
			</ul>
		),
	},
	{
		name: "Utilisation de const",
		children: (
			<ul>
				<li>
					La variable <code>x</code> est déclarée avec <code>const</code> dans
					le scope global.
				</li>
				<li>
					Dans le bloc <code>if</code>, une nouvelle variable <code>x</code> est
					déclarée, masquant la variable globale.
				</li>
				<li>
					Lorsque nous affichons <code>x</code> à l'intérieur du bloc, il
					renvoie la valeur de la variable locale (20).
				</li>
				<li>
					Lorsque nous affichons <code>x</code> en dehors du bloc, il renvoie la
					valeur de la variable globale (10).
				</li>
			</ul>
		),
	},
	{
		name: "Utilisation de var",
		children: (
			<ul>
				<li>
					La variable <code>x</code> est déclarée avec <code>var</code> dans le
					scope global.
				</li>
				<li>
					Dans le bloc <code>if</code>, une nouvelle variable <code>x</code> est
					déclarée, remplaçant la variable globale.
				</li>
				<li>
					Lorsque nous affichons <code>x</code> à l'intérieur du bloc, il
					renvoie la valeur de la variable globale (20).
				</li>
				<li>
					Lorsque nous affichons <code>x</code> en dehors du bloc, il renvoie la
					valeur de la variable globale (20).
				</li>
			</ul>
		),
	},
];

const jsFunctionScopeSnippets = [
	{
		name: "Exemple avec let",
		withLineNumbers: true,
		codeLanguage: "js",
		code: `let x = 10;
		
function example() {
	let x = 20;
	let y = "Bonjour !";

	if (true) {
		let x = 30;
		console.log(x); // 30
	}

	console.log(x); // 20
}

example();
console.log(x); // 10
console.log(y); // ReferenceError: y is not defined`,
	},
	{
		name: "Exemple avec const",
		withLineNumbers: true,
		codeLanguage: "js",
		code: `const x = 10;

function example() {
	const x = 20;
	const y = "Bonjour !";

	if (true) {
		const x = 30;
		console.log(x); // 30
	}

	console.log(x); // 20
	console.log(y); // Bonjour !
}

example();
console.log(x); // 10
console.log(y); // ReferenceError: y is not defined`,
	},
	{
		name: "Exemple avec var",
		withLineNumbers: true,
		codeLanguage: "js",
		code: `var x = 10;

function example() {
	var x = 20;
	var y = "Bonjour !";

	if (true) {
		var x = 30;
		console.log(x); // 30
	}

	console.log(x); // 30
}

example();
console.log(x); // 10
console.log(y); // ReferenceError: y is not defined`,
	},
];

const jsHoistingSnippets = [
	{
		name: "Exemple avec let",
		withLineNumbers: true,
		codeLanguage: "js",
		code: `console.log(x); // ReferenceError: Cannot access 'x' before initialization

let x = 10;
console.log(x); // 10`,
	},
	{
		name: "Exemple avec const",
		withLineNumbers: true,
		codeLanguage: "js",
		code: `console.log(x); // ReferenceError: Cannot access 'x' before initialization

const x = 10;
console.log(x); // 10`,
	},
	{
		name: "Exemple avec var",
		withLineNumbers: true,
		codeLanguage: "js",
		code: `console.log(x); // undefined

var x = 10;
console.log(x); // 10`,
	},
];

export default {
	jsFunctions: () => <Snippet snippets={jsFunctionsSnippets} />,
	jsIsEven: () => <Snippet snippets={jsIsEvenSnippets} />,
	jsCallIsEven: () => <Snippet snippets={jsCallIsEvenSnippets} />,
	jsBlockScope: () => <Snippet snippets={jsBlockScopeSnippets} />,
	jsBlockScopeExplanations: () => (
		<Snippet snippets={jsBlockScopeExplanations} />
	),
	jsFunctionScope: () => <Snippet snippets={jsFunctionScopeSnippets} />,
	jsHoisting: () => <Snippet snippets={jsHoistingSnippets} />,
};
