---
title: Introduction à Merise
description: Parlons un peu de Merise, la fameuse méthodologie de modélisation pour la conception de bases de données.
tags: [Backend, Merise, BDD, MCD, MLD, MPD, SQL]
---

Le **dictionnaire de données** est un document qui contient toutes les informations sur les données qui vont être stockées dans la future base de données.

Ici, on ne va pas parler de tables, de colonnes ou de relations, mais uniquement de **données**. Ces informations nous sont données par le client, et il est important que le dictionnaire reste compréhensible par le client.

En gros : Le dictionnaire de données se veut **non technique** et **compréhensible par le client**.

Pour cet article et les suivants, on va se reposer sur une mise en situation fictive, pour un client qui vend des pommes de terre.

## Brief avec le client

Le client nous a demandé de réaliser une application pour qu'il puisse s'organiser entre ses salariés et ses pommes de terre à vendre.

Voici ce qu'il nous a dit :

> Je souhaite une application qui me permette de connaître mon stock de pommes de terre et savoir combien j'en ai vendu. Plusieurs de mes salariés s'occupent d'en vendre, il faut que je sois en mesure de connaître les performances de vente de chacun d'eux. Pour les pommes de terre, j'en possède plusieurs variétés.

Évidemment, même si l'idée principale est facilement compréhensible, on aura besoin de creuser un peu plus pour savoir ce qu'il veut vraiment.  
On réservera ça pour la finalisation du dictionnaire de données !

## Retranscription du brief

Si on résume ce qu'on sait, on a :

- **Pommes de terre** :

  - **Variété** : Nom de la variété de la pomme de terre
  - **Stock** : Quantité de pommes de terre en stock

- **Salarié** :

  - **Nom** : Nom du salarié
  - **Prénom** : Prénom du salarié

- **Vente** :
  - **Date** : Date de la vente
  - **Quantité** : Quantité de pommes de terre vendues
  - **Prix** : Prix de vente unitaire
  - **Vendeur** : Nom du salarié qui a vendu les pommes de terre

Ce sont ces informations que l'on va devoir stocker dans notre base de données.

## Dictionnaire de données

En reprenant les informations que l'on a, on va pouvoir créer notre dictionnaire de données.

| Groupe de la donnée | Nom de la donnée           | Type de donnée | Description                                    |
| ------------------- | -------------------------- | -------------- | ---------------------------------------------- |
| Pommes de terre     | variété                    | Texte          | Nom de la variété de la pomme de terre         |
| Pommes de terre     | stock                      | Nombre         | Quantité de pommes de terre en stock           |
| Salarié             | matricule                  | Texte          | Numéro d'immatriculation du salarié, unique    |
| Salarié             | nom                        | Texte          | Nom du salarié                                 |
| Salarié             | prénom                     | Texte          | Prénom du salarié                              |
| Vente               | date                       | Date           | Date de la vente                               |
| Vente               | quantité vendue            | Nombre         | Quantité de pommes de terre vendues            |
| Vente               | prix total                 | Nombre         | Prix de vente unitaire                         |
| Vente               | Salarié (individuel)       | Non applicable | Salarié en charge de la vente                  |
| Vente               | Pomme de terre (multiples) | Non applicable | Pommes de terre vendues lors d'une transaction |

Comme tu peux le voir, nous utilisons des termes simples et compréhensibles par le client.  
Il ne faut **surtout pas** perdre le client avec des termes techniques comme `VARCHAR` par exemple.

Maintenant que nos données sont relativement bien définies, on va pouvoir refaire un point avec le client pour **lui faire valider** cette ébauche et lui demander des précisions sur les données.

## Validation du dictionnaire de données

De retour avec notre client, on commence par lui présenter notre dictionnaire de données.  
Si on a bien fait notre travail, il devrait être capable de comprendre ce que l'on lui présente.

Et encore mieux, il devrait être capable de nous dire si on a bien compris ses besoins ou pas !

On profite de cette validation pour lui poser quelques questions sur les données que l'on a.  
C'est l'occasion de connaître la forme et les contraintes de certaines données.

Ici on se concentrera sur la modélisation de la base de données, mais c'est aussi le moment de voir avec lui comment il souhaite que l'application réagisse en fonction de certaines actions et données _(rupture de stock, alerte sur les ventes, etc.)_ pour la partie applicative.

On peut lui poser des questions comme :

- Quelle est la quantité minimale de pommes de terre à avoir en stock ? _(Permet de savoir si on doit gérer un stock négatif ou pas.)_
- Pouvez-vous nous donner une liste des variétés de pommes de terre que vous vendez ? _(Permet d'estimer le nombre de caractères à allouer au champ `variété`.)_

## Dictionnaire de données finalisé

Selon les questions posées et les réponses obtenues par le client, on va pouvoir finaliser notre dictionnaire de données.  
On va donc ajouter des précisions sur les données, comme la taille attendue, le type de données et si la taille est fixe ou pas.

| Groupe de la donnée | Nom de la donnée           | Type de donnée | Taille attendue | Taille fixe ?  | Description                                    |
| ------------------- | -------------------------- | -------------- | --------------- | -------------- | ---------------------------------------------- |
| Pomme de terre      | variété                    | Texte          | 50 caractères   | Non            | Nom de la variété de la pomme de terre         |
| Pomme de terre      | stock                      | Nombre         | 8 chiffres      | Non applicable | Quantité de pommes de terre en stock           |
| Salarié             | matricule                  | Texte          | 10 caractères   | Oui            | Numéro d'immatriculation du salarié, unique    |
| Salarié             | nom                        | Texte          | 50 caractères   | Non            | Nom du salarié                                 |
| Salarié             | prénom                     | Texte          | 50 caractères   | Non            | Prénom du salarié                              |
| Vente               | date                       | Date           | Non applicable  | Non            | Date de la vente                               |
| Vente               | quantité vendue            | Nombre         | 8 chiffres      | Non applicable | Quantité de pommes de terre vendues            |
| Vente               | prix total                 | Nombre         | 8 chiffres      | Non applicable | Prix de vente unitaire                         |
| Vente               | Salarié (individuel)       | Non applicable | Non applicable  | Non            | Salarié en charge de la vente                  |
| Vente               | Pomme de terre (multiples) | Non applicable | Non applicable  | Non applicable | Pommes de terre vendues lors d'une transaction |

Dans cet exemple, on a ajouté la **taille** des données, mais ce n'est pas toujours le cas.  
Lorsque ce n'est pas pertinent, on peut indiquer `Non applicable` _(ou un autre terme équivoque)_ pour la taille attendue.

On a aussi ajouté une colonne pour savoir si la taille est **fixe** ou pas. Dans certains cas, comme pour le matricule, on sait que la taille est fixe.  
Dans les autres cas, soit on autorisera une taille **variable**, soit on considère que la donnée n'est pas concernée par cette question _(comme pour le stock par exemple)_.

## Conclusion

Le dictionnaire fait partie intégrante des bonnes pratiques de modélisation de données, et est essentiel pour la bonne compréhension des données par le client.

Ce document est précieux et nous sera utile pour la suite de la modélisation de la base de données. Sans ce document, il sera difficile de savoir quelles données on doit stocker et comment les stocker.

---

Prochaine étape, on parle du **MCD** _(Modèle Conceptuel de Données)_ !
