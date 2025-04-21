import { Snippet } from "@/components/Snippet";

const reactClassComponentSnippets = [
	{
		name: "JSX",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}`,
	},
	{
		name: "TSX",
		codeLanguage: "tsx",
		withLineNumbers: true,
		code: `import React from 'react';

type MyComponentState = {
  count: number;
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state: MyComponentState = { count: 0 };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component unmounted');
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}`,
	},
];

const reactUseEffectSyntaxesSnippets = [
	{
		name: "Syntaxe 1",
		codeLanguage: "jsx",
		code: `useEffect(() => {
	// Code à exécuter
}, []);`,
	},
	{
		name: "Syntaxe 2",
		codeLanguage: "jsx",
		code: `useEffect(() => {
	// Code à exécuter
}, [props.uneProp]);`,
	},
	{
		name: "Syntaxe 3",
		codeLanguage: "jsx",
		code: `useEffect(() => {
	// Code à exécuter
});`,
	},
];

const reactUseEffectMountSnippets = [
	{
		name: "Exemple de `useEffect` pour le montage",
		codeLanguage: "jsx",
		code: `useEffect(() => {
	// Code à exécuter lors du montage
	// (équivalent à componentDidMount)
}, []);`,
	},
];

const reactUseEffectUpdateSnippets = [
	{
		name: "Exemple de `useEffect` pour la mise à jour",
		codeLanguage: "jsx",
		code: `useEffect(() => {
	// Code à exécuter lors du montage et de la mise à jour
	// (équivalent à componentDidMount et componentDidUpdate)
});`,
	},
];

const reactUseEffectUpdateDependencySnippets = [
	{
		name: "Exemple de `useEffect` pour la mise à jour",
		codeLanguage: "jsx",
		code: `useEffect(() => {
	// Code à exécuter lors du montage et de la mise à jour
	// (équivalent à componentDidMount et componentDidUpdate)
}, [props.uneProp]);`,
	},
];

const reactUseEffectUnmountSnippets = [
	{
		name: "Exemple de `useEffect` pour le démontage",
		codeLanguage: "jsx",
		code: `useEffect(() => {
	// Code à exécuter lors du montage

	return () => {
		// Code à exécuter lors du démontage
		// (équivalent à componentWillUnmount)
	};
}, []);`,
	},
];

const reactUseEffectExampleSnippets = [
	{
		name: "JSX",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `import React from "react";

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  React.useEffect(() => {
    console.log("Component updated");
  });

  const increment = () => setCount(count + 1);

  return <button onClick={increment}>{count}</button>;
};`,
	},
	{
		name: "TSX",
		codeLanguage: "tsx",
		withLineNumbers: true,
		code: `import React from "react";

export const Counter = () => {
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  React.useEffect(() => {
    console.log("Component updated");
  });

  const increment = () => setCount(count + 1);

  return <button onClick={increment}>{count}</button>;
};`,
	},
];

const reactUseEffectChallengeSnippets = [
	{
		name: "Testons le cycle de vie d'un composant",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `import React from "react";

export const MyComponent = () => {
  React.useEffect(() => {
    console.log("1");
  });

  console.log("2");

  React.useEffect(() => {
    console.log("3");
  }, []);

  const logInRender = () => {
    console.log("4");
    return null;
  };

  return <div>{logInRender()}</div>;
};`,
	},
];

export default {
	reactClassComponent: () => <Snippet snippets={reactClassComponentSnippets} />,
	reactUseEffectSyntaxes: () => (
		<Snippet snippets={reactUseEffectSyntaxesSnippets} />
	),
	reactUseEffectMount: () => <Snippet snippets={reactUseEffectMountSnippets} />,
	reactUseEffectUpdate: () => (
		<Snippet snippets={reactUseEffectUpdateSnippets} />
	),
	reactUseEffectUpdateDependency: () => (
		<Snippet snippets={reactUseEffectUpdateDependencySnippets} />
	),
	reactUseEffectUnmount: () => (
		<Snippet snippets={reactUseEffectUnmountSnippets} />
	),
	reactUseEffectExample: () => (
		<Snippet snippets={reactUseEffectExampleSnippets} />
	),
	reactUseEffectChallenge: () => (
		<Snippet snippets={reactUseEffectChallengeSnippets} />
	),
};
