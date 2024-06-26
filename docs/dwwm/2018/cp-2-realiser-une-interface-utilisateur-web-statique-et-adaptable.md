# _(<abbr title="Développeur Web et Web Mobile">DWWM</abbr> 2018)_ <abbr title="Compétence Professionnelle">CP</abbr> 2 - Réaliser une interface utilisateur web statique et adaptable
> [REAC _(03/05/2018)_, pages 15 et 16](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m03&type=t)

## 🚀 Contexte

Ça y est, on peut enfin démarrer le code ! 🚀  
À cette étape, on ne parle encore que d'interface statique, c'est-à-dire sans interaction avec l'utilisateur.

Pour résumer : HTML et CSS sont tes amis pour cette compétence professionnelle !

??? quote "Le projet que je présente contient du Javascript, est-ce un problème ?"
    Absolument pas ! C'est même rassurant, puisque ce sera nécessaire pour la suite.  
    Cependant pour cette compétence professionnelle, on se concentre sur l'interface statique.
    Si ton projet contient du JS, voire même qu'il est fait avec React, Angular ou Vue.js, ne te concentre pas sur cet aspect là.

    Réserve toutes les informations croustillantes pour la prochaine compétence professionnelle 😉

Maintenant qu'on sait que JS n'est pas attendu pour cette compétence professionnelle, parlons un peu de ce qui est attendu de toi.

Quand on parle d'interface utilisateur, on parle de la partie visible de l'application.  
Pour ce qui est du "statique et adaptable", on parle de la capacité de l'interface à s'adapter à différents supports _(desktop, tablette, mobile)_.

Si je te parle de "responsive design", ça te dit quelque chose ?  
L'idée va être de faire en sorte que l'interface s'adapte à la taille de l'écran de l'utilisateur et pour ça, tu as plusieurs solutions :

- Les **media queries** en CSS
- Les **frameworks CSS** comme TailwindCSS, Bootstrap, Bulma, etc.
- Les **grilles CSS** _(Flexbox, Grid)_

??? warning "Utilisation des frameworks CSS"
    Les frameworks CSS sont très pratiques pour gagner du temps, mais attention à ne pas les utiliser comme une béquille.  
    Il est important de comprendre comment ils fonctionnent pour ne pas se retrouver bloqué si un problème survient ou si demain,
    tu dois travailler sur un projet qui n'utilise pas de framework.

Allez, c’est presque terminé pour cette <abbr title="Compétence Professionnelle">CP</abbr>, accroche-toi ! 🫠

Si on résume ce que tu as actuellement sous la main avec cette <abbr title="Compétence Professionnelle">CP</abbr>, tu as déjà fait :

- Une structure de page en HTML _(ou JSX si tu utilises React par exemple)_
- Une mise en forme de cette structure en CSS
- Une adaptation de cette mise en forme en fonction de la taille de l'écran de l'utilisateur

Il ne reste alors qu’un seul détail à mettre en place : le référencement ! 📈

Heureusement on ne te demande pas d’être un expert <abbr title="Search Engine Optimization">SEO</abbr>, mais de maîtriser la sémantique et son impact sur le référencement. Si ta page est remplie de `<div>` et de `<span>`, tu peux être sûr que ton jury va te poser beaucoup de questions sur la sémantique.  
Pourquoi ? Parce que ces deux balises n’ont aucun impact sur le référencement, rendant une page difficilement référençable et que ton jury a besoin de savoir si tu maîtrises ou non la sémantique HTML.

Au delà de la sémantique et toujours dans l'optique du référencement, il est également attendu de toi que tu saches comment fonctionne le **SEO** _(Search Engine Optimization)_ dans les grandes lignes et comment référencer une page web _(`<meta name="description">`, `<title>`, etc.)_.

Ça te fait un peu peur tout ça ? Il est probable qu’entre le jour où tu lis ces lignes et le jour de ta soutenance que tu n’aies pas le temps de faire toutes les modifications sur ton site : **ce n’est pas grave !**

Bien sûr, il est préférable que les projets illustrés et présentés durant ta soutenance contiennent toutes ces notions et bonnes pratiques, mais tu peux très bien te baser sur tes connaissances et pas seulement sur ce qui a déjà été réalisé.

??? warning "Styles par défaut des navigateurs"
    Peut-être as-tu déjà entendu parler des styles par défaut des navigateurs ?  
    Ce qui permet à des éléments HTML de s'afficher d'une certaine manière sans que tu aies à les styliser.

    Par exemple, un titre `<h1>` sera plus gros qu'un titre `<h2>`, qui sera plus gros qu'un titre `<h3>`, etc.

    Cependant, il est important de ne pas s'appuyer sur ces styles par défaut pour la mise en forme de ton site.
    
    La raison est simple :  
    Imagine que dans les prochaines versions de navigateurs, ces styles par défaut changent.  
    Ton site ne sera plus du tout le même et tu auras beaucoup de travail pour tout remettre en ordre.

    Mon conseil est alors de **toujours** définir tes propres styles pour être sûr que ton site reste tel
    que tu l'as imaginé et dans la mesure du possible, faire un reset CSS pour t'assurer que tous les styles
    par défaut des navigateurs soient "inexistants".

???+ warning "Correspondance des maquettes avec l'intégration"
    Il est important que l'intégration de ton site web corresponde à la maquette que tu as réalisée lors de la première compétence professionnelle.
    Si tu as des différences entre la maquette et l'intégration, tu risques de "t'attirer les foudres" de ton jury _(en toute bienveillance bien sûr 😉)_.

    Si tu as des différences, il est préférable de les expliquer lors de ta soutenance pour montrer que tu as conscience de ces différences et que tu comprends l'enjeu de la cohérence entre la maquette et l'intégration.

    Si tu as le temps, essaye de refaire l'intégralité de la [<abbr title="Compétence Professionnelle">CP</abbr> 1](cp-1-maquetter-une-application.md) pour tous les documents de maquettage, à minima pour les maquettes desktop et mobile que tu présentes lors de ta soutenance _(non, ne refais pas les 3123 pages d'un coup, ça serait un peu trop 😅)_.

## ➕ Informations complémentaires

Au delà du simple terme "responsive design", on parle régulièrement d'une bonne pratique qui est le **mobile first**.  
Le mobile first consiste à concevoir en priorité l'interface pour les mobiles, puis de l'adapter pour les tablettes et les ordinateurs.

Cet ordre permet de s'assurer que l'interface est bien adaptée pour les mobiles, qui sont les appareils les plus utilisés pour naviguer sur le web. _(Et oui, on est en 2023, les mobiles ont pris le dessus sur les ordinateurs 😉)_

**Anecdote inutile _(donc indispensable)_ :**  
> Selon [Statista](https://fr.statista.com/infographie/31588/trafic-web-en-france-selon-le-support-utilise-pour-se-connecter-mobile-ordinateur-tablette/#:~:text=Utilisation%20d'Internet&text=Comme%20l'indique%20notre%20graphique,de%203%20%25%20sur%20une%20tablette.), en 2022/2023, 50.7% du trafic web en France était réalisé depuis un mobile, contre 46.7% depuis un ordinateur et 2.6% depuis une tablette.

## 📝 Critères d'évaluation
!!! abstract "Critères d'évaluation"
    - L'interface est conforme à la maquette de l'application
    - Les bonnes pratiques de structuration sont respectées y compris pour le web mobile
    - Les pages web s’adaptent à la taille de l’écran
    - Le site respecte les règles de référencement naturel
    - La démarche de recherche permet de résoudre un problème technique ou de mettre en œuvre une nouvelle fonctionnalité
    - La documentation technique liée aux technologies associées, rédigée en langue anglaise, est comprise (sans contre-sens, ...)

## 🤯 Aller plus loin _(hors référentiel)_

Si tu as lu les informations complémentaires de la <abbr title="Compétence Professionnelle">CP</abbr> 1, tu as déjà une idée de ce que je vais te dire ici... 😏  
Tu te rappelles du terme <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> ?

Si ce n'est pas le cas, je t'invite à consulter la section ["Aller plus loin" de la <abbr title="Compétence Professionnelle">CP</abbr> 1 pour en savoir plus sur l'accessibilité web.](cp-1-maquetter-une-application.md#aller-plus-loin-hors-referentiel)

---

## 📚 Documentations
- [MDN - Responsive Design](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [MDN - Media Queries](https://developer.mozilla.org/fr/docs/Web/CSS/Media_Queries/Using_media_queries)

---

[⬅️ <abbr title="Compétence Professionnelle">CP</abbr> 1 - Maquetter une application](cp-1-maquetter-une-application.md)  
[➡️ <abbr title="Compétence Professionnelle">CP</abbr> 3 - Développer une interface utilisateur web dynamique](cp-3-developper-une-interface-utilisateur-web-dynamique.md)  
[🏠 Retour à l'accueil du millésime 2018](index.md)