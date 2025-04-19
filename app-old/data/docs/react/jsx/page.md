---
title: La syntaxe JSX de React
description: Découvrons la syntaxe JSX, un langage de balisage utilisé par React pour décrire l'interface utilisateur.
tags: [Frontend, React, JavaScript, TypeScript, Bibliothèque, Interface utilisateur (UI)]
---

Avant de commencer à parler des composants React, découvrons tranquillement la syntaxe **JSX**.

Le **JSX** est un sucre syntaxique _(une syntaxe plus lisible et plus simple que le JavaScript pur)_ qui permet de décrire l'interface utilisateur _(UI)_ de notre application.

Le sigle en lui-même signifie **JavaScript XML**, dans le sens où l'on va retrouver une syntaxe proche du **XML** _(eXtensible Markup Language)_ qui est un langage de balisage _(comme le **HTML**)_.

## 🔍 Différences entre HTML et JSX

Et oui, le **JSX** ressemble beaucoup au **HTML** et c'est normal !  
C'est l'objectif premier de **React** : rendre la création d'interfaces utilisateur _(UI)_ plus simple et plus intuitive.

Cependant il ne faut pas oublier que le **JSX** n'est pas du **HTML**, mais du **JavaScript**.

Pour faire plus simple, voici un élément **HTML** et son équivalent avec React _(avec et sans JSX)_ :

{% tabs defaultSelectedTab="html" %}

{% tab value="html" label="HTML" %}

```html
<button class="button">Clique moi !</button>
```

{% /tab %}

{% tab value="react-no-jsx" label="React sans JSX" %}

```js
React.createElement("button", { className: "button" }, "Clique moi !");
```

{% /tab %}

{% tab value="jsx" label="React avec JSX" %}

```jsx
<button className="button">Clique moi !</button>
```

{% /tab %}

{% /tabs %}

Comme tu peux le constater, la différence entre le **JSX** et le **HTML** est minime.  
Il y a toutefois des différences, comme certains mots réservés _(comme `class` qui devient `className`)_ ou encore la manière de déclarer des événements _(comme `onclick` qui devient `onClick`)_.

Par contre si on regarde la différence entre le **JSX** et le **JavaScript pur** _(en utilisant React quand même)_, on voit bien que le **JSX** est beaucoup plus lisible et plus simple à écrire.

Là où c'est encore plus flagrant, c'est quand on commence à imbriquer des éléments _(comme des composants React par exemple)_ !

{% tabs defaultSelectedTab="react-no-jsx" %}

{% tab value="react-no-jsx" label="React sans JSX" %}

```js
React.createElement(
  React.Fragment,
  null,
  React.createElement("h2", null, "Formulaire de contact"),
  React.createElement(
    "form",
    { onSubmit: handleSubmit },
    React.createElement(
      "fieldset",
      null,
      React.createElement("label", { htmlFor: "lastname" }, "Nom"),
      React.createElement("input", { type: "text", name: "lastname", id: "lastname", required: true }),
    ),
    React.createElement(
      "fieldset",
      null,
      React.createElement("label", { htmlFor: "email" }, "Email"),
      React.createElement("input", { type: "email", name: "email", id: "email", required: true }),
    ),
    React.createElement(
      "fieldset",
      null,
      React.createElement("label", { htmlFor: "message" }, "Message"),
      React.createElement("textarea", { name: "message", id: "message", required: true }),
    ),
    React.createElement(
      "fieldset",
      null,
      React.createElement(
        "label",
        { htmlFor: "gdpr" },
        React.createElement("input", { type: "checkbox", name: "gdpr", id: "gdpr", required: true }),
        "J'accepte que mes données soient utilisées pour me recontacter",
      ),
    ),
    React.createElement("button", { type: "submit" }, "Envoyer"),
  ),
);
```

{% /tab %}

{% tab value="jsx" label="React avec JSX" %}

```jsx
<React.Fragment>
  <h2>Formulaire de contact</h2>
  <form onSubmit={handleSubmit}>
    <fieldset>
      <label htmlFor="lastname">Nom</label>
      <input type="text" name="lastname" id="lastname" required>
    </fieldset>

    <fieldset>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" required>
    </fieldset>

    <fieldset>
      <label for="message">Message</label>
      <textarea name="message" id="message" required></textarea>
    </fieldset>

    <fieldset>
      <label for="gdpr">
        <input type="checkbox" name="gdpr" id="gdpr" required>
        J'accepte que mes données soient utilisées pour me recontacter
      </label>
    </fieldset>

    <button type="submit">Envoyer</button>
  </form>
</React.Fragment>
```

{% /tab %}

{% /tabs %}

Et bien même si le code final est **identique**, le **JSX** apporte une lisibilité et une simplicité d'écriture qui est très appréciable. Pas mal non ? 😄

Et donc oui ! En faisant du **JSX**, on fait en réalité du **JavaScript** et **pas du HTML** !

{% callout type="note" title="Importation de React et ses exports" %}

Au sein de ses pages, tu verras **toujours** que j'importe le contenu de React en intégralité _(comme `import React from 'react';`)_.

Dans la réalité, on va destructurer les exports de React pour n'importer que ce dont on a besoin.

Cependant, pour te donner l'information d'où provient chaque élément, je préfère importer React en intégralité et que tu puisses visualiser les éléments de React utilisés avec leur provenance.

{% /callout %}

## 🧩 Intégration de JavaScript dans le JSX

Mais l'un des autres avantages du **JSX** est la possibilité d'ajouter du JavaScript directement dans le code !

Pour pouvoir ajouter du JavaScript dans le **JSX**, il suffit d'entourer le code JavaScript avec des accolades `{}`.
C'est un peu comme si on "ouvrait un portail" pour insérer du JavaScript dans notre code **JSX**.

### 📦 Variables et fonctions

Par exemple, si tu veux afficher une variable dans ton JSX, tu peux le faire directement :

```jsx
const name = "Jean Dupont";

return <h1>Bonjour {name} !</h1>;
```

Et si tu veux appeler une fonction, c'est tout aussi simple :

```jsx
const sayHello = () => "Bonjour !";

return <p>{sayHello()}</p>;
```

### 📝 Expressions

Tu peux également ajouter des expressions _(comme des conditions ternaires par exemple)_ :

```jsx
const age = 18;

return <p>{age >= 18 ? "Majeur" : "Mineur"}</p>;
```

Mais tu peux aussi faire un **affichage conditionnel** de manière très simple :

```jsx
const isLogged = false;

return (
  <div>
    {isLogged && <p>Bienvenue sur notre site !</p>}
    {!isLogged && <p>Connectez-vous pour accéder à notre site</p>}
  </div>
);
```

### 🔄️ Boucles

Maintenant imagine que tu souhaites créer une interface qui liste des éléments provenant d'un tableau.

```jsx
const fruits = ["pomme", "banane", "fraise"];
```

Dans un premier temps, on va revoir très rapidement comment on peut parser un tableau en JavaScript :

- `for` :

  ```js
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
  ```

- `forEach` :

  ```js
  fruits.forEach((fruit) => {
    console.log(fruit);
  });
  ```

- `map` :
  ```js
  fruits.map((fruit) => {
    console.log(fruit);
  });
  ```

En soit, toutes ces méthodes sont très bien et font ce qu'on leur demande sans souci.
Cependant, React ne va pas forcément aimer ça sauf pour `map`.

La raison est simple :  
React a besoin qu'on lui **retourne un élément** _(ou un tableau d'éléments)_ pour pouvoir les afficher.

Alors avec des `console.log` on ne va pas aller loin, mais si au lieu de retourner un `console.log` on retournait un élément **JSX** ? 🤔

```jsx
const fruits = ["pomme", "banane", "fraise"];

return (
  <ul>
    {fruits.map((fruit) => (
      <li key={fruit}>{fruit}</li>
    ))}
  </ul>
);
```

[Voir l'exemple sur PlayCode](https://playcode.io/1940876)

Et là : **BAM** ! 💥  
Tu viens de créer une liste de fruits en utilisant un tableau de fruits.

Mais par contre...

{% callout type="question" title="C'est quoi ce `key` qui vient d'apparaître ?" %}

La `key` est une propriété spéciale que React utilise pour identifier chaque élément de manière unique.  
Cela permet à React de savoir quel élément a été ajouté, modifié ou supprimé.

Il est **obligatoire** d'avoir une `key` **unique** pour chaque élément d'une liste.  
Si tu listes des éléments qui ont un identifiant unique _(comme l'`id` qu'on aura dans nos données stockées dans une base de données par exemple)_, tu peux utiliser cet identifiant comme `key`.

{% /callout %}

## 📦 Les props

Les **props** _(ou propriétés)_ sont des arguments que l'on peut passer à un composant React.  
Je ne vais pas trop rentrer dans les détails ici, car on va les voir dans l'article d'après !

Mais pour te donner un aperçu, voici comment on peut passer des **props** à un composant :

{% tabs defaultSelectedTab="jsx" %}

{% tab value="jsx" label="JSX" %}

```jsx
const Button = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};
```

{% /tab %}

{% tab value="tsx" label="TSX" %}

```tsx
type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};
```

{% /tab %}

{% /tabs %}

Ici, on a un composant `Button` qui prend deux **props** : `onClick` et `children`.  
`onClick` est une fonction qui sera appelée lorsqu'on cliquera sur le bouton, et `children` est tout ce qui se trouve entre les balises ouvrante et fermante du composant.

## Conclusion

Alors, plutôt cool le **JSX** non ? 😎

Même si cette syntaxe rebute certains développeurs _(souvent ils se la jouent puristes, mais chuuuuut 🤫)_, elle est toutefois très appréciée pour sa simplicité et sa lisibilité.  
Question de goût après tout !
