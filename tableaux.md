# Fiche 5&nbsp;: Des tableaux pour présenter des données, <i lang="en">what else?</i>

De manière générale&nbsp;:

- vous ne devez jamais créer de tableau, sauf pour présenter des données tabulaires&nbsp;;
- si vous avez des données tabulaires à présenter, éviter autant que possible d'utiliser des tableaux, car même quand ils sont techniquement accessibles, ils restent complexes à appréhender.

## L'enjeu pour l'utilisateur handicapé

Un tableau est une structure particulière. Un utilisateur présentant une déficience visuelle (aveugle ou malvoyant) qui utilise un [lecteur d'écran](glossaire.md#lecteur-decran) navigue différemment dans celui-ci que dans les autres contenus textuels. Si ce tableau est complexe (par exemple, certains en-têtes ne s'appliquent pas à toutes les cellules du tableau), il est d'autant plus difficile de naviguer dedans, et d'en comprendre surtout le sens.

Pour accompagner l'utilisateur dans la lecture du tableau, il est important de définir des en-têtes de colonnes ou de lignes. Si elles sont définies, l'utilisateur de [lecteur d'écran](glossaire.md#lecteur-decran), qui n'a pas une vision globale du tableau, accède à ces en-têtes à chaque fois qu'il consulte une cellule du tableau. Cela lui permet de se repérer rapidement et ne pas avoir à reparcourir tout un tableau pour savoir quels en-têtes définissent la donnée en lecture.

Un titre de tableau est également indispensable. Il informe l'utilisateur sur le contenu (type de données, structure du tableau), ce qui lui permet de savoir s'il va ou non le parcourir et de se préparer à la lecture. 

Pour un utilisateur présentant une déficience cognitive, présenter le tableau par un titre offre également des clés de compréhension du contenu.

## En pratique et en images

La plupart des éditeurs de texte fournissent une fonction qui permet d'insérer un tableau, souvent symbolisée par une icône de tableau <img src="img/tableau/icone-tableau.png" alt="" />.

Ci-dessous un exemple de fenêtre des propriétés d'un tableau dans l'éditeur <span lang="en">CKEditor</span>.

<img src="img/tableau/ckeditor.png" alt="" />

L'outil ici propose de définir des en-têtes. Vous pouvez choisir si les en-têtes de votre tableau sont en ligne ou en colonne (ou parfois les deux).

Ensuite, vous devez définir un titre de tableau. Il y a généralement un champ «&nbsp;Titre du tableau&nbsp;» à renseigner. Si votre outil ne vous permet pas de réaliser cette action, à défaut, utiliser un [titre de contenu](titres.md).

Si vous créez un tableau de données simple, le titre du tableau doit permettre de comprendre les données en question. Par exemple&nbsp;: «&nbsp;Chiffres d'affaires des différents secteurs d'activités.&nbsp;»

Ci-dessous un exemple de tableau simple. Il possède un titre «&nbsp;Dates limites de déclaration en ligne en fonction du département&nbsp;» et 2 en-têtes de colonnes («&nbsp;Numéro du département de résidence&nbsp;» et «&nbsp;Date limite de déclaration en ligne&nbsp;»).

<img src="img/tableau/simple.png" alt="" />

### Tableau de données complexe

Si vous créez un tableau complexe, vous devez fournir, en plus d'un titre, un résumé du tableau afin de lui fournir les clés pour naviguer dedans. Ce résumé peut soit être placé dans le titre du tableau directement, soit dans un texte juste avant le tableau.

Le résumé d'un tableau complexe doit expliciter la structure du tableau et les données.

Un tableau de données complexe demande généralement des ajustements dans le code du tableau. Vous n'avez pas la capacité (généralement limité par les fonctions de l'éditeur de texte) de réaliser les ajustements nécessaires. 

Dans la mesure du possible, si votre tableau est complexe, essayez de le simplifier, quitte à réaliser plusieurs tableaux simples. 

Ci-dessous un exemple de tableau complexe (issu et adapté du site de l'INSEE). Vous y trouvez des en-têtes de colonnes fusionnées («&nbsp;Variation (en %) au cours&nbsp;») ainsi que des en-têtes qui titrent des parties du tableau (toutes les lignes fusionnées du type «&nbsp;a&nbsp;») Ensemble des ménages - France&nbsp;»). 

<img src="img/tableau/complexe.jpeg" alt="" />

Dans ce cas de tableau complexe, pour faciliter la lecture, il serait par exemple possible de découper ce tableau en 3 tableaux distincts, chacun correspondant aux 3 sections (a, b et c).

Si ce tableau reste en l'état, un résumé pertinent pourrait être&nbsp;: 

«&nbsp;Répartition des ménages en France en fonction du type d'achats. On y trouve 3 grands regroupements&nbsp;:

- un premier regroupement concerne l'ensemble des ménages en France&nbsp;;
- un second regroupement concerne les ménages urbains dont le chef est ouvrier ou employé&nbsp;;
- un troisième regroupement concerne les ménages du 1<sup>er</sup> quintile de la distribution des niveaux de vie. 

Pour chacun des regroupements&nbsp;:

- la première colonne représente les pondérations pour l'année 2015&nbsp;;
- la seconde colonne représente l'indice pour le mois d'août 2015&nbsp;;
- la troisième colonne représente la variation en pourcent au cours du dernier mois&nbsp;;
- la dernière colonne représente la variation en pourcent au cours des 12 derniers mois.

## Mémo pour agir

* Ai-je vraiment besoin de créer un tableau ?
- Mon tableau a-t-il un titre ?
- Mes données sont-elles compréhensibles ? Les en-têtes sont-ils correctement déclarés ?

## Voir aussi...

Si votre outil ne vous permet de créer des titres de tableaux, créez un titre de contenu. Voir la [fiche 7&nbsp;: Les titres, ou le plan de la page](titres.md)

## Voir ailleurs 

- [Vidéo sur l'accessibilité des tableaux](http://portail.unice.fr/access-key/videos/les-tableaux).

## Correspondances RGAA 3.0

- Critère 5.1 [A]
- Critère 5.2 [A]
- Critère 5.4 [A]
- Critère 5.5 [A]

### Sommaire du guide «&nbsp;Contribuer sur le Web de manière accessible&nbsp;»

* [Introduction](0-intro.md)
* [Fiche 1&nbsp;: Quand une image vaut mille mots](images.md)
* [Fiche 2&nbsp;: Les couleurs](couleurs.md)
* [Fiche 3&nbsp;: Embarquer des contenus d'autres sites sur ses pages](cadres.md)
* [Fiche 4&nbsp;: Du multimédia pour tous et toutes](multimedia.md)
* [Fiche 5&nbsp;: Des tableaux pour présenter des données, <i lang="en">what else?</i>](tableaux.md)
* [Fiche 6&nbsp;: Créer du lien sans perdre son chemin](liens.md)
* [Fiche 7&nbsp;: Les titres, ou le plan de la page](titres.md)
* [Fiche 8&nbsp;: Listes à puces et listes numérotées](listes.md)
* [Fiche 9&nbsp;: Textes multilingues](langue.md)
* [Fiche 10&nbsp;: Citations](citations.md)
* [Fiche 11&nbsp;: Mise en forme des textes](mise-en-forme.md)
* [Fiche 12&nbsp;: Documents en téléchargement](docs_telechargement.md)
* [Fiche 13&nbsp;: Abréviations, mots complexes et glossaire](definition.md)
* [Glossaire](glossaire.md)
