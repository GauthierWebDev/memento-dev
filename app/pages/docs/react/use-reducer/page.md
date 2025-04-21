---
title: L'utilisation des reducers avec React
description: Découvre les hooks de React, une fonctionnalité qui te permet de gérer le state et le cycle de vie de tes composants fonctionnels.
tags: [Frontend, React, JavaScript, TypeScript, Bibliothèque, Interface utilisateur (UI)]
---

Si tu as lu les précédentes pages concernant les hooks de React _(useState, useEffect et useContext)_, tu as déjà une bonne vision de la manière dont tu peux concevoir une application React.

Mais si je te dis que tu peux aller encore plus loin avec useReducer pour la gestion des états, est-ce que tu serais intéressé·e ? 🤔

{% callout type="question" title="Pourquoi ? useState ne suffit pas ?" %}

Le hook `useState` est génial et essentiel pour gérer l'état local d'un composant, mais il n'est pas adapté pour des états dits "complexes" ou pour des états qui dépendent les uns des autres.

{% /callout %}

## Qu'est-ce que le hook useReducer ?

Le hook `useReducer` est une alternative à `useState` qui est plus adaptée pour gérer des **états complexes** ou des **états qui dépendent les uns des autres**.

Il est basé sur le concept de **reducers** que l'on peut retrouver dans la bibliothèque Redux.

Un reducer est une fonction qui prend en paramètre un état et une action, et qui retourne un nouvel état. Il permet un découpage plus fin de la logique de gestion de l'état.

Mais avant de rentrer dans les détails, donnons des exemples de quand utiliser `useReducer` ou `useState` !

### Quand utiliser useState ?

Si tu dois stocker un état simple, comme un booléen, un nombre ou une chaîne de caractères, alors `useState` est parfait pour cela.

Ne te casse donc pas la tête à remplacer tous tes `useState` par des `useReducer` si tu n'en as pas besoin. 😅

### Quand utiliser useReducer ?

Dès que l'on a des états complexes ou des états qui dépendent les uns des autres, il est recommandé d'utiliser `useReducer`.

Par exemple, si tu as un formulaire avec plusieurs champs, et que tu veux gérer l'état de chaque champ de manière indépendante, alors `useReducer` est une bonne solution.

Ça te permettra d'éviter de créer des tonnes de `useState` et/ou handlers pour chaque champ du formulaire.

Mais `useReducer` n'est pas seulement utile pour les formulaires, il peut être utilisé dans de nombreux cas, comme la gestion d'un panier d'achat, la gestion d'une ressource, etc.

## À quoi ressemble un reducer ?

Comme expliqué plus tôt, un reducer est une fonction qui prend en paramètre un état et une action, et qui retourne un nouvel état.

Parlons dans un premier temps de la signature d'un reducer :

{% tabs defaultSelectedTab="jsx" %}

{% tab value="jsx" label="JSX" %}
{% snippet path="react/reducer/reducer-example.jsx" language="jsx" showLineNumbers=true /%}
{% /tab %}

{% tab value="tsx" label="TSX" %}
{% snippet path="react/reducer/reducer-example.tsx" language="tsx" showLineNumbers=true /%}
{% /tab %}

{% /tabs %}

Comme tu peux le voir, on récupère bien deux paramètres : `state` et `action`.

Le `state` est l'état actuel du composant, et l'`action` est un objet qui contient un type et d'autres propriétés.

En fonction du type de l'action, on retourne un nouvel état.  
Par défaut _(c'est-à-dire si le type de l'action n'est pas reconnu)_, on retourne l'état actuel sans l'altérer.

Dans le reducer, il est strictement impossible d'altérer l'état actuel directement.  
L'état est contraint au principe d'**immutabilité**.

On fera donc des `return` de l'état actuel avec les modifications nécessaires.

{% callout type="note" title="Pourquoi déverser le contenu de l'état actuel ?" %}

Si on ne déverse pas le contenu de l'état actuel, on perdrait les propriétés qui ne sont pas modifiées par l'action.

En déversant le contenu de l'état actuel, on s'assure de ne pas perdre ces propriétés.

Par exemple :

{% snippet path="react/reducer/reducer-why-spread-operator.jsx" language="jsx" showLineNumbers=true /%}

On perdrait ici la propriété `message` si on ne la déversait pas dans le nouvel état.

{% /callout %}

## Comment utiliser useReducer ?

Maintenant que tu as une idée de ce qu'est un reducer, voyons comment l'utiliser avec le hook `useReducer` au sein d'une application React ! 🚀

Naturellement, on va commencer par importer le hook `useReducer` :

```js
import { useReducer } from "react";
```

Ensuite, on va définir notre état initial :

{% tabs defaultSelectedTab="js" %}

{% tab value="js" label="JavaScript" %}
{% snippet path="react/reducer/reducer-initial-state.js" language="js" /%}
{% /tab %}

{% tab value="ts" label="TypeScript" %}
{% snippet path="react/reducer/reducer-initial-state.ts" language="ts" /%}
{% /tab %}

{% /tabs %}

On peut maintenant définir notre reducer :

{% tabs defaultSelectedTab="js" %}

{% tab value="js" label="JavaScript" %}
{% snippet path="react/reducer/reducer.js" language="js" showLineNumbers=true /%}
{% /tab %}

{% tab value="ts" label="TypeScript" %}
{% snippet path="react/reducer/reducer.ts" language="ts" showLineNumbers=true /%}
{% /tab %}

{% /tabs %}

{% callout type="question" title="C'est quoi `action.payload` ?" %}

La propriété `payload` de l'action est optionnelle. Il s'agit d'une convention pour passer des données à l'action.

Le `!` après `action.payload` signifie que l'on est sûr que `payload` est défini.  
Cela permet d'éviter une erreur de type avec TypeScript.

Dans le cas du type `SET`, le payload sera défini obligatoirement avec un nombre qui sera la nouvelle valeur de la propriété `count` de l'état.

{% /callout %}

Enfin, on peut utiliser le hook useReducer dans notre composant :

{% tabs defaultSelectedTab="js" %}

{% tab value="js" label="JavaScript" %}
{% snippet path="react/reducer/reducer-hook.js" language="js" /%}
{% /tab %}

{% tab value="ts" label="TypeScript" %}
{% snippet path="react/reducer/reducer-hook.ts" language="ts" /%}
{% /tab %}

{% /tabs %}

`state` contient l'état actuel, et `dispatch` est une fonction qui permet d'envoyer une action au reducer.

Pour modifier l'état, on va donc appeler `dispatch` avec une action :

{% snippet path="react/reducer/reducer-dispatch-increment.js" language="js" /%}

Et voilà, tu sais maintenant comment utiliser `useReducer` dans une application React ! 🎉

## On nettoie tout ça !

Tout ce qui t'a été montré plus haut fonctionne, mais est-ce que pour autant ce code est qualitatif ? 🤔

**Non !**

Pourquoi ? Déjà, on a tout mis dans le même fichier, ce qui n'est pas très propre.  
Mais surtout, notre code n'est pas à l'abri d'erreurs.

Que se passerait-il si on se trompait dans le type de l'action ?  
Ou si on oubliait de passer un payload à l'action `SET` ?

C'est ce genre de comportements que l'on veut éviter pour nous assurer le bon fonctionnement de notre application.

Pour contrer ces problèmes, on va créer des actions et des types d'actions pour garantir la cohérence de notre code.

### Création des types d'actions

Nos types d'actions seront tous des chaînes de caractères. On va donc pouvoir les définir sous forme de constantes.

{% snippet path="react/reducer/reducer-actions-constants.js" language="js" /%}

{% callout type="note" title="Regrouper les exports" %}

Et là, tu te dis : "Pourquoi ne pas regrouper les exports dans un seul objet ?"

Bien vu ! Et pour TypeScript, on peut aller encore plus loin en créant un `enum` pour les types d'actions 😉

{% tabs defaultSelectedTab="js" %}

{% tab value="js" label="JavaScript" %}
{% snippet path="react/reducer/reducer-actions-enum.js" language="js" /%}
{% /tab %}

{% tab value="ts" label="TypeScript" %}
{% snippet path="react/reducer/reducer-actions-enum.ts" language="ts" /%}
{% /tab %}

{% /tabs %}

{% /callout %}

### Typage des actions

Si tu utilises JavaScript, je suis désolé de te dire que tu ne peux pas **fortement** typer les actions.

En revanche, si tu utilises TypeScript, tu peux définir les actions de la manière suivante :

{% snippet path="react/reducer/reducer-actions-union.ts" language="ts" /%}

Tu pourras alors utiliser `CounterAction` pour typer les actions de ton reducer :

{% snippet path="react/reducer/reducer-actions-union-use.ts" language="ts" /%}

### Action creators

Pour éviter de se tromper dans le type de l'action, on peut se créer des fonctions qui vont nous permettre de créer des actions.

{% tabs defaultSelectedTab="js" %}

{% tab value="js" label="JavaScript" %}
{% snippet path="react/reducer/reducer-action-creator.js" language="js" /%}
{% /tab %}

{% tab value="ts" label="TypeScript" %}
{% snippet path="react/reducer/reducer-action-creator.ts" language="ts" /%}
{% /tab %}

{% /tabs %}

Maintenant le dispatch de nos actions sera beaucoup plus simple et éviter davantage les erreurs lors du développement !

{% snippet path="react/reducer/reducer-dispatch-action-creator.js" language="js" /%}

## Les fichiers complets

On a vu beaucoup de chose et les fichiers sont un peu éparpillés.  
Pour t'aider à mieux comprendre le fonctionnement du hook `useReducer` et comment l'implementer, voici les fichiers complets :

### Fichier counterReducer.js ou counterReducer.ts

{% tabs defaultSelectedTab="js" %}

{% tab value="js" label="JavaScript" %}
{% snippet path="react/reducer/file-counterReducer.js" language="js" showLineNumbers=true label="src/reducers/counterReducer.js" /%}
{% /tab %}

{% tab value="ts" label="TypeScript" %}
{% snippet path="react/reducer/file-counterReducer.ts" language="ts" showLineNumbers=true label="src/reducers/counterReducer.ts" /%}
{% /tab %}

{% /tabs %}

### Fichier Counter.jsx ou Counter.tsx

{% tabs defaultSelectedTab="jsx" %}

{% tab value="jsx" label="JSX" %}
{% snippet path="react/reducer/file-counter.jsx" language="jsx" showLineNumbers=true label="src/components/Counter.jsx" /%}
{% /tab %}

{% tab value="tsx" label="TSX" %}
{% snippet path="react/reducer/file-counter.tsx" language="tsx" showLineNumbers=true label="src/components/Counter.tsx" /%}
{% /tab %}

{% /tabs %}

## C'est l'heure des questions !

{% callout type="question" title="Quand utiliser `useReducer` ?" %}

- **A** - Pour des états simples
- **B** - Pour des états complexes ou des états qui dépendent les uns des autres

{% /callout %}

{% callout type="question" title="Quelle est la signature d'un reducer ?" %}

- **A** - `(state, action) => { /* ... */ }`
- **B** - `(action, state) => { /* ... */ }`
- **C** - `(state) => { /* ... */ }`
- **D** - `(action) => { /* ... */ }`

{% /callout %}

{% callout type="question" title="Pourquoi déverser le contenu de l'état actuel dans le nouvel état ?" %}

- **A** - Pour rendre le code plus lisible
- **B** - Pour ne pas perdre les propriétés qui ne sont pas modifiées par l'action

{% /callout %}

{% callout type="question" title="Pourquoi utiliser des constantes pour les types d'actions ?" %}

- **A** - Pour rendre le code plus lisible
- **B** - Pour alourdir inutillement le code
- **C** - Pour éviter de se tromper dans le type de l'action

{% /callout %}

## Conclusion

Alors, pas trop fatigué·e ? 😅  
Au moins ça en valait la peine ! Tu te feras moins de nœuds au cerveau par la suite dans tes projets React !

Comme tu as pu le voir, `useReducer` est un outil puissant pour gérer des états complexes ou des états qui dépendent les uns des autres.

Même si ici notre exemple n'était qu'un simple compteur, tu peux appliquer tout ce que tu as pu voir dans des cas plus concrets.

Si tu veux aller encore plus loin, n'hésite pas à jeter un œil à la documentation officielle de React pour `useReducer`.  
Tu peux également te renseigner sur Redux si tu veux aller encore plus loin dans la gestion de l'état de ton application, mais attention, c'est une autre paire de manches ! 😄
