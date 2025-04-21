import { Snippet } from "@/components/Snippet";

const reactButtonComponentSnippets = [
	{
		name: "Composant Button",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `import React from "react";

export function Button() {
  return <button>Click me</button>;
}`,
	},
];

const reactUseButtonComponentSnippets = [
	{
		name: "Utilisation du composant Button",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `import React from "react";

import { Button } from "./Button";

export function App() {
  return (
    <div>
      <h1>Mon premier composant React</h1>
      <Button />
    </div>
  );
}`,
	},
];

const reactButtonComponentPropsSnippets = [
	{
		name: "JSX",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `import React from "react";

export function Button(props) {
  return <button onClick={props.onClick}>{props.children}</button>;
}`,
	},
	{
		name: "TSX",
		codeLanguage: "tsx",
		withLineNumbers: true,
		code: `import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>{props.children}</button>;
}`,
	},
];

const reactUseButtonComponentPropsSnippets = [
	{
		name: "Ajout de la prop `onClick`",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `import React from "react";

import { Button } from "./Button";

export function App() {
  function handleClick() {
    console.log("Je suis cliqué !");
  }

  return (
    <div>
      <h1>Mon premier composant React</h1>
      <Button onClick={handleClick} />
    </div>
  );
}`,
	},
];

export default {
	reactButtonComponent: () => (
		<Snippet snippets={reactButtonComponentSnippets} />
	),
	reactUseButtonComponent: () => (
		<Snippet snippets={reactUseButtonComponentSnippets} />
	),
	reactButtonComponentProps: () => (
		<Snippet snippets={reactButtonComponentPropsSnippets} />
	),
	reactUseButtonComponentProps: () => (
		<Snippet snippets={reactUseButtonComponentPropsSnippets} />
	),
};
