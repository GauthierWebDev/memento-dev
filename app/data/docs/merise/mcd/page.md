---
title: Modèle Conceptuel de Données (MCD) Merise
description: Comprenez le MCD dans Merise, une étape clé pour représenter les données de manière abstraite et cohérente.
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

| Terme                                                   | Définition                                                                            |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Entité**                                              | Représentation d'un regroupement de données _(rectangle)_                             |
| **Attribut**                                            | Donnée précise d'une entité                                                           |
| **Relation**                                            | Lien entre deux entités _(bulle ovale/arrondie)_, accompagné d'un verbe à l'infinitif |
| **Cardinalité**                                         | Nombre d'occurrences _(minimum et maximum)_ d'une entité par rapport à une autre      |
| **Discriminant** _(ou **déterminant**/**identifiant**)_ | Attribut qui permet d'identifier une entité de manière unique _(ex: matricule)_       |

C'est tout un lexique à apprendre, mais pas de panique tu vas vite t'y habituer !

## Exemple de MCD

Forcément, les définitions sans donner un exemple ça n'aide pas beaucoup à comprendre...  
Voici un petit exemple tout simple de MCD pour illustrer tout ça :

![Exemple de MCD](/merise/mcd-basic.webp)

On a ici un MCD qui représente trois **entités** :

- **Entité 1**
- **Entité 2**
- **Entité 3**

Chacune de ces entités a plusieurs **attributs** qui lui sont propres :

- **Entité 1** : code identité 1, attribut 2, attribut 3
- **Entité 2** : code identité 2, attribut 2, attribut 3
- **Entité 3** : code identité 3, attribut 2, attribut 3

{% callout type="question" title="Pourquoi le premier attribut est en gras et souligné ?" %}
Dans le MCD, un attribut en gras est un attribut **unique**.  
S'il est souligné en plus d'être en gras, c'est qu'il s'agit d'un **discriminant** _(ou déterminant/identifiant)_.

Il permet d'identifier de manière unique une entité.  
Comme le MCD n'est **pas technique**, on n'utilisera pas le terme de **clé primaire** ou **ID**.
{% /callout %}

Et pour terminer, on remarque aussi que certaines de nos entités sont reliées entre elles par des **relations**.  
Les relations se caractèrisent par :

- Une bulle ovale ou arrondie contenant un verbe à l'infinitif _(par exemple : "posséder")_
- Des **cardinalités** qui vont indiquer le nombre d'occurrences d'une entité par rapport à une autre.

Ici, on a :

- **Entité 1** 0,N - Contenir - 0,N **Entité 2**
- **Entité 1** 1,1 - Posséder - 0,N **Entité 3**

Mais qu'est-ce que ça veut dire tout ça ?

## Les cardinalités

Les cardinalités sont un élément essentiel du MCD.
Elles vont nous permettre de définir le nombre d'occurrences d'une entité par rapport à une autre.

Une cardinalité est définie par deux valeurs :

1. Le **minimum** d'occurrences
2. Le **maximum** d'occurrences

On va donc avoir des cardinalités de la forme : **X,Y**.

Toujours dans l'exemple précédent, on comprend donc que :

- **Entité 1** peut contenir entre 0 et N **Entité 2**
- **Entité 2** peut être contenue entre 0 et N **Entité 1**
- **Entité 1** doit posséder 1 et 1 seule **Entité 3**
- **Entité 3** peut être possédée entre 0 et N **Entité 1**

{% callout type="note" title="Les différentes valeurs" %}
La plupart du temps, nous allons retrouver les valeurs suivantes :

- **0**
- **1**
- **N**

**N** signifie "N'importe quel nombre" _(0, 1, 2, 3, ...)_.  
Mais dès que l'on connait le nombre exact, on peut le mettre à la place de **N**.

Par exemple : **1,5** signifie "1 à 5" et **0,3** signifie "0 à 3".

Si la valeur n'est pas connue à l'avance ou qu'aucune limite n'est nécessaire, on utilisera alors **N**.
{% /callout %}

## Retour sur notre dictionnaire de données

Maintenant que l'on sait comment fonctionne un MCD, on va pouvoir retourner sur notre dictionnaire de données pour le formaliser en MCD.

Pour rappel, voici notre dictionnaire de données :

| Nom de la donnée            | Format         | Longueur | Contraintes         | Document   |
| --------------------------- | -------------- | -------- | ------------------- | ---------- |
| Nom                         | Alphabétique   | 30       | Obligatoire         | Musicien   |
| Prénom                      | Alphabétique   | 30       | Obligatoire         | Musicien   |
| Instruments                 | Alphabétique   | 30       | Obligatoire         | Musicien   |
| Adresse e-mail              | Alphanumérique | 50       | Obligatoire, unique | Musicien   |
| Mot de passe                | Alphanumérique | > 12     | Obligatoire         | Musicien   |
| Date et heure de concert    | Date           | -        | Obligatoire         | Concert    |
| Lieu de concert             | Alphabétique   | 50       | Obligatoire         | Concert    |
| Tarif                       | Numérique      | -        | -                   | Concert    |
| Date et heure de répétition | Date           | -        | Obligatoire         | Répétition |
| Lieu de répétition          | Alphabétique   | 50       | Obligatoire         | Répétition |

### Les entités

On va donc créer trois entités :

- **Musicien**
- **Concert**
- **Répétition**

Ces entités vont contenir les attributs que l'on a récupérés dans le dictionnaire de données.

On se retrouve pour le moment avec un MCD qui ressemble à ça :
![MCD avec uniquement les entités](/merise/mcd-1.webp)

On est déjà pas trop mal, il nous reste plus qu'à ajouter les relations entre les entités et les cardinalités !

### Les relations

On va donc ajouter les relations entre les entités.

Sachant qu'un musicien peut participer à plusieurs concerts, et qu'un concert peut avoir plusieurs musiciens, on va créer une relation entre les deux entités.
On va donc créer une relation **"Participer"** entre les entités **Musicien** et **Concert**.

On en fera une relation **0,N** - **1,N**.

Pour la répétition, on va faire la même chose !
On va créer une relation **"Répéter"** entre les entités **Musicien** et **Répétition**.

À la fin, on se retrouve avec un MCD qui ressemble à ça :
![MCD avec les relations](/merise/mcd-2.webp)

Et c'est tout ! Notre MCD est terminé... enfin presque !

### Aller plus loin

Si on souhaite aller plus loin, on peut ajouter de l'héritage.

{% callout type="note" title="Rapide point sur l'héritage" %}
L'héritage _(ou aussi appelé **spécialisation** ou **généralisation**)_ est un concept qui va nous permettre de factoriser les propriétés identiques dans une entité commune. Cette entitée est appelée **entité générique** _(ou **sur-type**)_.

Les entités qui héritent de l'entité générique sont appelées **entités spécialisées** _(ou **sous-types**)_.
{% /callout %}

En regardant bien notre MCD, on se rend compte que les entités **Concert** et **Répétition** ont des attributs communs :

- Date et heure
- Lieu

La seule différence est que le concert a un tarif, contrairement à la répétition.  
On va donc pouvoir créer une entité **générique** que l'on appelera **Événement**.

Cette entité générique va contenir les attributs communs aux deux entités, et on va faire hériter les entités **Concert** et **Répétition** de cette entité.  
On se retrouve donc avec ces trois entités _(**Événement**, **Concert** et **Répétition**)_ :
![MCD avec héritage](/merise/mcd-3.webp)

{% callout type="question" title="Pourquoi ne pas stocker le type d'événement ?" %}
Effectivement, on aurait pu stocker le type d'événement dans l'entité **Événement** !  
Il s'agit d'une autre approche qui est tout à fait valable.

Cependant, il est plus simple de créer une entité générique qui va nous permettre de factoriser les attributs communs et éviter de devoir rendre plusieurs attributs nullables en fonction du type d'événement.

On renforce ainsi l'intégrité de la base de données.
{% /callout %}

Le MCD final ressemble donc à ça :
![MCD final](/merise/mcd-4.webp)

Si tu souhaites télécharger le MCD que l'on vient de créer, tu peux le faire ici : [MCD Merise pour Looping](/downloads/merise/band-manager.loo).

## Conclusion

En conclusion, le MCD dans Merise est un outil indispensable pour structurer et visualiser les données de manière claire et cohérente.

Grâce à des entités, des attributs, des relations et des cardinalités, le MCD permet de représenter les informations de façon abstraite, tout en restant compréhensible pour le client.

Prochaine étape : le **MLD** _(Modèle Logique de Données)_ et le **MRD** _(Modèle Relationnel de Données)_ !
