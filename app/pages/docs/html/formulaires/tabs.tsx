import { Snippet } from "@/components/Snippet";

const htmlBasicEmptyFormSnippets = [
	{
		name: "Déclaration d'un formulaire HTML",
		codeLanguage: "html",
		code: `<form>
  <!-- Éléments du formulaire -->
</form>`,
	},
];

const htmlControlledTextInputSnippets = [
	{
		name: "Exemple d'un champ de texte contrôlé",
		codeLanguage: "html",
		code: `<input
  type="text"
  maxlength="20"
  pattern="[a-zA-Z0-9]{1,20}"
>`,
	},
];

const htmlRadioButtonSnippets = [
	{
		name: "Exemple d'un groupe de boutons radio",
		codeLanguage: "html",
		code: `<input
  type="radio"
  name="genre"
  value="male"
>
<input
  type="radio"
  name="genre"
  value="female"
>
<input
  type="radio"
  name="genre"
  value="other"
>`,
	},
];

const htmlCheckboxSnippets = [
	{
		name: "Exemple d'une case à cocher",
		codeLanguage: "html",
		code: `<input
  type="checkbox"
  name="newsletter"
  value="subscribe"
>`,
	},
	{
		name: "Exemple d'un groupe de cases à cocher",
		codeLanguage: "html",
		code: `<input
  type="checkbox"
  name="interests"
  value="sports"
>
<input
  type="checkbox"
  name="interests"
  value="music"
>
<input
  type="checkbox"
  name="interests"
  value="movies"
>`,
	},
];

const htmlSelectSnippets = [
	{
		name: "Exemple d'une liste déroulante",
		codeLanguage: "html",
		code: `<select name="pays">
  <option value="france">France</option>
  <option value="espagne">Espagne</option>
  <option value="italie">Italie</option>
  <option value="allemagne">Allemagne</option>
  <option value="royaume-uni">Royaume-Uni</option>
</select>`,
	},
	{
		name: "Exemple d'une liste déroulante avec plusieurs options",
		codeLanguage: "html",
		code: `<select name="langues" multiple>
  <option value="francais">Français</option>
  <option value="anglais">Anglais</option>
  <option value="espagnol">Espagnol</option>
  <option value="allemand">Allemand</option>
  <option value="italien">Italien</option>
</select>`,
	},
];

const htmlTextAreaSnippets = [
	{
		name: "Exemple d'une zone de texte",
		codeLanguage: "html",
		code: `<textarea name="commentaire" rows="4" cols="50">
</textarea>`,
	},
];

const htmlSubmitButtonSnippets = [
	{
		name: "Exemple d'un bouton de soumission",
		codeLanguage: "html",
		code: `<button type="submit">Envoyer</button>`,
	},
	{
		name: "Exemple d'un input de type submit",
		codeLanguage: "html",
		code: `<input type="submit" value="Envoyer">`,
	},
];

export default {
	htmlBasicEmptyForm: () => <Snippet snippets={htmlBasicEmptyFormSnippets} />,
	htmlControlledTextInput: () => (
		<Snippet snippets={htmlControlledTextInputSnippets} />
	),
	htmlRadioButton: () => <Snippet snippets={htmlRadioButtonSnippets} />,
	htmlCheckbox: () => <Snippet snippets={htmlCheckboxSnippets} />,
	htmlSelect: () => <Snippet snippets={htmlSelectSnippets} />,
	htmlTextArea: () => <Snippet snippets={htmlTextAreaSnippets} />,
	htmlSubmitButton: () => <Snippet snippets={htmlSubmitButtonSnippets} />,
};
