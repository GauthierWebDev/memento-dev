import { Snippet } from "@/components/Snippet";

const jsDomSelectionExplanations = [
	{
		name: "document.getElementById(id)",
		codeLanguage: "js",
		code: `// Sélectionner un élément par son ID
// Ici, on sélectionne l'élément qui a l'ID "id"

const element = document.getElementById("id");`,
	},
];

export default {
	jsDomSelectionExplanations: () => (
		<Snippet snippets={jsDomSelectionExplanations} />
	),
};
