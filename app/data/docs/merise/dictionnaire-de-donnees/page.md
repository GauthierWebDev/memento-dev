---
title: Dictionnaire de Données Merise
description: Explorez le dictionnaire de données dans Merise, essentiel pour structurer et documenter les informations de votre système.
tags: [Backend, Merise, BDD, MCD, MLD, MPD, SQL]
---

Le **dictionnaire de données** est un document qui contient toutes les informations sur les données qui vont être stockées dans la future base de données.

Ici, on ne va pas parler de tables, de colonnes ou de relations, mais uniquement de **données**. Ces informations nous sont données par le client, et il est important que le dictionnaire reste compréhensible par le client.

En gros : Le dictionnaire de données se veut **non technique** et **compréhensible par le client**.

Pour cet article et les suivants, on va se reposer sur une mise en situation fictive pour un contexte d'organisation d'un groupe de musique. _(Rassure-toi, pas besoin d'être musicien pour comprendre !)_

## Brief avec le client

Le client est un petit groupe local qui doit faciliter l'organisation interne pour la gestion de ses différentes activités (répétitions, concerts, etc.).  
Il souhaite donc créer une application pour gérer les informations suivantes :

- **Membre** : Nom, prénom, instruments, adresse e-mail, mot de passe
- **Concert** : Date et heure, lieu, tarif
- **Répétition** : Date et heure, lieu

Pour le moment, on ne va pas se soucier de la technique, mais juste de lister les données que l'on doit stocker dans la base de données.
On va donc créer un tableau qui va nous permettre de lister toutes les données que l'on doit stocker dans notre base de données.

## Informations du dictionnaire de données

Avant de créer notre dictionnaire de données, regardons un peu ce qu'on peut y mettre :

- **Nom** : Nom de la donnée que l'on va stocker dans la base de données
- **Format** : Format de la donnée que l'on va stocker dans la base de données _(on y revient juste après !)_
- **Longueur** : Longueur de la donnée que l'on va stocker dans la base de données
- **Contraintes** : Contraintes sur la donnée que l'on va stocker dans la base de données
- **Document** : Document qui contient la donnée que l'on va stocker dans la base de données, un "groupe de données"

### Les différents formats

Rappelons-nous que le dictionnaire de données doit rester compréhensible par le client. Du moins, dans un premier temps.  
Rien ne nous empêche de le rendre technique par la suite, cependant comme nous sommes en phase de conception : on doit rester simple.

Voici les différents formats que l'on peut utiliser dans le dictionnaire de données :

- **Alphabétique** _(Chaîne de caractères, uniquement A-Z)_
- **Alphanumérique** _(Chaîne de caractères, A-Z et 0-9)_
- **Numérique** _(Entier/flottant etc)_
- **Date**
- **Logique** _(Vrai/Faux)_

Et c'est tout ! On ne parle surtout pas de types de données techniques comme `VARCHAR`, `INT`, `FLOAT`, etc.  
Le client n'a pas besoin de savoir ce que c'est, et on ne va pas lui en parler _(et s'il est vraiment curieux, il pourra consulter le futur **MPD**)_.

### Contraintes

Pour les contraintes, on reprendra les informations que l'on a récupérées dans le brief avec le client.  
Si le client nous dit qu'une certaine donnée est obligatoire, on peut l'indiquer dans le dictionnaire de données. De même pour les valeurs par défaut, les valeurs uniques, etc.

Cependant, on n'ira pas plus loin sur ce terrain pour maintenir une compréhension simple par le client ! Que je ne te surprenne pas à lui dire :

> Alors là j'ai mis des ID en AUTO_INCREMENT, des clés primaires et étrangères, et j'ai mis des contraintes d'unicité sur les colonnes !

Tu risques de retrouver ton client en train de convulser sur le sol : **pas glop**.

## Notre dictionnaire de données

Voici donc le dictionnaire de données que l'on va créer pour notre application :

| Nom de la donnée            | Format         | Longueur | Contraintes         | Document   |
| --------------------------- | -------------- | -------- | ------------------- | ---------- |
| Nom                         | Alphabétique   | 30       | Obligatoire         | Membre     |
| Prénom                      | Alphabétique   | 30       | Obligatoire         | Membre     |
| Instruments                 | Alphabétique   | 30       | Obligatoire         | Membre     |
| Adresse e-mail              | Alphanumérique | 50       | Obligatoire, unique | Membre     |
| Mot de passe                | Alphanumérique | > 12     | Obligatoire         | Membre     |
| Date et heure de concert    | Date           | -        | Obligatoire         | Concert    |
| Lieu de concert             | Alphabétique   | 50       | Obligatoire         | Concert    |
| Tarif                       | Numérique      | -        | -                   | Concert    |
| Date et heure de répétition | Date           | -        | Obligatoire         | Répétition |
| Lieu de répétition          | Alphabétique   | 50       | Obligatoire         | Répétition |

Voilà, on a notre dictionnaire de données !

Faisons quand même un petit point sur les données que l'on a récupérées et la façon dont on les a représentées.

{% callout type="note" title="Retour rapide sur le dictionnaire de données" %}

Dans certains cas, on a précisé des longueurs de données. On l'a fait uniquement pour des données textuelles _(Alphabétiques et Alphanumériques)_.

Au niveau des contraintes, on a majoritairement _(sauf pour le tarif d'un concert)_ mis des contraintes d'obligation sur les données.
On a aussi mis une contrainte d'unicité sur l'adresse e-mail, car il ne peut pas y avoir deux membres avec la même adresse e-mail.

Dans certains cas, on a mis des contraintes de longueur sur les données. On a fait ça pour éviter de stocker des données trop longues dans la base de données.  
Bien entendu, une date ne peut pas avoir de longueur, on a donc mis un tiret pour indiquer que ce n'est pas applicable.

Pour le mot de passe, on a mis une contrainte de longueur supérieure à 12 caractères.  
Évidemment on ne viendra pas stocker le mot de passe en clair dans la base de données, on va utiliser la donnée réelle _(non transformée)_ pour éviter de perdre le client entre la longueur réelle du mot de passe et la longueur de son hash.

{% /callout %}

## Conclusion

Voilà, on a créé notre dictionnaire de données pour notre application de gestion de groupe de musique.

Pour le moment ça ne nous permet pas de créer notre base de données, mais au moins on a une bonne idée de ce que l'on doit stocker dans la base de données !

Pour la suite, on va se pencher sur le **MCD** _(Modèle Conceptuel de Données)_ qui va nous permettre de modéliser les données que l'on vient de récupérer et formaliser.
