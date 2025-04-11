---
title: Introduction à Merise
description: Parlons un peu de Merise, la fameuse méthodologie de modélisation pour la conception de bases de données.
tags: [Backend, Merise, BDD, MCD, MLD, MPD, SQL]
---

On va enfin pouvoir commencer à réaliser notre premier schéma : le **MCD** _(Modèle Conceptuel de Données)_ !

Mais déjà... qu'est-ce que c'est que ce MCD ?

## Qu'est-ce que le MCD ?

Le **MCD** est un schéma qui va nous permettre de représenter les données que l'on a récupérées dans le dictionnaire de données.

Il va nous permettre de représenter les différentes données que l'on a, regroupée dans un rectangle nommé **entité**, ainsi que les relations entre elles.  
On devra également indiquer les **cardinalités** de chaque relation entre les **entités**.

Tout comme le dictionnaire de données, ce schéma doit rester compréhensible par le client.  
Il doit donc être le plus simple possible, et ne pas contenir de détails techniques.

Pour ce schéma _(ainsi que les suivants)_, on va utiliser le logiciel **Looping**.

## Définitions

Tu l'auras remarqué, ici on ne parle pas de "table" ou de "colonne".  
On va exploiter d'autres termes comme **entité**, **attribut** ou **relation**.

Voici un petit lexique pour t'aider à comprendre :

| Terme                                   | Définition                                                                            |
| --------------------------------------- | ------------------------------------------------------------------------------------- |
| **Entité**                              | Représentation d'un regroupement de données _(rectangle)_                             |
| **Attribut**                            | Donnée précise d'une entité                                                           |
| **Relation**                            | Lien entre deux entités _(bulle ovale/arrondie)_, accompagné d'un verbe à l'infinitif |
| **Cardinalité**                         | Nombre d'occurrences _(minimum et maximum)_ d'une entité par rapport à une autre      |
| **Discriminant** _(ou **déterminant**)_ | Attribut qui permet d'identifier une entité de manière unique _(ex: matricule)_       |

C'est tout un lexique à apprendre, mais pas de panique tu vas vite t'y habituer !

## Premières entités

Commençons par créer notre MCD avec les données que l'on a récupérées dans le dictionnaire de données !  
En reprenant notre tableau précédent, on constate que l'on a :

- **Pomme de terre**
- **Salarié**
- **Vente**

Dans un premier temps, concentrons-nous sur les deux premières entités : **Pomme de terre** et **Salarié**.

On va donc créer deux rectangles, un pour chaque entité.  
Dans chacune d'elles, on va ajouter les attributs que l'on a récupérés dans le dictionnaire de données.

On se retrouve donc avec un schéma similaire à celui-ci :

![MCD - Entités (étape 1)](/merise/mcd-1.webp)

On a donc deux entités : **Pomme de terre** et **Salarié**.  
Chacune d'elles contient les attributs que l'on a récupérés dans le dictionnaire de données.

Avant d'aller plus loin, on va analyser ce qu'on a fait.

### Entité "Pomme de terre"

L'entité **Pomme de terre** contient les attributs suivants :

- **Variété** : Nom de la variété de la pomme de terre
- **Stock** : Quantité de pommes de terre en stock

### Entité "Salarié"

L'entité **Salarié** contient les attributs suivants :

- **Matricule** : Numéro d'immatriculation du salarié
- **Nom** : Nom du salarié
- **Prénom** : Prénom du salarié

## Spécificité des attributs d'entité

C'est un bon début, mais il nous manque des choses !  
Il est essentiel de pouvoir identifier une ressource de manière unique.

Côté base de données on parle souvent de **clé primaire** _(ou **primary key**)_, mais souvenons-nous que notre document doit rester compréhensible par le client.  
On parlera donc de **discriminant** _(ou **déterminant**)_.

Si on regarde notre entité **Pomme de terre**, on peut se rendre compte que l'on n'a pas d'attribut qui permet d'identifier une pomme de terre de manière unique.
On va donc ajouter un nouvel attribut : **Code pomme de terre**.

Ce terme se veut simple et compréhensible par le client, mais il est important de lui expliquer que ce code est unique pour chaque pomme de terre.
On va donc ajouter cet attribut à notre entité **Pomme de terre**.

Pour l'entité **Salarié**, on a déjà un attribut qui permet d'identifier un salarié de manière unique : **Matricule**.  
On va donc le garder tel quel, en le considérant comme un **discriminant**.

On va donc mettre à jour notre MCD avec les nouveaux attributs :

![MCD - Entités (étape 2)](/merise/mcd-2.webp)

Et déjà, c'est beaucoup mieux !

{% callout type="warning" title="Discriminant et ID" %}

Tu l'auras remarqué, je n'ai pas utilisé le terme `ID` pour désigner le **discriminant**.  
La raison est simple : le terme `ID` est souvent utilisé pour désigner un identifiant **technique**.

Il ne s'agit pas d'une donnée réelle à proprement parler, mais d'un identifiant qui va nous permettre de retrouver une donnée dans la base de données.

Le client n'ayant pas besoin de savoir ce qu'est un identifiant technique, on va préférer utiliser le terme **discriminant** ou **déterminant**.

{% /callout %}

## Données uniques et discriminants

Je fais un rapide point entre les données uniques et discriminants !  
Les deux attributs sont **uniques**, mais n'ont pas la même signification.

Dans l'exemple donné plus tôt avec l'attribut **Matricule**, il s'agit d'un **discriminant naturel**. Dans ce cas précis, il s'agit d'une **donnée réelle** _(métier)_ qui permet d'identifier un salarié de manière unique.

Maintenant, prenons l'exemple d'un compte utilisateur sur un site web avec :

- **Email** : Adresse email de l'utilisateur
- **Mot de passe** : Mot de passe de l'utilisateur

On serait tenté de se dire que l'adresse email est un discriminant du fait que cette donnée se doit d'être unique.  
Pourtant, ce n'est pas le cas.

La raison est simple : l'adresse email peut être **modifiée par l'utilisateur**.

Un discriminant se veut **unique**, **fixe** et **non modifiable**.  
En gros, les mêmes contraintes que pour une **clé primaire** _(même si on ne doit pas utiliser ce terme dans un MCD)_.

Maintenant, à quoi ça ressemble dans un MCD ?

### Représentation graphique entre discriminant et unique

Une donnée unique se représente par une écriture **épaisse** sur le nom de l'attribut d'une entité.  
On sait qu'il s'agit d'une donnée unique, mais pas forcément d'un discriminant.

Le discriminant reprend cette même écriture, mais ajoute un **soulignement** sur le nom de l'attribut.

![MCD - Discriminant et unique](/merise/mcd-3.webp)

## Relations entre entités

Oui, on passe déjà aux relations entre entités !  
Et si jamais tu te poses la question : "Et **Vente** alors ?"... et bien on en parle juste maintenant !

Dans notre situation, une vente relie les entités **Pomme de terre** et **Salarié**.  
On va donc créer une nouvelle entité : **Vente**.

Dans notre cas, on sait qu'une vente est réalisée par un salarié et concerne une ou plusieurs pommes de terre.  
C'est donc maintenant que l'on peut parler de **cardinalité** !

### Écriture et lecture des cardinalités

La cardinalité est un élément essentiel dans la modélisation de données. Elle permet de définir le nombre d'occurrences d'une entité par rapport à une autre.

Une cardinalité se compose de deux valeurs :

- **Minimum** : Nombre minimum d'occurrences _(0, 1, ...)_
- **Maximum** : Nombre maximum d'occurrences _(1, 2, N, ...)_

{% callout type="question" title="C'est quoi ce `N` ?" %}

`N` représente une valeur **illimitée**.

Dans le cas d'une vente, on ne limite pas le nombre maximale de variétés de pommes de terre vendues lors d'une transaction.  
On peut donc dire que le nombre de variétés de pommes de terre vendues est **illimité**.

{% /callout %}

## Définition de nos cardinalités

Il est temps d'en finir avec notre MCD et ces histoires de cardinalités !

Voici comment on va définir nos cardinalités :

- **Pomme de terre** et **Vente** :
  - Une pomme de terre peut être vendue plusieurs fois, mais pas forcément _(0,N)_
  - Une vente concerne au moins une pomme de terre, jusqu'à une infinité de pommes de terre _(1,N)_
- **Salarié** et **Vente** :
  - Un salarié peut réaliser plusieurs ventes, mais pas forcément _(0,N)_
  - Une vente est réalisée par un et un seul salarié _(1,1)_

En ajoutant des verbes **à l'infinitif** pour expliquer la relation entre les entités, on obtient :

![MCD - Relations entre entités](/merise/mcd-4.webp)

Et là, on est presque bon !  
Il nous manque juste un petit détail : la **quantité** vendue d'une variété de pomme de terre au cours d'une vente.

## Relations N-N

Si on regarde de plus prêt notre relation **INCLURE** entre **Pomme de terre** et **Vente**, on se rend compte qu'il s'agit d'une relation **N-N** _(N-N)_.

Ce type de relation permet l'ajout d'attributs à la relation elle-même.  
Lors de l'étape suivante _(MLD)_, on verra comment gérer ce type de relation.

Ici, on va pouvoir ajouter un nouvel attribut à notre relation : **Quantité**.

![MCD - Relations N-N](/merise/mcd-5.webp)

---

Gros morceau, n'est-ce pas ? 😅

## Ressources supplémentaires

- [La vérité sur les id - Jean Prulière](https://jeanpruliere.medium.com/la-v%C3%A9rit%C3%A9-sur-les-id-507134adda12)

---

Prochaine étape, on parle du **MLD** _(Modèle Logique de Données)_ !
