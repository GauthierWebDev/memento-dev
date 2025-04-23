import { Snippet } from "@/components/Snippet";

const htmlBaseSnippets = [
  {
    name: "Exemple de structure HTML de base",
    codeLanguage: "html",
    withLineNumbers: true,
    code: `<!-- On indique au navigateur que le document est en HTML -->
<!DOCTYPE html>

<!-- On indique la langue du document (ici, en français) -->
<html lang="fr">

<!-- On indique les paramètres de la page... -->
<head>
  <!-- ... comme le jeu de caractères utilisé (UTF-8)... -->
  <meta charset="UTF-8">

  <!-- ... la compatibilité avec les navigateurs... -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- ... le titre de la page... -->
  <title>Mon super site</title>

  <!-- ... et la description de la page... -->
  <meta name="description" content="Ceci est un exemple de page HTML.">
</head>

<!-- On indique le début du corps de la page -->
<!-- Le corps de la page contient le contenu visible par l'utilisateur -->
<body>
  <!-- On indique le début d'un en-tête -->
  <header>
    <!-- On indique le titre principal de la page -->
    <h1>Bienvenue sur ma page HTML</h1>
  </header>

  <!-- On indique le début du contenu principal -->
  <main>
    <!-- On indique un sous-titre -->
    <h2>Voici un exemple de contenu principal</h2>

    <!-- On indique un paragraphe -->
    <p>Ceci est un exemple de paragraphe dans le contenu principal.</p>
  </main>

  <!-- On indique le début d'un pied de page -->
  <footer>
    <!-- On indique un texte de copyright -->
    <p>&copy; 2023 Mon Site Web</p>
  </footer>
</body>
</html>`,
  },
];

const htmlAttributesSnippets = [
  {
    name: "Lien hypertexte",
    codeLanguage: "html",
    code: `<!-- On indique un lien hypertexte -->
<!-- \`href\` est l'attribut qui indique la destination du lien -->
<a href="https://www.example.com">Visitez notre site</a>`,
  },
  {
    name: "Image",
    codeLanguage: "html",
    code: `<!-- On indique une image -->
<!-- \`src\` est l'attribut qui indique l'URL de l'image -->
<!-- \`alt\` est l'attribut qui fournit une description de l'image -->
<img src="https://www.example.com/image.jpg" alt="Description de l'image">`,
  },
  {
    name: "Classes CSS",
    codeLanguage: "html",
    code: `<!-- On applique plusieurs classes CSS à un élément -->
<div class="ma-classe autre-classe">`
  },
];

export default {
  htmlBase: () => <Snippet snippets={htmlBaseSnippets} />,
  htmlAttributes: () => <Snippet snippets={htmlAttributesSnippets} />,
};
