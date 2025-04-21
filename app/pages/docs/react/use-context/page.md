---
title: Le hook useContext de React
description: Découvrez comment utiliser le hook useContext de React pour gérer les contextes dans vos applications.
tags: [Frontend, React, JavaScript, TypeScript, Bibliothèque, Interface utilisateur (UI)]
---

Les contextes sont un moyen de diffuser des données au travers des composants, sans avoir à les passer explicitement à chaque composant.

Pour faire simple, imaginons une arborescence de plusieurs composants imbriqués les uns dans les autres :

{% tabs defaultSelectedTab="jsx" %}

{% tab value="jsx" label="JSX" %}

```jsx
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  return <A theme={theme} setTheme={theme} />;
};

const A = ({ theme, setTheme }) => {
  return <B theme={theme} setTheme={setTheme} />;
};

const B = ({ theme, setTheme }) => {
  return <C theme={theme} setTheme={setTheme} />;
};
```

{% /tab %}

{% tab value="tsx" label="TSX" %}

```tsx
import type { Dispatch, SetStateAction } from "react";

import { useState } from "react";

type Theme = "light" | "dark";

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");

  return <A theme={theme} setTheme={theme} />;
};

const A = ({ theme, setTheme }: { theme: Theme; setTheme: Dispatch<SetStateAction<Theme>> }) => {
  return <B theme={theme} setTheme={setTheme} />;
};

const B = ({ theme, setTheme }: { theme: Theme; setTheme: Dispatch<SetStateAction<Theme>> }) => {
  return <C theme={theme} setTheme={setTheme} />;
};
```

{% /tab %}

{% /tabs %}

Fastidieux, n'est-ce pas ? On transmet à chaque fois les mêmes données, et ce, à chaque niveau de l'arborescence.

C'est là que les contextes entrent en jeu !  
On va pouvoir alors déclarer notre contexte _(qui contiendra les données à diffuser)_ et le fournir à un niveau supérieur de l'arborescence.

## Déclaration d'un contexte

Avant de penser à notre contexte, on va réfléchir à ce que l'on veut diffuser et les valeurs par défaut.  
Si on reprend notre exemple avec le thème clair et sombre, on sait que l'on va vouloir diffuser la valeur du thème et une fonction pour le changer.

On va donc préparer le terrain en créant un fichier `ThemeContext.jsx` _(ou `ThemeContext.tsx` si tu utilises TypeScript)_ :

{% tabs defaultSelectedTab="jsx" %}

{% tab value="jsx" label="JSX" %}

```jsx
import { createContext } from "react";

// On crée notre contexte, avec une valeur par défaut : un thème clair
const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});
```

{% /tab %}

{% tab value="tsx" label="TSX" %}

```tsx
import type { Dispatch, SetStateAction } from "react";

import { createContext } from "react";

// On crée un type pour les valeurs de thème
export type Theme = "light" | "dark";

// On crée un type pour notre contexte
type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

// On crée notre contexte, avec une valeur par défaut : un thème clair
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});
```

{% /tab %}

{% /tabs %}

## Fournir un contexte

Maintenant on peut le dire : notre contexte est prêt à être utilisé !  
Il ne reste plus qu'à le fournir à notre arborescence de composants en lui créant un `Provider`.

{% callout type="question" title="Un provider ?" %}

Un `Provider` est un composant qui va permettre de **diffuser** les données du contexte à ses enfants.  
Il est important de noter que le `Provider` doit **englober** les composants qui vont utiliser le contexte.

{% /callout %}

Un contexte React est un objet qui contient deux propriétés : `Provider` et `Consumer`.

Le `Provider` est un composant qui va permettre de diffuser les données du contexte à ses enfants.  
Le `Consumer` est un composant qui va permettre de récupérer les données du contexte.

{% tabs defaultSelectedTab="jsx" %}

{% tab value="jsx" label="JSX" %}

```jsx
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <A />
    </ThemeContext.Provider>
  );
};
```

{% /tab %}

{% tab value="tsx" label="TSX" %}

```tsx
import type { Theme } from "./ThemeContext";

import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <A />
    </ThemeContext.Provider>
  );
};
```

{% /tab %}

{% /tabs %}

Mais on peut aller encore plus loin, en créant un Provider dédié à notre contexte !  
Cela permettra de simplifier l'arborescence de composants et de rendre le code plus lisible :

{% tabs defaultSelectedTab="jsx" %}

{% tab value="jsx" label="JSX" %}

```jsx
import { createContext, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
```

{% /tab %}

{% tab value="tsx" label="TSX" %}

```tsx
import type { ReactNode } from "react";

import { createContext, useState } from "react";

export type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
```

{% /tab %}

{% /tabs %}

Et pour terminer, on va maintenant pouvoir directement imbriquer notre `ThemeProvider` dans notre `App` :

```jsx
import { ThemeProvider } from "./ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <A />
    </ThemeProvider>
  );
};
```

## Utilisation d'un contexte

C'est bien beau de créer un contexte, mais comment l'utiliser ?  
Tu te souviens peut-être du `Consumer` que l'on a évoqué plus tôt, non ?

Et bien, il est temps de le mettre en pratique ! 😁

Pour commencer, nous allons avoir besoin du hook `useContext` de React.  
Ce hook va nous permettre de récupérer les données du contexte, et ce, directement dans nos composants.

```jsx
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

const C = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return <>{/** JSX */}</>;
};
```

Pas mal, non ? 😉  
Fini l'arborescence de composants à rallonge, on peut maintenant récupérer les données du contexte directement dans nos composants !

## Les défauts des contextes

Seulement... Un grand pouvoir implique de grandes responsabilités. 🕷️

Bien que les contextes soient très pratiques, il faut prendre en compte quelques points :

- On ne peut pas utiliser les contextes pour tout et n'importe quoi. Ils sont plutôt adaptés pour diffuser des données qui sont utilisées par plusieurs composants.
- Les contextes peuvent rendre le code plus difficile à comprendre.
- L'utilisation de nombreux contextes va faire apparaître ce qu'on appelle le **context hell**.

### Le context hell

Dans cet article, nous avons vu comment créer un contexte et l'utiliser.  
Et par chance, nous n'avons pas encore rencontré le **context hell**.

Mais maintenant, que se passe-t-il si on a besoin de plusieurs contextes _(plusieurs dizaines par exemple !)_ dans notre application ?  
On va se retrouver avec une arborescence de composants qui va devenir de plus en plus difficile à comprendre et à maintenir.

Et c'est ça, le **context hell**.

```jsx
root.render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          <PostProvider>
            <SettingsProvider>
              <SocketProvider>
                <FriendProvider>
                  <NotificationProvider>
                    <ChatProvider>
                      <MusicProvider>
                        <VideoProvider>
                          <GameProvider>
                            <WeatherProvider>
                              <NewsProvider>
                                <CalendarProvider>
                                  <TaskProvider>
                                    <NoteProvider>
                                      <App />
                                    </NoteProvider>
                                  </TaskProvider>
                                </CalendarProvider>
                              </NewsProvider>
                            </WeatherProvider>
                          </GameProvider>
                        </VideoProvider>
                      </MusicProvider>
                    </ChatProvider>
                  </NotificationProvider>
                </FriendProvider>
              </SocketProvider>
            </SettingsProvider>
          </PostProvider>
        </LanguageProvider>
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
);
```

Maintenant, demande à un développeur d'inverser le provider `UserProvider` avec le provider `NoteProvider`.  
C'est jouable sans difficulté, mais si tu entends des cris de désespoir, c'est normal. 😅

Pour éviter de tomber dans le **context hell**, il est important de bien réfléchir à l'utilisation des contextes dans notre application avec ces quelques questions :

- Est-ce que l'utilisation d'un contexte est vraiment nécessaire pour ce cas d'usage ?
- Est-ce que le contexte est utilisé par plusieurs composants ?
- Est-ce que le contexte est utilisé par des composants éloignés dans l'arborescence ?

Mais alors, si tu as besoin d'autant de contextes dans ton application, comment faire ?  
Et bien, il existe des solutions pour éviter le **context hell** :

- Utiliser des bibliothèques tierces comme Redux _(solution lourde, mais très puissante)_
- Créer un nouveau composant qui va regrouper tous les contextes _(solution plus légère, mais plus difficile à maintenir)_

N'étant pas un grand fan de Redux, je vais plutôt te présenter la deuxième solution.  
Mais si tu veux en savoir plus sur Redux, n'hésite pas à consulter la documentation officielle !

### Résoudre le context hell avec un composant dédié

Parlons de ce fameux composant qui va regrouper tous les contextes !
On ne parle pas ici d'un simple composant Providers qui va imbriquer tous les Provider de nos contextes, mais d'une solution plus élégante.

Après tout, nous sommes des feignants développeurs, non ? 😏

Réfléchissons à ce que l'on veut faire :

- On veut pouvoir regrouper tous les contextes dans un seul composant.
- On veut pouvoir ajouter ou supprimer des contextes facilement.
- On veut pouvoir facilement les ordonner entre eux.
- On veut éviter le **context hell**.

Et si on créait un composant Providers qui va nous permettre de faire tout ça ?

{% tabs defaultSelectedTab="jsx" %}

{% tab value="jsx" label="JSX" %}

```jsx
const Providers = ({ providers, children }) => {
  return (
    <>
      {/** Ouverture des providers */}
      {children}
      {/** Fermeture des providers */}
    </>
  );
};
```

{% /tab %}

{% tab value="tsx" label="TSX" %}

```tsx
import type { ReactNode } from "react";

type ProvidersProps = {
  providers: ReactNode[];
  children: ReactNode;
};

const Providers = ({ providers, children }: ProvidersProps) => {
  return (
    <>
      {/** Ouverture des providers */}
      {children}
      {/** Fermeture des providers */}
    </>
  );
};
```

{% /tab %}

{% /tabs %}

Ici on ne va pas remettre une cascade de Provider comme on a pu le voir plus tôt.
On va chercher à créer une fonction qui va nous permettre de les imbriquer les uns dans les autres.

{% tabs defaultSelectedTab="jsx" %}

{% tab value="jsx" label="JSX" %}

```jsx
const nest = (children, component) => {
  return React.cloneElement(component, {}, children);
};
```

{% /tab %}

{% tab value="tsx" label="TSX" %}

```tsx
const nest = (children: ReactNode, component: ReactNode) => {
  return React.cloneElement(component, {}, children);
};
```

{% /tab %}

{% /tabs %}

{% callout type="note" title="React.cloneElement" %}

`React.cloneElement` est une fonction qui va permettre de cloner un élément React en lui passant de nouvelles propriétés.  
Cela va nous permettre de créer une nouvelle arborescence de composants sans modifier l'arborescence actuelle.

Le premier argument est l'élément à cloner _(le composant)_, et le deuxième argument est un objet contenant les nouvelles propriétés.  
Le troisième argument est le contenu de l'élément cloné _(les enfants)_.

{% /callout %}

Et maintenant, on va pouvoir utiliser notre fonction `nest` pour imbriquer nos Provider en utilisant la méthode `reduceRight` :

{% tabs defaultSelectedTab="jsx" %}

{% tab value="jsx" label="JSX" %}

```jsx
const nest = (children, component) => {
  return React.cloneElement(component, {}, children);
};

const Providers = ({ providers, children }) => {
  return providers.reduceRight(nest, children);
};
```

{% /tab %}

{% tab value="tsx" label="TSX" %}

```tsx
import type { ReactNode } from "react";

type ProvidersProps = {
  providers: ReactNode[];
  children: ReactNode;
};

const nest = (children: ReactNode, component: ReactNode) => {
  return React.cloneElement(component, {}, children);
};

const Providers = ({ providers, children }: ProvidersProps) => {
  return providers.reduceRight(nest, children);
};
```

{% /tab %}

{% /tabs %}

{% callout type="note" title="reduceRight" %}

reduceRight est une méthode qui va permettre de réduire un tableau _(ou un objet)_ en appliquant une fonction de rappel de droite à gauche.  
Cela va nous permettre de réduire un tableau de `Provider` en les imbriquant les uns dans les autres sans se soucier de l'ordre _(qui est défini par le tableau)_.

Dans l'idée, on commence par le **dernier** élément du tableau, et on l'imbrique avec l'élément **précédent** du tableau et ainsi de suite jusqu'au **premier** élément du tableau.  
Chaque itération va créer un nouvel élément imbriqué dans le précédent, en appelant la fonction `nest` qui est passée en argument.

{% /callout %}

Et voilà ! Il ne nous reste plus qu'à utiliser notre composant `Providers` pour regrouper tous nos `Provider` :

```jsx
root.render(
  <StrictMode>
    <Providers
      providers={[
        <UserProvider />,
        <ThemeProvider />,
        <LanguageProvider />,
        <PostProvider />,
        <SettingsProvider />,
        <SocketProvider />,
        <FriendProvider />,
        // ...
      ]}
    >
      <App />
    </Providers>
  </StrictMode>,
);
```

Évidemment le fichier contiendra toujours beaucoup de lignes, mais au moins, on a évité le **context hell** !  
Il sera nettement plus facile de modifier l'ordre des Provider ou d'en ajouter de nouveaux.

## Conclusion

Ça casse un peu la tête, mais les contextes sont un outil très puissant pour diffuser des données dans nos applications React.

C'est aussi une excellente solution pour éviter d'utiliser des bibliothèques tierces comme Redux _(qui est très bien, mais qui peut être un peu lourd pour des petites applications)_.  
On prendra d'ailleurs le temps de parler de Redux et de Zustand dans un prochain article 😉

Et si tu as besoin de plusieurs contextes dans ton application, n'oublie pas de réfléchir à l'utilisation de notre composant Providers pour éviter le **context hell**.
