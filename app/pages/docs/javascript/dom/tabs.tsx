import { Snippet } from "@/components/Snippet";

const jsDomExplanations = [
	{
		name: "Livre et ses chapitres",
		children: (
			<ul>
				<li>
					<strong>Document</strong> : Le livre entier, qui contient tous les
					chapitres.
				</li>
				<li>
					<strong>Élément</strong> : Les chapitres du livre, chacun avec son
					titre et son contenu.
				</li>
				<li>
					<strong>Attribut</strong> : Les notes ou les annotations dans les
					marges qui décrivent ou mettent en valeur certains passages.
				</li>
				<li>
					<strong>Texte</strong> : Le contenu réel des pages, les mots et les
					paragraphes qui sont écrits.
				</li>
			</ul>
		),
	},
	{
		name: "Arbre généalogique",
		children: (
			<ul>
				<li>
					<strong>Document</strong> : L'arbre généalogique complet, représentant
					toute la famille.
				</li>
				<li>
					<strong>Élément</strong> : Les branches de l'arbre, représentant les
					différentes générations ou familles.
				</li>
				<li>
					<strong>Attribut</strong> : Les détails sur chaque personne, comme
					leur date de naissance ou leur métier.
				</li>
				<li>
					<strong>Texte</strong> : Les noms des personnes dans l'arbre, les
					membres individuels de la famille.
				</li>
			</ul>
		),
	},
	{
		name: "Système solaire",
		children: (
			<ul>
				<li>
					<strong>Document</strong> : Le système solaire complet, avec toutes
					ses planètes et étoiles.
				</li>
				<li>
					<strong>Élément</strong> : Les planètes individuelles, chacune avec
					ses propres caractéristiques et orbites.
				</li>
				<li>
					<strong>Attribut</strong> : Les détails des planètes, comme leur
					taille, leur composition ou leur distance par rapport au soleil.
				</li>
				<li>
					<strong>Texte</strong> : Les noms des planètes et des étoiles, les
					éléments individuels du système solaire.
				</li>
			</ul>
		),
	},
	{
		name: "Organisation d'une entreprise",
		children: (
			<ul>
				<li>
					<strong>Document</strong> : L'entreprise entière, avec tous ses
					départements et employés.
				</li>
				<li>
					<strong>Élément</strong> : Les différents départements, comme les
					ressources humaines, la finance ou le marketing.
				</li>
				<li>
					<strong>Attribut</strong> : Les détails des employés, comme leur
					poste, leur bureau ou leur salaire.
				</li>
				<li>
					<strong>Texte</strong> : Les noms des employés, les personnes qui
					travaillent dans chaque département.
				</li>
			</ul>
		),
	},
];

const jsDomSelectionExplanations = [
	{
		name: "document.getElementById(id)",
		codeLanguage: "js",
		code: `// Sélectionner un élément par son ID
// Ici, on sélectionne l'élément qui a l'ID "id"

const element = document.getElementById("id");`,
	},
	{
		name: "document.getElementsByClassName(className)",
		codeLanguage: "js",
		code: `// Sélectionner tous les éléments par leur classe
// Ici, on sélectionne tous les éléments qui ont la classe "css-class"

const elements = document.getElementsByClassName("css-class");`,
	},
	{
		name: "document.getElementsByTagName(tagName)",
		codeLanguage: "js",
		code: `// Sélectionner tous les éléments par leur balise
// Ici, on sélectionne tous les éléments qui sont des paragraphes

const elements = document.getElementsByTagName("p");`,
	},
	{
		name: "document.querySelector(selector)",
		codeLanguage: "js",
		code: `// Sélectionner le premier élément qui correspond au sélecteur
// Ici, on sélectionne le premier élément qui a la classe "css-class"

const element = document.querySelector(".css-class");`,
	},
	{
		name: "document.querySelectorAll(selector)",
		codeLanguage: "js",
		code: `// Sélectionner tous les éléments qui correspondent au sélecteur
// Ici, on sélectionne tous les éléments qui ont la classe "css-class"

const elements = document.querySelectorAll(".css-class");`,
	},
];

const jsDomContentModificationExplanations = [
	{
		name: "element.innerHTML",
		codeLanguage: "js",
		code: `// Modifier le contenu HTML de l'élément

const element = document.getElementById("id");

element.innerHTML = "<p>Nouveau contenu</p>";`,
	},
	{
		name: "element.innerText",
		codeLanguage: "js",
		code: `// Modifier le contenu texte de l'élément

const element = document.getElementById("id");

element.innerText = "Nouveau contenu";`,
	},
	{
		name: "element.textContent",
		codeLanguage: "js",
		code: `// Modifier le contenu texte de l'élément

const element = document.getElementById("id");

element.textContent = "Nouveau contenu";`,
	},
];

const jsDomAttributesModificationExplanations = [
	{
		name: "Modification de l'attribut src",
		codeLanguage: "js",
		code: `const image = document.getElementById("image-id");

image.setAttribute("src", "https://example.com/image.jpg");`,
	},
];

const jsDomAttributesDeletionExplanations = [
	{
		name: "Suppression de l'attribut src",
		codeLanguage: "js",
		code: `const image = document.getElementById("image-id");

image.removeAttribute("src");`,
	},
];

const jsDomAttributesVerificationExplanations = [
	{
		name: "Vérification de l'attribut src",
		codeLanguage: "js",
		code: `const image = document.getElementById("image-id");

if (image.hasAttribute("src")) {
	const attributeValue = image.getAttribute("src");
	console.log("L'attribut src a la valeur :", attributeValue);
}`,
	},
	{
		name: "Alterner un attribut avec toggleAttribute",
		codeLanguage: "js",
		code: `const button = document.getElementById("button-id");

// Alterne l'attribut disabled entre true et false (vrai ou faux)
button.toggleAttribute("disabled");`,
	},
	{
		name: "Alterner un attribut avec toggleAttribute avec un argument",
		codeLanguage: "js",
		code: `const button = document.getElementById("button-id");

const shouldDisable = true;

// Passe l'attribut disabled à un état forcé,
// en fonction de la valeur de shouldDisable
button.toggleAttribute("disabled", shouldDisable);`,
	},
];

const jsDomClassesModificationExplanations = [
	{
		name: "Ajouter une classe avec add",
		codeLanguage: "js",
		code: `const element = document.getElementById("element-id");

// Ajoute la classe css-class
element.classList.add("css-class");`,
	},
	{
		name: "Ajouter plusieurs classes avec add",
		codeLanguage: "js",
		code: `const element = document.getElementById("element-id");

// Ajoute les classes css-class, css-class-2 et css-class-3
element.classList.add("css-class", "css-class-2", "css-class-3");`,
	},
	{
		name: "Supprimer une classe avec remove",
		codeLanguage: "js",
		code: `const element = document.getElementById("element-id");

// Supprime la classe css-class
element.classList.remove("css-class");`,
	},
	{
		name: "Supprimer plusieurs classes avec remove",
		codeLanguage: "js",
		code: `const element = document.getElementById("element-id");

// Supprime les classes css-class, css-class-2 et css-class-3
element.classList.remove("css-class", "css-class-2", "css-class-3");`,
	},
	{
		name: "Vérifier si un élément a une classe avec contains",
		codeLanguage: "js",
		code: `const element = document.getElementById("element-id");

// Retourne true si l'élément a la classe css-class, false sinon
element.classList.contains("css-class");`,
	},
	{
		name: "Alterner une classe avec toggle",
		codeLanguage: "js",
		code: `const element = document.getElementById("element-id");

// Ajoute ou supprime la classe css-class,
// en fonction de sa présence ou non
element.classList.toggle("css-class");`,
	},
	{
		name: "Alterner une classe avec toggle avec un argument",
		codeLanguage: "js",
		code: `const element = document.getElementById("element-id");

const shouldToggle = true;

// Alterne la classe css-class entre true et false (vrai ou faux),
// en fonction de la valeur de shouldToggle
element.classList.toggle("css-class", shouldToggle);`,
	},
];

const jsDomStylesModificationExplanations = [
	{
		name: "Modification de la couleur de texte",
		codeLanguage: "js",
		code: `const element = document.getElementById("element-id");

element.style.setProperty("color", "red");`,
	},
	{
		name: "Récupération de la valeur d'un style",
		codeLanguage: "js",
		code: `const element = document.getElementById("element-id");

const styleValue = element.style.getPropertyValue("color");`,
	},
	{
		name: "Suppression d'un style",
		codeLanguage: "js",
		code: `const element = document.getElementById("element-id");

element.style.removeProperty("color");`,
	},
];

const jsDomCreationExplanations = [
	{
		name: "Création d'un élément",
		codeLanguage: "js",
		code: `const element = document.createElement("div");`,
	},
];

const jsDomAppendChildExplanations = [
	{
		name: "Ajout d'un élément à la page",
		codeLanguage: "js",
		code: `const element = document.createElement("div");

document.body.appendChild(element);`,
	},
];

export default {
	jsDomExplanations: () => <Snippet snippets={jsDomExplanations} />,
	jsDomSelectionExplanations: () => (
		<Snippet snippets={jsDomSelectionExplanations} />
	),
	jsDomContentModificationExplanations: () => (
		<Snippet snippets={jsDomContentModificationExplanations} />
	),
	jsDomAttributesModificationExplanations: () => (
		<Snippet snippets={jsDomAttributesModificationExplanations} />
	),
	jsDomAttributesDeletionExplanations: () => (
		<Snippet snippets={jsDomAttributesDeletionExplanations} />
	),
	jsDomAttributesVerificationExplanations: () => (
		<Snippet snippets={jsDomAttributesVerificationExplanations} />
	),
	jsDomClassesModificationExplanations: () => (
		<Snippet snippets={jsDomClassesModificationExplanations} />
	),
	jsDomStylesModificationExplanations: () => (
		<Snippet snippets={jsDomStylesModificationExplanations} />
	),
	jsDomCreationExplanations: () => (
		<Snippet snippets={jsDomCreationExplanations} />
	),
	jsDomAppendChildExplanations: () => (
		<Snippet snippets={jsDomAppendChildExplanations} />
	),
};
