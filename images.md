# Quand une image vaut mille mots...

On distingue deux types d'images&nbsp;: 

- les images porteuses d'informations (qui ont besoin d'un texte de remplacement)&nbsp;;
- les images de décoration (qui ne doivent pas avoir de texte de remplacement).

## L'enjeu pour l'utilisateur handicapé

Les images véhiculent parfois une information non textuelle. Cette information, qui peut aider à comprendre le contenu auquel elle se rapporte, doit pouvoir être accessible à tous.

Fournir une alternative est indispensable pour les utilisateurs qui ne perçoivent pas, ou perçoivent mal, le contenu visuel. C'est le cas des personnes aveugles ou malvoyantes. Un [lecteur d'écran](glossaire.md#lecteur-decran) va pouvoir accéder à cette alternative et le restituer à l'utilisateur.

De même, pour les personnes qui présentent des difficultés de compréhension face à certaines représentations visuelles, (iconographie, peintures, représentations multi-dimensionnelles, graphiques ...), une alternative peut aider à en comprendre le sens ou à en extraire l'information importante.

Pour toutes ces raisons, il est essentiel de traduire de manière textuelle l'information nécessaire et suffisante qu'apportent les images.

Lorsque ces images constituent des liens, ce n'est alors plus l'information qu'elles véhiculent qui est essentielle, mais la fonction du lien qu'elles constituent. Dans cette situation, elles permettent aux logiciels pilotés à la voix par une personne en situation de handicap moteur, de localiser plus facilement le lien à activer.

## En pratique et en images

Lorsque l'information à traduire est courte, vous allez utiliser le texte de remplacement.

Dans votre éditeur de texte, vous devez éditer les propriétés de l'image pour accéder à ce texte de remplacement. Généralement, l'ajout d'une image ou l'édition de ses propriétés sont accessibles par un bouton représentant une petite image&nbsp;: <img src="img/images/icone-image.png" alt="" />

Ci-dessous, un exemple de fenêtre des propriétés de l'image, dans l'éditeur CKEditor, avec un texte de remplacement.

<img src="img/images/ckeditor.png" alt="Renseignez un texte de remplacement dans CKEditor" />

Ci-dessous, un exemple de fenêtre des propriétés de l'image dans l'éditeur de texte de <span lang="en">Wordpress</span>, avec un texte de remplacement.

<img src="img/images/wordpress.png" alt="Renseignez un texte de remplacement dans Wordpress" />

Selon l'éditeur de texte que vous avez à votre disposition, le champ correspondant au texte de remplacement d'une image peut-être désigné par&nbsp;:

- <i lang="en">Alt Text</i>&nbsp;;
- <i lang="en">Alternative Text</i>&nbsp;;
- Texte alternatif&nbsp;;
- Texte de remplacement.

Le texte de remplacement (ou alternative textuelle) d'une image est un texte présent avec l'image dans le code de la page, vous ne le voyez pas lorsque vous consultez le site. Cette information est accessible à un [lecteur d'écran](glossaire.md#lecteur-decran), et certaines autres personnes peuvent demander son affichage à la place de l'image.

Vous pouvez rencontrer différents cas de représentation.

### Des images qui contiennent du texte en image. 

Dans ces cas, le texte de remplacement est généralement le texte présent sur l'image. Par contre, si ce texte se retrouve dans le contenu qu'elle accompagne, alors cette image est une image de décoration et ne doit pas avoir d'alternative. Par exemple, vous écrivez un article sur une manifestation à venir en indiquant la date et le lieu, et l'image représente l'affiche de la manifestation sur laquelle on peut lire le lieu et la date. Dans ce cas cette image n'apporte pas d'information supplémentaire. Lui mettre un texte de remplacement serait redondant.

<img src="img/images/image-redondant.png" alt="" />

Dans l'exemple ci-dessus, l'image contient les informations suivantes&nbsp;:

- Le nom de la manifestation «&nbsp;Semaine de l'innovation publique&nbsp;», qui est également le titre du contenu associé&nbsp;;
- La date, du 12 au 18 octobre 2015, que l'on retrouve en texte dans l'introduction du contenu associé&nbsp;;
- Un texte «&nbsp;La France fait bouger ses services publics&nbsp;» et «&nbsp;participez&nbsp;». Ces deux informations bien que ne se retrouvant pas «&nbsp;textuellement" dans le texte associé, sont des idées reprises et développées dans le contenu.

### Des images qui représentent une scène ou une action, un graphique, une carte ou un schéma. 

Dans ces cas, si l'information est essentielle à la compréhension, vous devez la décrire dans le texte de remplacement. Il est important de retenir qu'il ne faut pas décrire nécessairement en détails les images. Vous devez fournir l'information <strong>suffisante et nécessaire</strong>.

### Infobulle des images

Dans certains éditeurs, vous avez également la possibilité de définir une <strong>infobulle</strong> sur les images. Une infobulle est une information qui apparaît au survol de l'image. Elle est désignée par les termes infobulles, titre ou encore <i lang="en">title</i> selon l'éditeur de texte. Cette infobulle ne doit jamais se substituer au texte de remplacement. Vous pouvez le renseigner, à la seule condition que le texte que vous y inscrivez soit <strong>identique</strong> au texte de remplacement. Cette infobulle peut-être utile dans le cas d'une image qui est de mauvaise qualité par exemple, qui contient du texte et pourrait poser problème à des personnes ayant des déficiences visuelles.


<p>Ci-dessous, un exemple de fenêtre des propriétés de l'image dans l'éditeur de texte de <span lang="en">Wordpress</span>, avec un texte de remplacement et une infobulle renseignés.</p>

<img src="img/images/title-wordpress.png" alt="" />

### Cas des images complexes&nbsp;: la description détaillée

Le texte de remplacement n'est à utiliser que dans le cas d'images qu'il est simple de décrire en une phrase. Dans le cas d'une image complexe, qui demande la rédaction d'un paragraphe entier (par exemple un plan de quartier, un graphique, un histogramme), vous devez fournir une description détaillée.

Lorsqu'une image demande une description détaillée, vous allez rédiger, sous cette image, un paragraphe. C'est le cas des images complexes comme un graphique de données ou une infographie.

Pour permettre à un utilisateur de [lecteur d'écran](glossaire.md#lecteur-decran) de faire le lien entre votre image et sa description détaillée, vous allez procéder de la manière suivante&nbsp;: 

- Dans le champ qui permet de définir un texte de remplacement, vous titrez votre image sans la décrire, en indiquant qu'il existe une description. Par exemple&nbsp;: plan d'accès (voir description ci-après)&nbsp;; 
- Au début de votre description détaillée, vous allez reprendre ce titre. Par exemple&nbsp;: <i>«&nbsp;Plan d'accès (description détaillée)&nbsp;: Pour accéder à…&nbsp;»</i>.

Il est important de noter, que <strong>votre description détaillée doit être correctement structurée</strong>. Par exemple, dans le cas d'un graphique complexe, une description détaillée pourrait reprendre l'information sous la forme d'un tableau ou d'une liste. Une description détaillée n'est pas nécessairement un paragraphe simplement, c'est à vous de juger de la meilleure structuration possible pour restituer l'information. Consultez les fiches concernées pour en savoir plus.

#### Exemple d'une image complexe avec une description détaillée

Ci-dessous l'exemple d'une image complexe. Il s'agit d'un plan de localisation. Un texte de remplacement n'est pas suffisant pour retranscrire toute l'information présente sur ce plan.

<img src="img/images/image-complexe.png" alt="Plan d'accès au Musée d'histoire naturelle" />

##### Description détaillée du plan d'accès au musée d'histoire naturelle

L'entrée du musée d'histoire naturelle est accessible depuis la rue Voltaire.

Depuis la rue Athénas, descendre vers la rue Voltaire et prendre sur la gauche, l'entrée du musée est située sur votre gauche.

Depuis la rue Lesage, descendre vers la rue Voltaire et prendre sur la droite, l'entrée du musée est située sur votre droite.

Depuis la Rue Marivaux, redescendre vers la rue Lesage, continuer tout droit pour atteindre la rue Voltaire, l'entrée du musée est située sur votre droite.


## Mémo pour agir

- Si je supprime cette image, puis-je comprendre le texte qui est autour sans perdre d'information&nbsp;?
- Le texte de remplacement de cette image est-il suffisant et apporte-t-il la même information que l'image&nbsp;?

## Idées reçues

### Halte aux abus pour référencement

C'est un frein à l'accessibilité que d'utiliser la fonction permettant de renseigner un texte de remplacement à l'image, on une infobulle, pour y insérer des mots clés ou phrases pour améliorer un référencement. 

En effet, un utilisateur de [lecteur d'écran](glossaire.md#lecteur-decran) se verra restituer toutes ces informations. L'expérience de lecture sera alors surchargée d'éléments parasites et rendra incompréhensible le contenu du site.

### Une image peut avoir une alternative vide

Toutes les images n'ont pas besoin d'un texte de remplacement. Si l'image est une décoration (elle n'apporte aucune information essentielle au contenu), elle ne doit pas avoir de texte de remplacement. Pour la même raison qu'évoquée au-dessus, cela alourdit la restitution du contenu pour un utilisateur de [lecteur d'écran](glossaire.md#lecteur-decran), pour un gain en information nul.

### L'alternative de l'image ne doit pas être utilisée pour mentionner les crédits (auteur, date etc...) de l'image

Si vous créditez une image, vous ne devez pas utiliser le texte de remplacement de l'image. Tout d'abord, cela signifie que tout le monde n'a pas accès à cette information. Ensuite, le texte de remplacement sert à décrire l'image, et non pas à l'attribuer. Dans le cas précis des crédits, la méthode décrite dans la description détaillée est tout à fait appropriée.


## Voir aussi...

- Quand une image est aussi un lien, la fonction de lien l'emporte sur la nature de l'image. Voir la [fiche 6&nbsp;: Créer du lien sans perdre son chemin](liens.md)&nbsp;;
- Attention aux contrastes et à l'information véhiculée par la couleur. Voir la [fiche 2&nbsp;: Les couleurs](#couleurs.md).

## Voir ailleurs

- [Bonnes pratiques pour l'accessibilité des images (Sur le site de l'Unité ingénierie des contenus et savoirs)](http://ics.utc.fr/capa/DOCS/SP4/Tuto/02/co/02-CAPA_BonnesPratiques_3.html)
- [Exemples et contre exemples d'accessibilité des images (Sur le site de l'Unité ingénierie des contenus et savoirs)](http://ics.utc.fr/capa/DOCS/SP4/Tuto/01/co/01-CAPA_Sensibilisation_3.html)

## Correspondances RGAA 3.0

- Critère 1.2 [A]
- Critère 1.3 [A]
- Critère 1.6 [A]
- Critère 1.7 [A]
- Critère 1.10 [A]

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
