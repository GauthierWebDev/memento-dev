document.querySelectorAll('button.iframe-loader').forEach((button: HTMLButtonElement) => {
  // Pour chaque bouton qui doit charger un iframe, on écoute le clic dessus
  button.addEventListener('click', () => {
    // On récupère le container de l'iframe, qui dans notre exemple est la balise parente du bouton
    const container: HTMLElement | null = button.closest('.iframe-container');

    // Si le container n'existe pas, on arrête l'exécution de la fonction pour éviter un plantage
    if (!container) return;

    const { src, width, height } = container.dataset as {
      src: string,
      width: string,
      height: string
    };

    // On prépare notre iframe avec les données stockées dans le container
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', src);
    iframe.setAttribute('width', width);
    iframe.setAttribute('height', height);

    // On supprime le contenu du container pour y ajouter notre iframe
    container.innerHTML = '';
    container.appendChild(iframe);
  });
});