import { Snippet } from "@/components/Snippet";

const reactLocalVariableSnippets = [
	{
		name: "Variable locale au composant",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `import React from "react";

export function Counter() {
  let count = 0;

  function increment() {
    count += 1;
    console.log("Increment", count);
  }

  return <button onClick={increment}>{count}</button>;
}`,
	},
];

const reactStateDeclarationSnippets = [
	{
		name: "Déclaration d'état avec le hook `useState`",
		codeLanguage: "jsx",
		code: "const [count, setCount] = React.useState(0);",
	},
];

const reactStateUsageSnippets = [
	{
		name: "Utilisation de l'état avec le hook `useState`",
		codeLanguage: "jsx",
		code: `import React from "react";

export function Counter() {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount(count + 1);
  }

  return <button onClick={increment}>{count}</button>;
}`,
	},
];

export default {
	reactLocalVariable: () => <Snippet snippets={reactLocalVariableSnippets} />,
	reactStateDeclaration: () => (
		<Snippet snippets={reactStateDeclarationSnippets} />
	),
	reactStateUsage: () => <Snippet snippets={reactStateUsageSnippets} />,
};
