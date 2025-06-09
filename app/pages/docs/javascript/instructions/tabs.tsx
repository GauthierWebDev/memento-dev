import { Snippet } from "@/components/Snippet";

const jsBasicInstructionsSnippets = [
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

const pseudoCodeSnippets = [
	{
		name: "Pseudo-code d'affichage",
		codeLanguage: "pseudocode",
		code: `AFFICHER "Bonjour, le monde!"`,
	},
	{
		name: "Pseudo-code d'une fonction simple",
		codeLanguage: "pseudocode",
		code: `FONCTION somme(a, b)
	RETOURNER a + b
FIN FONCTION`,
	},
	{
		name: "Pseudo-code d'une boucle",
		codeLanguage: "pseudocode",
		code: `POUR i DE 1 À 10
	AFFICHER i
FIN POUR`,
	},
	{
		name: "Pseudo-code d'une condition",
		codeLanguage: "pseudocode",
		code: `SI age >= 18 ALORS
	AFFICHER "Vous êtes majeur."
SINON
	AFFICHER "Vous êtes mineur."
FIN SI`,
	},
];

const pseudoCodeFinalSnippets = [
	{
		name: "Pseudo-code du challenge",
		codeLanguage: "pseudocode",
		withLineNumbers: true,
		code: `DEBUT
	VARIABLE nom
	AFFICHER "Entrez votre nom :"
	LIRE nom

	VARIABLE age
	AFFICHER "Entrez votre âge :"
	LIRE age

	SI age >= 18 ALORS
		AFFICHER "Bienvenue " + nom + ", vous êtes majeur."
	SINON
		AFFICHER "Désolé " + nom + ", vous êtes mineur."
	FIN SI
FIN`,
	},
];

const jsFinalSnippets = [
	{
		name: "Code du challenge",
		codeLanguage: "js",
		withLineNumbers: true,
		code: `// Demander le nom de l'utilisateur
const nom = prompt("Entrez votre nom :");

// Demander l'âge de l'utilisateur
const age = prompt("Entrez votre âge :");

// Vérifier si l'utilisateur est majeur ou mineur
if (age >= 18) {
	console.log("Bienvenue " + nom + ", vous êtes majeur.");
} else {
	console.log("Désolé " + nom + ", vous êtes mineur.");
}`,
	},
	...pseudoCodeFinalSnippets,
];

export default {
	jsBasicInstructions: () => <Snippet snippets={jsBasicInstructionsSnippets} />,
	pseudoCode: () => <Snippet snippets={pseudoCodeSnippets} />,
	pseudoCodeFinal: () => <Snippet snippets={pseudoCodeFinalSnippets} />,
	jsFinal: () => <Snippet snippets={jsFinalSnippets} />,
};
