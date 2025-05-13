import { Snippet } from "@/components/Snippet";

const jsInstructionsSnippets = [
	{
		name: "Instruction d'affichage dans la console",
		codeLanguage: "js",
		code: `console.log("Hello, World!");`,
	},
	{
		name: "Instruction de déclaration",
		codeLanguage: "js",
		code: `const nom = "John Doe";`,
	},
	{
		name: "Instruction de condition",
		codeLanguage: "js",
		code: `if (age >= 18) {
  console.log("Vous êtes majeur.");
} else {
  console.log("Vous êtes mineur.");
}`,
	},
];

const jsVariablesSnippets = [
	{
		name: "Déclaration de variables",
		codeLanguage: "js",
		code: `let nom = "John Doe";
const age = 30;
var ville = "Paris";`,
	},
];

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

const jsCommentsSnippets = [
	{
		name: "Commentaire sur une ligne",
		codeLanguage: "js",
		code: "// Ceci est un commentaire sur une ligne",
	},
	{
		name: "Commentaire sur plusieurs lignes",
		codeLanguage: "js",
		code: `/*
Ceci est un commentaire
sur plusieurs lignes
*/`,
	},
	{
		name: "Commentaire de documentation",
		codeLanguage: "js",
		code: `/**
* Ceci est un commentaire de documentation
* @param {number} a - Le premier paramètre
* @param {number} b - Le deuxième paramètre
* @returns {number} La somme de a et b
*/`,
	},
];

export default {
	jsInstructions: () => <Snippet snippets={jsInstructionsSnippets} />,
	jsVariables: () => <Snippet snippets={jsVariablesSnippets} />,
	jsFunctions: () => <Snippet snippets={jsFunctionsSnippets} />,
	jsComments: () => <Snippet snippets={jsCommentsSnippets} />,
};
