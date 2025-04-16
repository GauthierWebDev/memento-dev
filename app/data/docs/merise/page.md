---
title: Introduction à Merise
description: Parlons un peu de Merise, la fameuse méthodologie de modélisation pour la conception de bases de données.
tags: [Backend, Merise, BDD, MCD, MLD, MPD, SQL]
---

**Merise**, c'est quoi ?

Il s'agit d'une **méthodologie** de **modélisation** française _(🐔)_, conçue pour la conception de **bases de données**.  
Bien qu'elle ait été créée dans les années 70/80, elle est toujours d'actualité et largement utilisée dans le domaine de l'informatique.

{% callout type="note" title="C'est dans les vieux pots qu'on fait la meilleure soupe" %}

Ce n'est pas parce qu'une méthodologie est ancienne qu'elle est obsolète.  
Au contraire, elle a fait ses preuves et est toujours pertinente aujourd'hui bien que surtout utilisée en France.

Rien ne t'oblige à l'utiliser, mais il est bon de la connaître, surtout si tu préfères éviter de foncer dans le mur lors de la conception de ta base de données.

{% /callout %}

On parlera ici que de la partie **modélisation** de Merise, même si Merise comprend aussi des aspects d'**analyse** et de **gestion de projet**.

## Les différentes schémas de Merise

Merise se compose de plusieurs schémas qui permettent de représenter les données et leurs relations.

1. **Dictionnaire de données**
2. **MCD** _(Modèle Conceptuel de Données)_
3. **MLD** _(Modèle Logique de Données)_
4. **MRD** _(Modèle Relationnel de Données)_
5. **MPD** _(Modèle Physique de Données)_

Voyons un peu plus en détail chacun de ces schémas, et comment ils s'articulent entre eux.  
Des fiches détaillées seront individuellement rédigées pour chaque schéma, mais ici on va juste faire un petit tour d'horizon pour resituer le contexte.

### Dictionnaire de données

Le **dictionnaire de données** est un tableau qui va nous permettre de lister toutes les données que l'on doit stocker dans notre base de données.  
Ces données proviendront de l'analyse des besoins du client, avec qui on aura discuté de ce qu'il souhaite faire avec son application.

Ce document doit être le plus simple possible et ne pas contenir de détails techniques.  
Il doit être compréhensible par le client, qui pourra ainsi valider les données que l'on va stocker dans la base de données.

### MCD

Le **MCD** _(Modèle Conceptuel de Données)_ est un schéma qui va nous permettre de représenter les données que l'on a récupérées dans le dictionnaire de données.  
Il va nous permettre de représenter les différentes données que l'on a, regroupée dans un rectangle nommé **entité**, ainsi que les relations entre elles.

Ce document, tout comme le dictionnaire de données, doit rester compréhensible par le client en évitant les détails techniques.

### MLD

Le **MLD** _(Modèle Logique de Données)_ est un schéma qui se base directement sur le MCD.  
Il vient ajouter des détails techniques sur les entités et les relations, comme par exemple :

- Les tables et leurs colonnes _(sans les types de données)_
- Les clés primaires et étrangères
- Les tables de jointure _(tables pivot, de liaison, etc.)_

### MRD

Le **MRD** _(Modèle Relationnel de Données)_ est un schéma qui est une version textuelle du MLD.  
Il s'agit d'une "fausse" étape, car le MRD n'est pas un schéma à proprement parler.

La plupart du temps, on parle de MLD textuel puisqu'il s'agit de la même chose.

### MPD

Pour terminer : le **MPD** _(Modèle Physique de Données)_ !

Le MPD est un schéma qui va nous permettre de représenter les données de manière physique, c'est-à-dire en tenant compte des spécificités du SGBD _(Système de Gestion de Base de Données)_ que l'on va utiliser.  
Il va nous permettre de représenter les tables, les colonnes, les types de données, les index, les contraintes d'intégrité, etc.

Le MPD est donc un schéma qui est spécifique à un SGBD, et qui ne peut pas être utilisé tel quel sur un autre SGBD.

## Outils pour Merise

Il existe de nombreux outils pour réaliser des MCD, MLD et MPD.

Déjà, tu peux **bannir** tous les outils qui ne sont pas conçus pour Merise.  
Merise étant français, la plupart des outils internationaux ne sont pas adaptés.

### Outils non recommandés

- **Draw.io** : Bien qu'il soit un bon outil, il n'est pas conçu pour Merise et ne respecte pas les normes de la méthodologie.
- **Lucidchart** : Même chose que Draw.io, il n'est pas conçu pour Merise.
- **DBDesigner** : Excellent outil, mais qui ne permet pas la réalisation d'un MCD ou d'un MLD correct. On pourra par contre l'utiliser pour le MPD !

### Outils recommandés

- **[Looping](https://looping-mcd.fr/)** : Il s'agit de l'outil par **excellence** pour la conception de bases de données tout en respectant la méthodologie Merise. Cerise sur le gâteau, il est **gratuit** !
- **[Mocodo](https://mocodo.net/)** : Un autre outil qui permet de réaliser des MCD et MLD. Il est extrêmement puissant et fonctionne sur le navigateur. Cependant, il manque de rigueur là où Looping excelle.

Pour toutes les rubriques suivantes, **Looping** sera utilisé comme outil.

## Ressources

{% callout type="warning" title="Ressources disponibles sur internet" %}

**Attention !**

Beaucoup de ressources sur internet parlent de Merise, mais elles ne sont pas forcément justes.

Peu importe l'origine de la ressource, il est important de vérifier les informations et de ne pas se fier aveuglément à ce qui est écrit.  
Je recommande énormément le livre [Guide pratique (4e édition)](https://www.editions-eni.fr/livre/merise-guide-pratique-4e-edition-modelisation-des-donnees-et-des-traitements-manipulations-avec-le-langage-sql-conception-d-une-application-mobile-android-ou-ios-9782409046667) de **Jean-Luc Baptiste**, aux **Éditions ENI**.

{% /callout %}

- [Looping](https://looping-mcd.fr/)
- [Mocodo](https://mocodo.net/)
- [La vérité sur les id - Jean Prulière](https://jeanpruliere.medium.com/la-v%C3%A9rit%C3%A9-sur-les-id-507134adda12))
- [Merise - Wikipedia](<https://fr.wikipedia.org/wiki/Merise_(informatique)>)

Prochaine étape, on parle du **dictionnaire de données** !
