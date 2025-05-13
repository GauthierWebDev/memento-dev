import { Snippet } from "@/components/Snippet";

const htmlBasicBodySnippets = [
	{
		name: "Exemple de la balise body",
		codeLanguage: "html",
		withLineNumbers: true,
		code: `<!DOCTYPE html>
<html lang="fr">
<head></head>

<body>
  <h1>Bienvenue sur mon site !</h1>
  <p>Ceci est un exemple de page HTML.</p>
  <img src="image.jpg" alt="Une image d'exemple">
  <a href="https://www.example.com">Visitez notre site</a>
</body>
</html>`,
	},
];

const htmlBasicAnchorSnippets = [
	{
		name: "Lien hypertexte vers une page",
		codeLanguage: "html",
		code: `<a href="https://memento-dev.fr">Memento Dev</a>`,
	},
	{
		name: "Lien hypertexte vers une section de la même page",
		codeLanguage: "html",
		code: `<a href="#4-liens-hypertextes">4. Liens hypertextes</a>`,
	},
];

const htmlBasicListSnippets = [
	{
		name: "Liste non ordonnée",
		codeLanguage: "html",
		withLineNumbers: true,
		code: `<ul>
	<li>Élément A</li>
	<li>Élément B</li>
	<li>Élément C</li>
</ul>`,
	},
	{
		name: "Liste ordonnée",
		codeLanguage: "html",
		withLineNumbers: true,
		code: `<ol>
	<li>Élément 1</li>
	<li>Élément 2</li>
	<li>Élément 3</li>
</ol>`,
	},
];

const htmlBasicTableSnippets = [
	{
		name: "Tableau simple",
		codeLanguage: "html",
		withLineNumbers: true,
		code: `<table>
	<tr>
		<th>Nom</th>
		<th>Âge</th>
	</tr>
	<tr>
		<td>Christophe</td>
		<td>30</td>
	</tr>
	<tr>
		<td>Élodie</td>
		<td>25</td>
	</tr>
</table>`,
	},
	{
		name: "Tableau avec structure",
		codeLanguage: "html",
		withLineNumbers: true,
		code: `<table>
	<thead>
		<tr>
			<th>Nom</th>
			<th>Âge</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Christophe</td>
			<td>30</td>
		</tr>
		<tr>
			<td>Élodie</td>
			<td>25</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td colspan="2">Crédit : &copy; Source</td>
		</tr>
	</tfoot>
</table>`,
	},
];

export default {
	htmlBasicBody: () => <Snippet snippets={htmlBasicBodySnippets} />,
	htmlBasicAnchor: () => <Snippet snippets={htmlBasicAnchorSnippets} />,
	htmlBasicList: () => <Snippet snippets={htmlBasicListSnippets} />,
	htmlBasicTable: () => <Snippet snippets={htmlBasicTableSnippets} />,
};
