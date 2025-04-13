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

{% snippet path="data/docs/react/usereducer/reducer-example.jsx" language="jsx" label="test" /%}

{% /tab %}

{% tab value="tsx" label="TSX" %}

```tsx
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TYPE_1":
      return { ...state /* Nouvel état */ };
    case "TYPE_2":
      return { ...state /* Nouvel état */ };
    default:
      return state;
  }
};
```

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

```js
const initialState = { count: 0, message: "Hello" };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};
```

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

```js
const initialState = { count: 0 };
```

{% /tab %}

{% tab value="ts" label="TypeScript" %}

```ts
type State = {
  count: number;
};
const initialState: State = { count: 0 };
```

{% /tab %}

{% /tabs %}

On peut maintenant définir notre reducer :

{% tabs defaultSelectedTab="js" %}

{% tab value="js" label="JavaScript" %}

```js
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "SET":
      return { ...state, count: action.payload };
    default:
      return state;
  }
};
```

{% /tab %}

{% tab value="ts" label="TypeScript" %}

```ts
type State = {
  count: number;
};

type Action = {
  type: "INCREMENT" | "DECREMENT" | "RESET" | "SET";
  payload?: number;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "SET":
      return { ...state, count: action.payload! };
    default:
      return state;
  }
};
```

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

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

{% /tab %}

{% tab value="ts" label="TypeScript" %}

```ts
const [state, dispatch] = useReducer<State, Action>(reducer, initialState);
```

{% /tab %}

{% /tabs %}

`state` contient l'état actuel, et `dispatch` est une fonction qui permet d'envoyer une action au reducer.

Pour modifier l'état, on va donc appeler `dispatch` avec une action :

```js
dispatch({ type: "INCREMENT" });
```

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

```js
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const SET = "SET";
```

{% callout type="note" title="Regrouper les exports" %}

Et là, tu te dis : "Pourquoi ne pas regrouper les exports dans un seul objet ?"

Bien vu ! Et pour TypeScript, on peut aller encore plus loin en créant un `enum` pour les types d'actions 😉

{% tabs defaultSelectedTab="js" %}

{% tab value="js" label="JavaScript" %}

```js
export const CounterActionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  SET: "SET",
};
```

{% /tab %}

{% tab value="ts" label="TypeScript" %}

```ts
export const enum CounterActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
  SET = "SET",
}
```

{% /tab %}

{% /tabs %}

{% /callout %}

### Typage des actions

Si tu utilises JavaScript, je suis désolé de te dire que tu ne peux pas **fortement** typer les actions.

En revanche, si tu utilises TypeScript, tu peux définir les actions de la manière suivante :

```ts
export type CounterAction =
  | { type: CounterActionTypes.INCREMENT }
  | { type: CounterActionTypes.DECREMENT }
  | { type: CounterActionTypes.RESET }
  | { type: CounterActionTypes.SET; payload: number };
```

Tu pourras alors utiliser `CounterAction` pour typer les actions de ton reducer :

```ts
const reducer = (state: State, action: CounterAction) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case CounterActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case CounterActionTypes.RESET:
      return { ...state, count: 0 };
    case CounterActionTypes.SET:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};
```

### Action creators

Pour éviter de se tromper dans le type de l'action, on peut se créer des fonctions qui vont nous permettre de créer des actions.

{% tabs defaultSelectedTab="js" %}

{% tab value="js" label="JavaScript" %}

```js
export const actions = {
  increment: () => ({ type: CounterActionTypes.INCREMENT }),
  decrement: () => ({ type: CounterActionTypes.DECREMENT }),
  reset: () => ({ type: CounterActionTypes.RESET }),
  set: (value) => ({ type: CounterActionTypes.SET, payload: value }),
};
```

{% /tab %}

{% tab value="ts" label="TypeScript" %}

```ts
export const actions = {
  increment: (): CounterAction => ({ type: CounterActionTypes.INCREMENT }),
  decrement: (): CounterAction => ({ type: CounterActionTypes.DECREMENT }),
  reset: (): CounterAction => ({ type: CounterActionTypes.RESET }),
  set: (value: number): CounterAction => ({ type: CounterActionTypes.SET, payload: value }),
};
```

{% /tab %}

{% /tabs %}

Maintenant le dispatch de nos actions sera beaucoup plus simple et éviter davantage les erreurs lors du développement !

```js
dispatch(actions.increment());
dispatch(actions.set(10));
```

## Les fichiers complets

On a vu beaucoup de chose et les fichiers sont un peu éparpillés.  
Pour t'aider à mieux comprendre le fonctionnement du hook `useReducer` et comment l'implementer, voici les fichiers complets :

### Fichier `counterReducer.js` ou `counterReducer.ts`

{% tabs defaultSelectedTab="js" %}

{% tab value="js" label="JavaScript" %}

```js
const CounterActionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  SET: "SET",
};

export const initialState = { count: 0 };

export const reducer = (state, action) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case CounterActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case CounterActionTypes.RESET:
      return { ...state, count: 0 };
    case CounterActionTypes.SET:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

export const actions = {
  increment: () => ({ type: CounterActionTypes.INCREMENT }),
  decrement: () => ({ type: CounterActionTypes.DECREMENT }),
  reset: () => ({ type: CounterActionTypes.RESET }),
  set: (value) => ({ type: CounterActionTypes.SET, payload: value }),
};
```

{% /tab %}

{% tab value="ts" label="TypeScript" %}

```ts
const enum CounterActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
  SET = "SET",
}

type State = {
  count: number;
};

type Action =
  | { type: CounterActionTypes.INCREMENT }
  | { type: CounterActionTypes.DECREMENT }
  | { type: CounterActionTypes.RESET }
  | { type: CounterActionTypes.SET; payload: number };

export const initialState: State = { count: 0 };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case CounterActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case CounterActionTypes.RESET:
      return { ...state, count: 0 };
    case CounterActionTypes.SET:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

export const actions = {
  increment: (): Action => ({ type: CounterActionTypes.INCREMENT }),
  decrement: (): Action => ({ type: CounterActionTypes.DECREMENT }),
  reset: (): Action => ({ type: CounterActionTypes.RESET }),
  set: (value: number): Action => ({ type: CounterActionTypes.SET, payload: value }),
};
```

{% /tab %}

{% /tabs %}

### Fichier `Counter.jsx` ou `Counter.tsx`

{% tabs defaultSelectedTab="jsx" %}

{% tab value="jsx" label="JSX" %}

```jsx
import { initialState, actions, reducer } from "../reducers/counterReducer";
import { useReducer } from "react";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>

      <button onClick={() => dispatch(actions.increment())}>Increment</button>

      <button onClick={() => dispatch(actions.decrement())}>Decrement</button>

      <button onClick={() => dispatch(actions.reset())}>Reset</button>

      <button onClick={() => dispatch(actions.set(10))}>Set counter to 10</button>
    </div>
  );
};

export default Counter;
```

{% /tab %}

{% tab value="tsx" label="TSX" %}

```tsx
import { initialState, actions, reducer } from "../reducers/counterReducer";
import { useReducer } from "react";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>

      <button onClick={() => dispatch(actions.increment())}>Increment</button>

      <button onClick={() => dispatch(actions.decrement())}>Decrement</button>

      <button onClick={() => dispatch(actions.reset())}>Reset</button>

      <button onClick={() => dispatch(actions.set(10))}>Set counter to 10</button>
    </div>
  );
};

export default Counter;
```

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
