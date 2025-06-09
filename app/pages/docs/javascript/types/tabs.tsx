import { Snippet } from "@/components/Snippet";

const jsObjectExampleSnippets = [
	{
		name: "Exemple d'objet JavaScript",
		codeLanguage: "js",
		code: `const personne = {
	nom: "John",
	age: 30,
};

console.log(personne.nom); // Affiche "John"
console.log(personne.age); // Affiche 30`,
	},
	{
		name: "Exemple de tableau associatif PHP",
		codeLanguage: "php",
		code: `$personne = [
	"nom" => "John",
	"age" => 30,
];

echo $personne["nom"]; // Affiche "John"
echo $personne["age"]; // Affiche 30`,
	},
];

const jsArrayExampleSnippets = [
	{
		name: "Exemple de tableau JavaScript",
		codeLanguage: "js",
		code: `const fruits = ["pomme", "banane", "orange"];

console.log(fruits[0]); // Affiche "pomme"
console.log(fruits[1]); // Affiche "banane"
console.log(fruits[2]); // Affiche "orange"`,
	},
	{
		name: "Exemple de tableau PHP",
		codeLanguage: "php",
		code: `$fruits = ["pomme", "banane", "orange"];

echo $fruits[0]; // Affiche "pomme"
echo $fruits[1]; // Affiche "banane"
echo $fruits[2]; // Affiche "orange"`,
	},
];

const jsWrongTypesAdditionSnippets = [
	{
		name: "Addition de types différents",
		codeLanguage: "js",
		code: `const a = 5;
const b = "10";

const resultat = a + b;`,
	},
];

const jsWrongTypesBooleanSnippets = [
	{
		name: "Addition de types différents",
		codeLanguage: "js",
		code: `const a = 5;
const b = "5";

const estVrai = a == b;`,
	},
];

const jsTypescriptExample = [
	{
		name: "Exemple de constante JavaScript",
		codeLanguage: "js",
		code: "const a = 5; // Type implicite : number",
	},
	{
		name: "Exemple de constante TypeScript",
		codeLanguage: "ts",
		code: "const a: number = 5; // Type explicite : number",
	},
	{
		name: "Exemple de variable JavaScript",
		codeLanguage: "js",
		code: "let a; // Type implicite : any",
	},
	{
		name: "Exemple de variable TypeScript",
		codeLanguage: "ts",
		code: "let a: number; // Type explicite : number",
	},
];

export default {
	jsObjectExample: () => <Snippet snippets={jsObjectExampleSnippets} />,
	jsArrayExample: () => <Snippet snippets={jsArrayExampleSnippets} />,
	jsWrongTypesAddition: () => (
		<Snippet snippets={jsWrongTypesAdditionSnippets} />
	),
	jsWrongTypesBoolean: () => <Snippet snippets={jsWrongTypesBooleanSnippets} />,
	jsTypescriptExample: () => <Snippet snippets={jsTypescriptExample} />,
};
