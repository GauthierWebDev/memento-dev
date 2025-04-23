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
  <!-- ... commme le titre de la page... -->
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

  <!-- On indique le début d'une section -->
  <section>
    <!-- On indique un sous-titre -->
    <h2>Voici un exemple de section</h2>
    <!-- On indique un paragraphe -->
    <p>Ceci est un exemple de paragraphe dans une section.</p>
  </section>

  <!-- On indique le début d'un pied de page -->
  <footer>
    <!-- On indique un texte de copyright -->
    <p>&copy; 2023 Mon Site Web</p>
  </footer>
</body>
</html>`,
  },
];

export default {
  htmlBase: () => <Snippet snippets={htmlBaseSnippets} />,
};
