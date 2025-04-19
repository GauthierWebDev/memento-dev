---
title: Les hooks de React
description: Découvre les hooks de React, une fonctionnalité qui te permet de gérer le state et le cycle de vie de tes composants fonctionnels.
tags: [Frontend, React, JavaScript, TypeScript, Bibliothèque, Interface utilisateur (UI)]
---

Ça y est, on rentre dans le vif du sujet avec les **hooks** de React !

On en a déjà parlé un peu dans l'article précédent _(notamment avec le hook `useState` pour déclarer un state)_, mais on va maintenant les aborder en détail.

## 🎣 Qu'est-ce qu'un hook ?

Tu te souviens du charabia dans l'article précédent ?

> Un **hook** en React est une fonction qui permet d'exploiter les fonctionnalités de React dans un composant fonctionnel _(fonction)_.

Essayons de comprendre cette phrase un peu plus en détail en prenant l'origine des composants React.

Historiquement, on utilisait des **classes** pour déclarer des composants React plutôt que des **fonctions**.  
C'était pas mal, mais ça devenait vite compliqué à gérer, notamment pour partager de la logique entre plusieurs composants _(comme le state par exemple)_.

Pour te donner un aperçu, voici à quoi ressemblait un composant de classe avec les trois étapes du cycle de vie :

{% tabs defaultSelectedTab="jsx" %}

{% tab value="jsx" label="JSX" %}

```jsx
import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}
```

{% /tab %}

{% tab value="tsx" label="TSX" %}

```tsx
import React from 'react';

type MyComponentState = {
  count: number;
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state: MyComponentState = { count: 0 };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component unmounted');
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}
```

{% /tab %}

{% /tabs %}

Comme dirait l'un de mes chers confrères jury :

> C'est pas téros 😕

Mais si tu as bien fait attention, tu as pu remarquer trois méthodes _(on ne prend pas le constructor en compte)_ qui sont appelées à des moments précis du cycle de vie du composant :

- `componentDidMount` : appelée après le premier rendu du composant
- `componentDidUpdate` : appelée après chaque mise à jour du composant
- `componentWillUnmount` : appelée avant la suppression du composant

Seulement, comment on peut faire pour gérer ces étapes avec des composants fonctionnels ?  
Et bien c'est là qu'interviennent les **hooks** !

Avant de te montrer **comment** reproduire ces étapes avec des **hooks**, voici les **principaux hooks** de base que tu vas **très souvent** utiliser :

- `useState` : pour déclarer un **state**
- `useEffect` : pour gérer le **cycle de vie** d'un composant _(on en parle juste après !)_

Il en existe d'autres bien entendu, mais ces deux-là sont les plus utilisés.  
On reviendra sur les autres hooks "basiques" un peu plus tard 😉

## useEffect, ou la machinerie du cycle de vie

Ce hook.. il est **tellement** puissant !  
Mais il est surtout très mal compris par les débutants _(et même parfois par les confirmés)_.

Il faut dire que Facebook n'a pas aidé en le nommant `useEffect`, surtout que tu vas voir : c'est un couteau suisse ce machin 😅

Pour faire court : `useEffect` permet de gérer le cycle de vie d'un composant fonctionnel _(comme `componentDidMount`, `componentDidUpdate` et `componentWillUnmount` pour les composants de classe)_.

Oui. Il fait tout. Tout seul.  
Tu comprends pourquoi je dis "couteau suisse" ? 😏

Alors sur le papier c'est top, mais maintenant je te laisse t'amuser à comprendre comment ça fonctionne 😇

{% tabs defaultSelectedTab="1" %}

{% tab value="1" label="Écriture #1" %}

```jsx
React.useEffect(() => {
  // ...
}, []);
```

{% /tab %}

{% tab value="2" label="Écriture #2" %}

```jsx
React.useEffect(() => {
  // ...
}, [props.uneProp]);
```

{% /tab %}

{% tab value="3" label="Écriture #3" %}

```jsx
React.useEffect(() => {
  // ...
});
```

{% /tab %}

{% /tabs %}

Pas cool, hein ? 😂  
Et bien dans ces exemples, on a trois manières d'écrire un useEffect :

1. Le hook est exécuté une seule fois, après le premier rendu du composant
2. Le hook est exécuté à chaque mise à jour du composant
3. Le hook est exécuté à chaque mise à jour du composant, mais seulement si la propriété `uneProp` de `props` a changé

{% callout type="note" title="`useEffect` et les mises à jour du composant" %}

Alors quand je dis "le hook est exécuté à chaque mise à jour du composant", il faut également prendre en compte qu'il est également exécuté après le premier rendu du composant.

{% /callout %}

Mais alors, comment on fait pour gérer ces étapes avec des composants fonctionnels ?  
Si tu n'as pas vu la différence entre les trois écritures, tu remarqueras que c'est le deuxième argument de useEffect qui fait la différence.

Le premier argument lui, est une fonction synchrone _(pas le droit de la rendre asynchrone !)_. On mettra dedans tout ce qu'on veut exécuter lors de l'appel du hook.

Le deuxième argument est un tableau de dépendances.  
Selon ce tableau, le hook sera exécuté à des moments différents du cycle de vie du composant.

### ⚙️ ComponentDidMount

```jsx
React.useEffect(() => {
  // ...
}, []);
```

Le tableau de dépendances est vide, on sous-entend que le hook ne dépend d'aucune variable et sera exécuté une seule fois.  
On peut donc dire que c'est l'équivalent de `componentDidMount` pour les composants de classe.

### 🔧 ComponentDidUpdate

```jsx
React.useEffect(() => {
  // ...
});
```

Ici, le tableau de dépendances est absent _(et tout va bien, il est optionnel !)_.  
Le hook sera exécuté à chaque mise à jour du composant, ainsi que lors du premier rendu.

```jsx
React.useEffect(() => {
  // ...
}, [props.uneProp]);
```

Dans ce cas, le tableau de dépendances contient la propriété `uneProp` de `props`.
Le hook sera exécuté à chaque mise à jour du composant _(ainsi qu'au montage)_, mais seulement si la propriété `uneProp` a changé.

### 🗑️ ComponentWillUnmount

Et là, tu te dis : "Mais comment je fais pour gérer le démontage du composant ?".  
Hehehe, c'est là que ça devient intéressant 😏

```jsx
React.useEffect(() => {
  // ...
  return () => {
    // ...
  };
}, []);
```

Tu as vu ce petit `return` ? Et bien, c'est notre équivalent de `componentWillUnmount` pour les composants de classe !

Dans cette fonction de retour, on mettra tout ce qu'on veut exécuter avant la suppression du composant.

### 📦 Les dépendances

Tu as pu voir que le deuxième argument de `useEffect` est un tableau de dépendances.  
Ce tableau est très important, car il permet de gérer les mises à jour du composant.

L'idée ici, c'est **d'optimiser** le rendu du composant en évitant de déclencher des mises à jour inutiles.  
Pour éviter que React se dise "Tiens, il y a eu un changement, je vais re-rendre le composant", on va lui dire "Non, non, il n'y a pas eu de changement sur la prop que je t'ai fourni, tu peux rester tranquille".

### 🤓 Exemple concret

Allez, mettons un peu ce qu'on voit de voir en pratique !

{% tabs defaultSelectedTab="jsx" %}

{% tab value="jsx" label="JSX" %}

```jsx
import React from "react";

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  React.useEffect(() => {
    console.log("Component updated");
  });

  const increment = () => setCount(count + 1);

  return <button onClick={increment}>{count}</button>;
};
```

{% /tab %}

{% tab value="tsx" label="TSX" %}

```tsx
import React from "react";

export const Counter = () => {
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  React.useEffect(() => {
    console.log("Component updated");
  });

  const increment = () => setCount(count + 1);

  return <button onClick={increment}>{count}</button>;
};
```

{% /tab %}

{% /tabs %}

### 🔢 On revient sur le cycle de vie !

Et... stoooop !  
On revient sur le cycle de vie d'un composant maintenant qu'on a vu `useEffect` en action !

Je vais te donner un exemple de code supplémentaire et tu vas devoir deviner l'ordre d'apparition des messages dans la console.

```jsx
import React from "react";

export const MyComponent = () => {
  React.useEffect(() => {
    console.log("1");
  });

  console.log("2");

  React.useEffect(() => {
    console.log("3");
  }, []);

  const logInRender = () => {
    console.log("4");
    return null;
  };

  return <div>{logInRender()}</div>;
};
```

Voici les possibilités :

{% callout type="question" title="Quel est l'ordre d'apparition des messages dans la console ?" %}

- **A** - 4, 2, 1, 3
- **B** - 2, 4, 1, 3
- **C** - 1, 2, 3, 4
- **D** - La réponse D

{% /callout %}

## 🧩 Les autres hooks

On a vu les deux hooks les plus utilisés, mais il en existe d'autres qui peuvent être très utiles dans certaines situations.

Par exemple, on a :

- `useContext` : pour accéder à un contexte
- `useReducer` : pour gérer un state complexe
- `useCallback` : pour éviter les re-rendus inutiles
- `useMemo` : pour éviter les calculs inutiles
- `useRef` : pour accéder à un élément du DOM

Ne t'inquiète pas, on va les voir plus tard car le hook `useEffect` est déjà bien assez complexe à comprendre pour le moment 😅

## Conclusion

Et voilà, tu as maintenant toutes les clés en main pour gérer le cycle de vie de tes composants fonctionnels avec les hooks de React !

Vraiment, même si les autres hooks restent importants _(voire obligatoires dans certains contextes)_, tu as déjà de quoi faire de bons composants avec seulement ces deux là 😁
