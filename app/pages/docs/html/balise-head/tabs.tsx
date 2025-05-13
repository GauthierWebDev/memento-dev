import { Snippet } from "@/components/Snippet";

const htmlBasicHeadSnippets = [
	{
		name: "Exemple de la balise head",
		codeLanguage: "html",
		withLineNumbers: true,
		code: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mon super site</title>
  <meta name="description" content="Ceci est un exemple de page HTML.">
</head>

<body></body>
</html>`,
	},
];

const htmlStylesAndScriptsSnippets = [
	{
		name: "Exemple d'inclusion de styles et de scripts",
		codeLanguage: "html",
		withLineNumbers: true,
		code: `<head>
  <!-- Feuille de style CSS -->
  <link rel="stylesheet" href="/styles/styles.css">

  <!-- Script JavaScript -->
  <script src="/scripts/app.js"></script>
</head>`,
	},
];

export default {
	htmlBasicHead: () => <Snippet snippets={htmlBasicHeadSnippets} />,
	htmlStylesAndScripts: () => (
		<Snippet snippets={htmlStylesAndScriptsSnippets} />
	),
};
