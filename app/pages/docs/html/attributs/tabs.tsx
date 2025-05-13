import { Snippet } from "@/components/Snippet";

const htmlBasicAttributesSnippets = [
	{
		name: "Exemple d'attributs sur une image",
		codeLanguage: "html",
		withLineNumbers: true,
		code: `<img
  src="image.jpg"
  alt="Une image d'exemple"
  width="300"
  height="200"
  loading="lazy"
>`,
	},
	{
		name: "Exemple d'attributs sur un lien",
		codeLanguage: "html",
		withLineNumbers: true,
		code: `<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  title="Visitez notre site"
  download
>
  Visitez notre site
</a>`,
	},
];

export default {
	htmlBasicAttributes: () => <Snippet snippets={htmlBasicAttributesSnippets} />,
};
