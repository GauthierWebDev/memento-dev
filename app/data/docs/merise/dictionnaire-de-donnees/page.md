---
title: Introduction à Merise
description: Parlons un peu de Merise, la fameuse méthodologie de modélisation pour la conception de bases de données.
tags: [Backend, Merise, BDD, MCD, MLD, MPD, SQL]
---

Le **dictionnaire de données** est un document qui contient toutes les informations sur les données qui vont être stockées dans la future base de données.

Ici, on ne va pas parler de tables, de colonnes ou de relations, mais uniquement de **données**. Ces informations nous sont données par le client, et il est important que le dictionnaire reste compréhensible par le client.

En gros : Le dictionnaire de données se veut **non technique** et **compréhensible par le client**.

Pour cet article et les suivants, on va se reposer sur une mise en situation fictive pour un contexte d'organisation d'un groupe de musique. _(Rassure-toi, pas besoin d'être musicien pour comprendre !)_

## Brief avec le client

Le client est un petit groupe local qui doit faciliter l'organisation interne pour la gestion de ses différentes activités (répétitions, concerts, etc.).  
Il souhaite donc créer une application pour gérer les informations suivantes :

- **Membre** : Nom, prénom, instruments, date de naissance, adresse e-mail
- **Album** : Titre, date de sortie
- **Musique** : Titre, durée
- **Concert** : Date, lieu, heure, tarif
- **Répétition** : Date, heure, lieu

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

Cependant, on n'ira pas plus loin sur ce terrain pour maintenir une compréhension simple par le client !  
Que je ne te surprenne pas à lui dire "Alors là j'ai mis des ID en AUTO_INCREMENT, des clés primaires et étrangères, et j'ai mis des contraintes d'unicité sur les colonnes !".

Tu risques de retrouver ton client en train de convulser sur le sol : **pas glop**.

## Notre dictionnaire de données

Voici donc le dictionnaire de données que l'on va créer pour notre application :

| Nom de la donnée | Format | Longueur | Contraintes | Document |
| ---------------- | ------ | -------- | ----------- | -------- |
