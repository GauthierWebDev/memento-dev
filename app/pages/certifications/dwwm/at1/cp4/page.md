---
title: CP 4 - Développer la partie dynamique des interfaces utilisateur web ou web mobile
description: Synthèse et explications des attentes relatives à la compétence professionnelle 4 du titre professionnel Développeur Web et Web Mobile (DWWM-01280m04).
tags: [DWWM]
---

## 📚 Références

- REAC _(mise à jour du 02/07/2024)_, pages 21 et 22
- RE _(mise à jour du 02/07/2024)_, page 11

## 📋 En résumé

Ça y est, on commence à parler développement pour de vrai maintenant ! On quitte doucement l'intégration pour maintenant rajouter de l'interactivité à nos interfaces utilisateur, ce qui veut dire "utilisation d'un langage script côté client", soit...

{% iframe src="https://giphy.com/embed/SvFocn0wNMx0iv2rYz" width="480" height="480" className="mx-auto" /%}

C'est le meilleur moment pour parler de nombreuses fonctionnalités implémentées sur ton application avec JavaScript, comme :

- Les formulaires dynamiques _(ajout/suppression de champs, vérification des données, etc.)_
- Les animations _(chargement d'un témoin de chargement, apparition/disparition d'éléments, etc.)_
- Les interactions avec l'utilisateur _(drag and drop, ouverture de fenêtre modale, etc.)_
- Les appels à des services web _(API REST, etc.)_

{% callout type="note" title="Consommation d'API" %}
Bien que j'ai mentionné le fait que faire des appels à des services web corresponde entièrement à cette CP, il est important de noter que la consommation d'API est une compétence à part entière, qui sera abordée dans la CP 7 qui correspond à la mise en place de services web et composants métier.

Ne te focalise donc pas sur ce que fait l'API en arrière plan, concentre toi sur comment configurer tes requêtes et comment traiter les réponses obtenues !
{% /callout %}

{% callout type="question" title="Mon site est fait avec React/Angular/Vue.js, donc je valide automatiquement cette CP ?" %}
Pas si vite ! 😏  
Effectivement, ton site répond _(en théorie)_ en tous points pour la compétence actuelle, mais il est important de montrer que tu sais comment fonctionne le JavaScript "vanilla" _(c'est-à-dire sans framework ou bibliothèque)_.

Si tu as utilisé un framework, tu peux tout à fait montrer des extraits de code en JavaScript pur pour montrer que tu sais comment ça fonctionne "sous le capot" !

Mais on ne va pas se le cacher, si tu as réussi à réaliser un projet avec un framework, c'est déjà un très bon point pour toi qui permet de démontrer que tu as de bonnes connaissances en JavaScript.  
Cependant il va potentiellement y avoir un défaut majeur sur ton projet : le référencement naturel _(SEO)_.
{% /callout %}

## ➕ Informations complémentaires

### 🌐 Référencement d'un site généré côté client

Les sites web générés côté client _(**CSR**, ou "client-side rendering")_ ont un défaut majeur : ils ne sont pas très bien référencés par les moteurs de recherche.

En effet, les moteurs de recherche ont du mal à lire le contenu d'un site généré côté client, car ils n'exécutent pas le JavaScript.  
C'est pour cela qu'il est recommandé de mettre en place un rendu côté serveur _(**SSR**, ou "server-side rendering")_ pour améliorer le référencement naturel de ton site.

Si tu veux en savoir plus sur le sujet, tu peux consulter [cet article de Google](https://web.dev/articles/rendering-on-the-web?hl=fr#rendering-terminology).

De mon côté, je recommande énormément de passer par le framework [Vike](https://vike.dev/) qui permet de générer des sites web ultra-rapides avec un rendu côté serveur et un rendu côté client, le tout en utilisant Vue.js, React ou _(presque)_ n'importe quel autre framework front-end JavaScript !

Tu as aussi la possibilité d'utiliser [Next.js](https://nextjs.org/) pour React, [Nuxt.js](https://nuxtjs.org/) pour Vue.js ou [SvelteKit](https://kit.svelte.dev/) pour Svelte qui permettent de faire du rendu côté serveur.

### 👴 jQuery

Je me permets également de lâcher une bombe sur une certaine techno JS : **jQuery**.  
Bon sang, celui-là il me fait penser à un vieux pote qui a pris un coup de vieux... 😅

{% callout type="question" title="jQuery, c'est quoi ?" %}
jQuery est une bibliothèque JavaScript qui a été très populaire dans les années 2000 et 2010.  
Elle a été créée pour simplifier l'écriture de scripts JavaScript et pour faciliter la manipulation du DOM.

jQuery a été très utilisée pour les animations, les requêtes AJAX, la manipulation du DOM, etc.  
Mais depuis l'arrivée des frameworks front-end comme React, Angular ou Vue.js, jQuery a perdu de sa superbe et est de moins en moins utilisée.

Cependant, il est toujours bon de connaître jQuery, car il est possible que tu tombes sur un projet qui l'utilise encore, comme sur des templates Wordpress qui commencent à dater par exemple.
{% /callout %}

Mais alors, pourquoi je te parle de jQuery ?

Eh bien.. pour faire simple, aujourd'hui jQuery est relativement obsolète et surtout très lourd pour ce que ça rajoute à un projet.  
Dans la mesure du possible, il est recommandé de ne pas utiliser jQuery pour un nouveau projet, et de préférer JavaScript "vanilla" ou un framework ou bibliothèque front-end comme React, Angular ou Vue.js _(attention, d'un point de vue éco-conception l'utilisation d'un framework n'est pas forcément la meilleure solution)_.

{% callout type="question" title="Mais comment je vais faire pour mes consommations d'API, vu que j'utilisais `jQuery.ajax()` ?!" %}

Tout doux, tout doux, il existe une solution ! 😎

Si je te parle des requêtes XHR _(XMLHttpRequest)_ tu me dis... ?

> Mais c'est vieux ça, c'est pas du tout à la mode !

Et tu as raison, mais si maintenant je te dis qu'il y a une autre solution, native, plus moderne et plus performante, tu me dis... ?

> Fetch !

**Et sinon, pour faire simple :**

Fetch est une API plus moderne et plus simple à utiliser que les requêtes XHR, et elle est supportée par tous les navigateurs modernes.  
Elle permet de faire des requêtes HTTP de manière asynchrone et de gérer les réponses de manière plus simple.

{% tabs defaultSelectedTab="xhr" %}
{% tab value="xhr" label="🥉 XHR" %}
{% snippet path="js/xhr/xhr.js" language="js" showLineNumbers=true /%}
{% /tab %}

{% tab value="jquery" label="🥈 jQuery" %}
{% snippet path="js/xhr/jquery-ajax.js" language="js" showLineNumbers=true /%}
{% /tab %}

{% tab value="fetch" label="🥇🏆 Fetch" %}
{% snippet path="js/xhr/fetch.js" language="js" showLineNumbers=true /%}
{% /tab %}
{% /tabs %}

Non seulement `fetch` est plus simple à utiliser et comprendre _(contrairement à XMLHttpRequest)_ mais elle est également plus légère que `jQuery.ajax()` puisqu'elle est native au navigateur ! Alors pourquoi s'en priver ? 😉

{% /callout %}

## 🛠️ Ressources conseillées

_En cours de rédaction..._

## 🎯 Critères d'évaluation

- L'interface utilisateur est conforme au dossier de conception
- L'interface est dynamique et l'expérience utilisateur est améliorée, y compris pour les personnes en situation de handicap
- Les recommandations de sécurité liées aux applications web et web mobile sont respectées
- La règlementation en vigueur sont respectées, y compris celle relative à l'accessibilité
- Le code est documenté, y compris en anglais _(niveau B1 CECRL pour l'anglais)_
- Le jeu d'essai fonctionnel est complet et les tests unitaires sont réalisés pour les composants concernés
- Les tests de sécurité sont réalisés

## 🤯 Aller plus loin

Plus tôt, dans la CP 3, je t'ai parlé d'une astuce d'éco-conception pour différer le chargement des images avec l'attribut `loading="lazy"` sur les balises `<img>`. Mais on peut aller encore plus loin que simplement différer le chargement des images !

On peut également différer le chargement des scripts JavaScript avec l'attribut defer sur les balises `<script>`.

### 📜 Différer le chargement des scripts

Si ça te rassure, ça ne cassera pas ton site web et au contraire, ça peut même l'améliorer !  
L'intérêt premier de cet attribut est de différer l'exécution du script jusqu'à ce que le document HTML soit entièrement chargé.

L'avantage de cette technique est qu'on va demander au navigateur de charger le script en parallèle du reste du contenu, sans bloquer le chargement de la page.
Comme ça : pas de page blanche pendant le chargement du script, et le script sera exécuté une fois que le navigateur aura fini de charger le reste de la page !

Maintenant, on sait qu'on peut charger de manière "asynchrone" nos images et nos scripts, mais ce n'est toujours pas terminé.. 😏

### 📺 Différer le chargement des iframes

Prenons l'exemple d'un site qui incorpore plusieurs dizaines de vidéos Youtube sur une seule page. On aura donc des `<iframe>` qui vont charger des vidéos Youtube, et ça, c'est pas très éco-responsable... 😕  
Mais on peut améliorer notre page en mettant en place une légère interaction JavaScript pour charger l'iframe uniquement si l'utilisateur clique sur un bouton !

{% callout type="note" title="Chargement d'un iframe Youtube uniquement au clic de l'utilisateur" %}

{% tabs defaultSelectedTab="html" %}
{% tab value="html" label="HTML - 1ère étape" %}
{% snippet path="html/defer-iframe.html" language="html" showLineNumbers=true /%}
{% /tab %}

{% tab value="js" label="JavaScript - 2ème étape" %}
{% snippet path="js/defer-iframe.ts" language="ts" showLineNumbers=true /%}
{% /tab %}
{% /tabs %}

{% /callout %}

{% callout type="question" title="Mais ça fait beaucoup de code juste pour charger des iframes, c'est vraiment nécessaire ?" %}
Pour être franc, il n'y a pas de solution idéale. Mais on peut améliorer les performances du site et gagner en sobriété numérique en ne chargeant pas des ressources lourdes inutilement.

Est-ce que tu savais que le simple fait de charger un iframe d'une vidéo Youtube demande au navigateur de faire une dizaine de requêtes HTTP pour charger la vidéo, les scripts et les styles de Youtube ? Imagine si on mixe plusieurs sources pour nos iframes, comme Dailymotion, Vimeo, etc. 😱

Et le pire dans tout ça, c'est que le navigateur va charger ces ressources même si l'utilisateur ne comptait pas regarder la vidéo !
Alors autant faire en sorte que notre site réponde au besoin de l'utilisateur, sans pour autant supprimer les fonctionnalités _(comme nos iframes)_ qui peuvent être utiles.
{% /callout %}

## 🧠 Documentations

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
