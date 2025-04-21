import { Snippet } from "@/components/Snippet";

const reactCreateElementSnippets = [
	{
		name: "HTML",
		codeLanguage: "html",
		code: '<button class="button">Clique moi !</button>',
	},
	{
		name: "React sans JSX",
		codeLanguage: "js",
		code: `React.createElement("button", { className: "button" }, "Clique moi !");`,
	},
	{
		name: "React avec JSX",
		codeLanguage: "tsx",
		code: `<button className="button">Clique moi !</button>`,
	},
];

const advancedReactCreateElementSnippets = [
	{
		name: "React sans JSX",
		codeLanguage: "js",
		withLineNumbers: true,
		code: `React.createElement(
  React.Fragment,
  null,
  React.createElement("h2", null, "Formulaire de contact"),
  React.createElement(
    "form",
    { onSubmit: handleSubmit },
    React.createElement(
      "fieldset",
      null,
      React.createElement("label", { htmlFor: "lastname" }, "Nom"),
      React.createElement("input", { type: "text", name: "lastname", id: "lastname", required: true }),
    ),
    React.createElement(
      "fieldset",
      null,
      React.createElement("label", { htmlFor: "email" }, "Email"),
      React.createElement("input", { type: "email", name: "email", id: "email", required: true }),
    ),
    React.createElement(
      "fieldset",
      null,
      React.createElement("label", { htmlFor: "message" }, "Message"),
      React.createElement("textarea", { name: "message", id: "message", required: true }),
    ),
    React.createElement(
      "fieldset",
      null,
      React.createElement(
        "label",
        { htmlFor: "gdpr" },
        React.createElement("input", { type: "checkbox", name: "gdpr", id: "gdpr", required: true }),
        "J'accepte que mes données soient utilisées pour me recontacter",
      ),
    ),
    React.createElement("button", { type: "submit" }, "Envoyer"),
  ),
);`,
	},
	{
		name: "React avec JSX",
		codeLanguage: "tsx",
		withLineNumbers: true,
		code: `<React.Fragment>
  <h2>Formulaire de contact</h2>
  <form onSubmit={handleSubmit}>
    <fieldset>
      <label htmlFor="lastname">Nom</label>
      <input type="text" name="lastname" id="lastname" required>
    </fieldset>

    <fieldset>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" required>
    </fieldset>

    <fieldset>
      <label for="message">Message</label>
      <textarea name="message" id="message" required></textarea>
    </fieldset>

    <fieldset>
      <label for="gdpr">
        <input type="checkbox" name="gdpr" id="gdpr" required>
        J'accepte que mes données soient utilisées pour me recontacter
      </label>
    </fieldset>

    <button type="submit">Envoyer</button>
  </form>
</React.Fragment>`,
	},
];

const reactVariablesAndFunctionsSnippets = [
	{
		name: "Variables",
		codeLanguage: "jsx",
		code: `const name = "Jean Dupont";

return <h1>Bonjour {name} !</h1>;`,
	},
	{
		name: "Fonctions",
		codeLanguage: "jsx",
		code: `const sayHello = () => "Bonjour !";

return <p>{sayHello()}</p>;`,
	},
];

const reactExpressionsSnippets = [
	{
		name: "Condition ternaire",
		codeLanguage: "jsx",
		code: `const age = 18;

return <p>{age >= 18 ? "Majeur" : "Mineur"}</p>;`,
	},
	{
		name: "Affichage conditionnel",
		codeLanguage: "jsx",
		code: `const isLogged = false;

return (
  <div>
    {isLogged && <p>Bienvenue sur notre site !</p>}
    {!isLogged && <p>Connectez-vous pour accéder à notre site</p>}
  </div>
);`,
	},
];

const reactLoopsFruitsSnippets = [
	{
		name: "Définition des fruits",
		codeLanguage: "js",
		code: `const fruits = ["pomme", "banane", "fraise"];`,
	},
];

const reactLoopsSnippets = [
	{
		name: "for",
		codeLanguage: "js",
		code: `for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}`,
	},
	{
		name: "forEach",
		codeLanguage: "js",
		code: `fruits.forEach((fruit) => {
	console.log(fruits[i]);
	});`,
	},
	{
		name: "for",
		codeLanguage: "js",
		code: `fruits.map((fruit) => {
	console.log(fruits[i]);
	});`,
	},
];

const reactMapLoopSnippets = [
	{
		name: "Mapping",
		codeLanguage: "jsx",
		code: `const fruits = ["pomme", "banane", "fraise"];

return (
  <ul>
    {fruits.map((fruit) => (
      <li key={fruit}>{fruit}</li>
    ))}
  </ul>
);`,
	},
];

const reactPropsSnippets = [
	{
		name: "JSX",
		codeLanguage: "jsx",
		code: `const Button = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};`,
	},
	{
		name: "TSX",
		codeLanguage: "tsx",
		code: `type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};`,
	},
];

export default {
	reactCreateElement: () => <Snippet snippets={reactCreateElementSnippets} />,
	advancedReactCreateElement: () => (
		<Snippet snippets={advancedReactCreateElementSnippets} />
	),
	reactVariablesAndFunctions: () => (
		<Snippet snippets={reactVariablesAndFunctionsSnippets} />
	),
	reactExpressions: () => <Snippet snippets={reactExpressionsSnippets} />,
	reactLoopsFruits: () => <Snippet snippets={reactLoopsFruitsSnippets} />,
	reactLoops: () => <Snippet snippets={reactLoopsSnippets} />,
	reactMapLoop: () => <Snippet snippets={reactMapLoopSnippets} />,
	reactProps: () => <Snippet snippets={reactPropsSnippets} />,
};
