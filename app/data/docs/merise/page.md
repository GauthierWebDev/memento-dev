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

1. **Dictionnaire de données** : Il contient toutes les informations sur les données métier qui seront stockées.
2. **MCD** _(Modèle Conceptuel de Données)_ : Il représente les données et les relations entre ces données.
3. **MLD** _(Modèle Logique de Données)_ : Il ajoute des détails techniques au MCD.
4. **MRD** _(Modèle Relationnel de Données)_ : Il est une représentation textuelle du MLD.
5. **MPD** _(Modèle Physique de Données)_ : Il ajoute les types de données et les contraintes spécifiques au SGBD utilisé.

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
