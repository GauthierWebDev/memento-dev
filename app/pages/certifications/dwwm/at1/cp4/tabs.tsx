import { Snippet } from "@/components/Snippet";

const xhrRequestSnippets = [
	{
		name: "🥉 XHR",
		codeLanguage: "javascript",
		code: `const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.exemple.com/data", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();`,
	},
	{
		name: "🥈 jQuery",
		codeLanguage: "javascript",
		code: `$.ajax({
  url: "https://api.exemple.com/data",
  method: "GET",
  success: function (data) {
    console.log(data);
  },
});`,
	},
	{
		name: "🥇 Fetch",
		codeLanguage: "javascript",
		code: `fetch("https://api.exemple.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data));`,
	},
];

const deferIframeSnippets = [
	{
		name: "HTML - 1ère étape",
		codeLanguage: "html",
		code: `<div
  class="iframe-container"
  data-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  data-width="1280"
  data-height="720"
>
  <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" loading="lazy" />
  <button type="button" class="iframe-loader">Charger la vidéo</button>
</div>`,
	},
	{
		name: "JavaScript - 2ème étape",
		codeLanguage: "javascript",
		code: `document.querySelectorAll('button.iframe-loader').forEach((button) => {
  // Pour chaque bouton qui doit charger un iframe, on écoute le clic dessus
  button.addEventListener('click', () => {
    // On récupère le container de l'iframe, qui dans notre exemple est la balise parente du bouton
    const container = button.closest('.iframe-container');

    // Si le container n'existe pas, on arrête l'exécution de la fonction pour éviter un plantage
    if (!container) return;

    const { src, width, height } = container.dataset;

    // On prépare notre iframe avec les données stockées dans le container
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', src);
    iframe.setAttribute('width', width);
    iframe.setAttribute('height', height);

    // On supprime le contenu du container pour y ajouter notre iframe
    container.innerHTML = '';
    container.appendChild(iframe);
  });
});`,
	},
];

export default {
	xhrRequest: () => <Snippet snippets={xhrRequestSnippets} />,
	deferIframe: () => <Snippet snippets={deferIframeSnippets} />,
};
