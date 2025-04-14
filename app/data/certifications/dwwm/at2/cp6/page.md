---
title: CP 6 - Développer des composants d'accès aux données SQL et NoSQL
description: Synthèse et explications des attentes relatives à la compétence professionnelle 6 du titre professionnel Développeur Web et Web Mobile (DWWM-01280m04).
tags: [DWWM]
---

## 📚 Références

- REAC _(mise à jour du 02/07/2024)_, pages 25 et 26
- RE _(mise à jour du 02/07/2024)_, page 11

## 📋 En résumé

Gros morceau la création de bases de données, n'est-ce pas ? 😅  
On va pouvoir souffler un coup en parlant maintenant de l'accès à ces bases de données. _(enfin, souffler... pas trop quand même)_

Et tu sais quoi, comme tout ce qu'on a vu jusqu'à maintenant, on va alléger un peu les choses en parlant de merveilleux outils comme les **ORM** et les **ODM** !

{% callout type="question" title="C'est quoi un ORM et ODM ? Quelles sont les différences ?" %}
Les ORM _(Object-Relational Mapping)_ et les ODM _(Object-Document Mapper)_ sont des outils qui permettent de faire le lien entre les bases de données et les langages de programmation.

- Les ORM sont utilisés pour les bases de données relationnelles, comme MySQL, PostgreSQL ou SQLite. Ils permettent de manipuler les données de la base de données sous forme d'objets, ce qui facilite leur utilisation dans le code.
- Les ODM sont utilisés pour les bases de données NoSQL, comme MongoDB. Ils fonctionnent de la même manière que les ORM, mais pour les bases de données NoSQL.

En gros, les ORM et les ODM permettent de simplifier la manipulation des données dans le code, en évitant d'avoir à écrire des requêtes à la main.
{% /callout %}

Alleeeez, on va voir ça de plus près ! 😎

## ⚙️ Utilisation d'un ORM ou d'un ODM

{% callout type="question" title="Je fais mes requêtes SQL à la main, il faut que j'apprenne à utiliser un ORM/ODM ?" %}
**Non** ! _(enfin, pas pour passer la certification en tout cas)_  
D'un certain côté, c'est nettement plus intéressant de savoir réaliser les requêtes par toi-même, sans utiliser d'outils qui génèrent du SQL à ta place.

En entreprise, tu vas certainement utiliser ces fameux outils, mais dès que l'on va chercher à avoir les requêtes les plus optimisées possibles, il va falloir mettre les mains dans le cambouis !
{% /callout %}

Mais alors, pourquoi faire des requêtes à la main quand on peut utiliser un ORM ou un ODM ?  
Eh bien, c'est simple : les ORM et les ODM te permettent de manipuler les données de la base de données sous forme d'objets, ce qui est beaucoup plus pratique et lisible dans le code.

Tu peux créer, lire, mettre à jour et supprimer des données sans avoir à écrire de requêtes SQL ou NoSQL.

Cependant ça vient aussi avec son lot de contraintes et de limitations...

Un ORM ou un ODM ne va pas forcément te permettre de faire tout ce que tu veux et dans certains cas, tu vas devoir écrire des requêtes SQL ou NoSQL à la main.  
D'autre part, ces outils peuvent aussi avoir un impact sur les performances de ton application, surtout si tu fais des requêtes complexes ou si tu manipules de grandes quantités de données.

Imagines un peu si tu réalises une application qui doit gérer des tonnes de données en temps réel, comme une application de spéculation boursière 😅

{% callout type="warning" title="Les ORM et ODM, c'est cool, mais pas magique" %}
Si tu comptes présenter un projet avec un ORM ou un ODM, il va falloir que tu sois capable de justifier tes choix techniques et de montrer que tu sais ce que tu fais... et ce que fait l'outil que tu utilises !

Tu dois être capable de répondre à des questions comme celle-ci :

> Quelle est la requête SQL générée par l'ORM/ODM pour cette opération ?

Ton jury ne cherchera pas à te piéger, mais il attend de toi que tu sois capable de comprendre ce que tu fais et pourquoi tu le fais.
{% /callout %}

## 🔎 Intégrité des données

L'intégrité des données, c'est le fait de garantir que les données stockées dans la base de données sont correctes et cohérentes, de la création jusqu'à la suppression.
Si dans un champ de ta base de données tu attends un nombre entier, tu ne vas pas accepter une chaîne de caractères, n'est-ce pas ?

Et pour garantir cette intégrité, on va mettre en place des vérifications **avant** d'insérer ou de mettre à jour des données dans la base de données.

Rien de plus simple bien entendu !

Tu t'attends à avoir une adresse email dans un champ ?  
Alors tu vas vérifier que l'adresse email est bien une adresse email, et non pas une chaîne de caractères lambda.

## 🔐 Confidentialité des données

La plupart du temps, nos bases de données vont accueillir des données confidentielles, comme :

- Des mots de passe
- Des informations personnelles _(nom, prénom, adresse, etc.)_
- Des données sensibles _(informations bancaires, médicales, etc.)_

Bien que notre bases de données se doit d'être sécurisée dans son accès et ses permissions, dans le cas d'une fuite il est important de sécuriser ces données.

Pour les mots de passe, on va les hacher avant de les stocker dans la base de données.

{% callout type="question" title="C'est quoi le hachage ?" %}
Le hachage est une manière de sécuriser un contenu textuel en le transformant en une chaîne de caractères "aléatoire", appelée **hash**.

Il est important de noter que le hachage est **unidirectionnel**, c'est-à-dire qu'il est impossible de retrouver la valeur d'origine à partir de son hash contrairement au **chiffrement**.
{% /callout %}

{% callout type="question" title="Et le chiffrement, ça sert à quoi ?" %}
Comme le hachage, le chiffrement permet de sécuriser des données. Cependant : le chiffrement est **bidirectionnel**.  
 C'est à dire que l'on peut retrouver les données d'origine à partir des données chiffrées.

Si tu as déjà eu l'occasion d'envoyer des "messages codés", c'est que tu as déjà utilisé le chiffrement sans pour autant le savoir !
L'un des chiffrements les plus connus est le **chiffre de César**, qui consiste à décaler les lettres de l'alphabet d'un certain nombre de positions.

Par exemple :

> Message : "Bonjour"
> Décalage : 3
>
> Message chiffré : "Erqmruxu"

{% callout type="warning" title="Attention !" %}
Le chiffrement n'est pas une solution de sécurité absolue, il est possible de retrouver les données d'origine à partir des données chiffrées.  
D'ailleurs le chiffre de César est un chiffrement très simple à casser, on ne va donc pas l'utiliser pour protéger les données sensibles !
{% /callout %}

On va privilégier un algorithme de chiffrement qui se base sur une **clé secrète**, qui sera la clé pour chiffrer et déchiffrer les données.  
C'est d'ailleurs plus ou moins ce qui est fait avec la célèbre [machine Enigma](<https://fr.wikipedia.org/wiki/Enigma_(machine)>) utilisée par les allemands pendant la Seconde Guerre Mondiale pour chiffrer leurs messages et éviter qu'ils soient interceptés et compris par les alliés.

{% /callout %}

Mais alors, comment on peut s'y prendre ?

🥁🥁🥁

Avec des bibliothèques, tout simplement ! 🙃  
_(Ou si tu es un peu fou, tu peux essayer de le faire toi-même, mais attention à ce que ce soit **réellement sécurisé** sinon tu en deviens le seul et unique **responsable**)_

Tu as notamment des bibliothèques _(Node.js)_ qui sont très utilisées :

- Hachage : `bcrypt` _(ou encore `argon2`)_
- Chiffrement : `crypto` _(module natif de Node.js en plus, si ça c'est pas la classe 😎)_

Je te laisse te plonger dans les documentations associées, que tu retrouveras _(presque)_ tout en bas de cette fiche.

Et naturellement : **PERSONNE** ne doit avoir accès à ces données, à part les personnes autorisées/concernées bien entendu.

## 🎯 Critères d'évaluation

- Les traitements relatifs aux manipulations des données répondent aux fonctionnalités décrites dans le dossier de conception
- L'intégrité et la confidentialité des données sont maintenues
- Les cas d'exception sont pris en compte
- Toutes les entrées sont contrôlées et validées dans les composants serveurs sécurisés
- Les tests unitaires et de sécurité sont associés à chaque composant
- La démarche structurée de résolution de problème est adaptée en cas de dysfonctionnement
- Le système de veille permet de suivre les évolutions technologiques et les problématiques de sécurité liées aux bases de données SQL et NoSQL

## 🤯 Aller plus loin

T'es encore là ? Tu aimes ça les ~patates~ bases de données, hein ? 😏  
Alors dans ce cas, je te recommande chaudement de te pencher sur PostgreSQL qui est, à mon sens, l'une des seules **vraies** bases de données relationnelles.

Je ne m'étalerai pas sur ce sujet, mais désolé MySQL/MariaDB de ne pas être au niveau... 😅

Les ressources que je m'apprête à te recommander sont un peu plus avancées, mais ce sont d'excellentes portes d'entrées vers des métiers comme DBA par exemple.
Tu retrouveras des notions très bien expliquées et pertinentes pour t'améliorer sur le sujet dans les ressources de [Dalibo](https://www.dalibo.com/formations).

{% callout type="note" title="Gratuité des formations Dalibo" %}
Dalibo propose des formations, mais qui ne sont pas gratuites pour autant.  
Seuls les supports de cours sont disponibles gratuitement, aux formats EPUB et PDF.

Tu peux retrouver ces supports sur la page [Formations](https://www.dalibo.com/formations) du site de Dalibo.
{% /callout %}

## 🧠 Documentations

- [SQL.sh - Cours et tutoriels SQL](https://sql.sh/)
- [Dalibo - Formations](https://www.dalibo.com/formations)
- [Wikipédia - Chiffrement de César](https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage)
- [bcrypt - Documentation](https://www.npmjs.com/package/bcrypt)
- [argon2 - Documentation](https://www.npmjs.com/package/argon2)
- [crypto - Documentation](https://nodejs.org/api/crypto.html)
