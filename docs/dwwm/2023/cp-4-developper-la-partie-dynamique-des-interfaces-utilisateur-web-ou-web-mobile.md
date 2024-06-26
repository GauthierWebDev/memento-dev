# _(<abbr title="Développeur Web et Web Mobile">DWWM</abbr> 2023)_ <abbr title="Compétence Professionnelle">CP</abbr> 4 - Développer la partie dynamique des interfaces utilisateur web ou web mobile
> [REAC _(24/05/2023)_, pages 21 et 22](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m04&type=t)  
> [RE _(24/05/2023)_, page 10](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m04&type=t)

## 🚀 Contexte

Ça y est, on commence à parler développement pour de vrai maintenant !
On quitte doucement l'intégration pour maintenant rajouter de l'interactivité à nos interfaces utilisateur, ce qui veut dire "utilisation d'un langage script côté client", soit...

<iframe src="https://giphy.com/embed/SvFocn0wNMx0iv2rYz" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
<p style="text-align: center;">Javascript !</p>

C'est le meilleur moment pour parler de nombreuses fonctionnalités implémentées sur ton application avec Javascript, comme :

- Les formulaires dynamiques _(ajout/suppression de champs, vérification des données, etc.)_
- Les animations _(chargement d'un témoin de chargement, apparition/disparition d'éléments, etc.)_
- Les interactions avec l'utilisateur _(drag and drop, ouverture de fenêtre modale, etc.)_
- Les appels à des services web _(API REST, etc.)_

!!! warning "Consommation d'API"
    Bien que j'ai mentionné le fait que faire des appels à des services web corresponde entièrement à cette <abbr title="Compétence Professionnelle">CP</abbr>, il est important de noter que la consommation d'API est une compétence à part entière, qui sera abordée dans la <abbr title="Compétence Professionnelle">CP</abbr> 7 qui correspond à la mise en place de services web et composants métier.

    Ne te focalise donc pas sur ce que fait l'API en arrière plan, concentre toi sur comment configurer tes requêtes et comment traiter les réponses obtenues !

!!! question "Mon site est fait avec React/Angular/Vue.js, donc je valide automatiquement cette <abbr title='Compétence Professionnelle'>CP</abbr> ?"
    Pas si vite ! 😏  
    Effectivement, ton site répond _(en théorie)_ en tous points pour la compétence actuelle, mais il est important de montrer que tu sais comment fonctionne le Javascript "vanilla" _(c'est-à-dire sans framework ou bibliothèque)_.

    Si tu as utilisé un framework, tu peux tout à fait montrer des extraits de code en Javascript pur pour montrer que tu sais comment ça fonctionne "sous le capot" !

    Mais on ne va pas se le cacher, si tu as réussi à réaliser un projet avec un framework, c'est déjà un très bon point pour toi qui permet de démontrer que tu as de bonnes connaissances en Javascript.  
    Cependant il va potentiellement y avoir un défaut majeur sur ton projet : le référencement naturel _(SEO)_.

??? info "Référencement d'un site généré côté client _(comme React, Vue.js etc)_"
    Les sites web générés côté client _(ou "client-side rendering")_ ont un défaut majeur : ils ne sont pas très bien référencés par les moteurs de recherche.

    En effet, les moteurs de recherche ont du mal à lire le contenu d'un site généré côté client, car ils n'exécutent pas le Javascript.  
    C'est pour cela qu'il est recommandé de mettre en place un rendu côté serveur _(ou "server-side rendering")_ pour améliorer le référencement naturel de ton site.

    Si tu veux en savoir plus sur le sujet, tu peux consulter [cet article de Google](https://web.dev/articles/rendering-on-the-web?hl=fr#rendering-terminology).

    De mon côté, je recommande énormément de passer par le framework [Vike](https://vike.dev/) qui permet de générer des sites web ultra-rapides avec un rendu côté serveur et un rendu côté client, le tout en utilisant Vue.js, React ou _(presque)_ n'importe quel autre framework front-end Javascript !

    Tu as aussi la possibilité d'utiliser [Next.js](https://nextjs.org/) pour React, [Nuxt.js](https://nuxtjs.org/) pour Vue.js ou [SvelteKit](https://kit.svelte.dev/) pour Svelte qui permettent de faire du rendu côté serveur.

## ➕ Informations complémentaires

Je me permets également de lâcher une bombe sur une certaine techno JS : **jQuery**.  
Bon sang, celui-là il me fait penser à un vieux pote qui a pris un coup de vieux... 😅

??? question "jQuery, c'est quoi ?"
    jQuery est une bibliothèque Javascript qui a été très populaire dans les années 2000 et 2010.  
    Elle a été créée pour simplifier l'écriture de scripts Javascript et pour faciliter la manipulation du DOM.

    jQuery a été très utilisée pour les animations, les requêtes AJAX, la manipulation du DOM, etc.  
    Mais depuis l'arrivée des frameworks front-end comme React, Angular ou Vue.js, jQuery a perdu de sa superbe et est de moins en moins utilisée.

    Cependant, il est toujours bon de connaître jQuery, car il est possible que tu tombes sur un projet qui l'utilise encore, comme sur des templates Wordpress qui commencent à dater par exemple.

Mais alors, pourquoi je te parle de jQuery ?

Eh bien.. pour faire simple, aujourd'hui jQuery est relativement obsolète et surtout très lourd pour ce que ça rajoute à un projet.  
Dans la mesure du possible, il est recommandé de ne pas utiliser jQuery pour un nouveau projet, et de préférer Javascript "vanilla" ou un framework ou bibliothèque front-end comme React, Angular ou Vue.js _(attention, d'un point de vue éco-conception l'utilisation d'un framework n'est pas forcément la meilleure solution)_.

??? question "Mais je croyais que les requêtes <abbr title="XMLHttpRequest">XHR</abbr> c'était has-been ? Du coup, je passe par `jQuery.ajax()` 🤔"
    Et bien non, les requêtes XHR sont toujours d'actualité, mais elles ont été remplacées par une nouvelle API : [Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API).

    Fetch est une API plus moderne et plus simple à utiliser que les requêtes XHR, et elle est supportée par tous les navigateurs modernes.  
    Elle permet de faire des requêtes HTTP de manière asynchrone et de gérer les réponses de manière plus simple.

    ??? example "Comparaison entre `XMLHttpRequest`, `jQuery.ajax()` et `fetch`"
        ```javascript
        // Avec XMLHttpRequest
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.exemple.com/data', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(JSON.parse(xhr.responseText));
            }
        };
        xhr.send();

        // Avec jQuery.ajax()
        $.ajax({
            url: 'https://api.exemple.com/data',
            method: 'GET',
            success: function(data) {
                console.log(data);
            }
        });

        // Avec fetch
        fetch('https://api.exemple.com/data')
            .then((response) => response.json())
            .then((data) => console.log(data));
        ```

    Non seulement `fetch` est plus simple à utiliser et comprendre _(contrairement à `XMLHttpRequest`)_ mais elle est également plus légère que `jQuery.ajax()` puisqu'elle est native au navigateur ! Alors pourquoi s'en priver ? 😉

## 📝 Critères d'évaluation

!!! abstract "Critères d'évaluation"
    - L’interface utilisateur est conforme au dossier de conception
    - L’interface est dynamique et l’expérience utilisateur est améliorée, y compris pour les personnes en situation de handicap
    - Les recommandations de sécurité liées aux applications web et web mobile sont respectées
    - La règlementation en vigueur sont respectées, y compris celle relative à l’accessibilité
    - Le code est documenté, y compris en anglais _(niveau B1 CECRL pour l’anglais)_
    - Le jeu d’essai fonctionnel est complet et les tests unitaires sont réalisés pour les composants concernés
    - Les tests de sécurité sont réalisés

## 🤯 Aller plus loin _(hors référentiel)_

Plus tôt, dans la <abbr title="Compétence Professionnelle">CP</abbr> 3, je t'ai parlé d'une astuce d'éco-conception pour différer le chargement des images avec l'attribut `loading="lazy"` sur les balises `<img>`. Mais on peut aller encore plus loin que simplement différer le chargement des images !

On peut également différer le chargement des scripts Javascript avec l'attribut `defer` sur les balises `<script>`.

??? info "`defer` sur les balises `<script>`"
    Si ça te rassure, ça ne cassera pas ton site web et au contraire, ça peut même l'améliorer !  
    L'intérêt premier de cet attribut est de différer l'exécution du script jusqu'à ce que le document HTML soit entièrement chargé.

    L'avantage de cette technique est qu'on va demander au navigateur de charger le script en parallèle du reste du contenu, sans bloquer le chargement de la page.  
    Comme ça : pas de page blanche pendant le chargement du script, et le script sera exécuté une fois que le navigateur aura fini de charger le reste de la page !

    ```html
    <script src="script.js" defer></script>
    ```

Maintenant, on sait qu'on peut charger de manière "asynchrone" nos images et nos scripts, mais ce n'est toujours pas terminé.. 😏

Prenons l'exemple d'un site qui incorpore plusieurs dizaines de vidéos Youtube sur une seule page. On aura donc des `<iframe>` qui vont charger des vidéos Youtube, et ça, c'est pas très éco-responsable... 😕  
Mais on peut améliorer notre page en mettant en place une légère interaction Javascript pour charger l'iframe uniquement si l'utilisateur clique sur un bouton !

??? example "Chargement d'un iframe Youtube uniquement au clic de l'utilisateur"
    ```html
    <div
        class="iframe-container"
        data-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        data-width="1280"
        data-height="720"
    >
        <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" loading="lazy">
        <button type="button" class="iframe-loader">Charger la vidéo</button>
    </div>
    ```

    ```typescript
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
    ```

??? question "Mais ça fait beaucoup de code juste pour charger des iframes, c'est vraiment nécessaire ?"
    Pour être franc, il n'y a pas de solution idéale. Mais on peut améliorer les performances du site et gagner en sobriété numérique en ne chargeant pas des ressources lourdes inutilement.

    Est-ce que tu savais que le simple fait de charger un iframe d'une vidéo Youtube demande au navigateur de faire une dizaine de requêtes HTTP pour charger la vidéo, les scripts et les styles de Youtube ? Imagine si on mixe plusieurs sources pour nos iframes, comme Dailymotion, Vimeo, etc. 😱

    Et le pire dans tout ça, c'est que le navigateur va charger ces ressources même si l'utilisateur ne comptait pas regarder la vidéo !  
    Alors autant faire en sorte que notre site réponde au besoin de l'utilisateur, sans pour autant supprimer les fonctionnalités _(comme nos iframes)_ qui peuvent être utiles.

---

## 📚 Documentations

- [MDN Web Docs - Attribut `loading` sur les balises `<img>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/img#loading)
- [MDN Web Docs - Attribut `defer` sur les balises `<script>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/script#defer)
- [MDN Web Docs - Attribut `data-*`](https://developer.mozilla.org/fr/docs/Web/HTML/Global_attributes/data-*)
- [MDN Web Docs - `fetch`](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
- [Wikipédia - API](https://fr.wikipedia.org/wiki/Interface_de_programmation)

## 🛠️ Outils

- [Vike - Framework front-end pour un rendu côté serveur et côté client](https://vike.dev/)
- [Next.js - Framework pour React avec rendu côté serveur](https://nextjs.org/)
- [Nuxt.js - Framework pour Vue.js avec rendu côté serveur](https://nuxtjs.org/)
- [SvelteKit - Framework pour Svelte avec rendu côté serveur](https://kit.svelte.dev/)

---

[⬅️ <abbr title="Compétence Professionnelle">CP</abbr> 3 - Réaliser des interfaces utilisateur statiques web ou web mobile](cp-3-realiser-des-interfaces-statiques-web-ou-web-mobile.md)  
[➡️ <abbr title="Compétence Professionnelle">CP</abbr> 5 - Mettre en place une base de données relationnelle](cp-5-mettre-en-place-une-base-de-donnees-relationnelle.md)  
[🏠 Retour à l'accueil du millésime 2023](index.md)