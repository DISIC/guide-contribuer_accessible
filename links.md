# Sheet 6: Creating links without losing one's path

A link (or hyperlink) allows to navigate in the pages of a site or to refer to another site. A link is defined by two important elements:

- its text, visible, and clickable by users;
- its title, the tooltip that appears when the link is hovered with the mouse.

## Issues for users with disabilities

For a visually impaired user (blind or partially sighted) who uses a [screen reader](glossary.md#screen-reader) and who does not have a global view of the page, or who navigates from link to link, it is important to understand the purpose of a link.

For users with cognitive impairments, links that are not explicit enough do not call for action. The user does not know, does not understand to which page she is heading if the link text is not informative enough.

When the links are made up of images only, the replacement text of the image is the link text. In this situation, the alternative text that must be provided is no longer the description of the image but the destination of the link. If the image has no alternative, then the link is an empty link. A user who navigates through a speech input system, for example, can't activate this link, having no way to name it.

## In practice and in pictures

All text editors allow to insert links easily. Generally, the icon associated to the link insertion feature represents links of a chain: <img src="img/liens/icone-liens.png" alt="" />

Below is an example of link insertion in the text editor of WordPress.

<img src="img/liens/wordpress.png" alt="" />

### Relevant text

To define the text of your link, select the text portion that is necessary to make the link explicit enough.

In some cases, the text editor proposes a "Title" field, which will make it possible to define, if necessary, a title (a tooltip). If you decide to create a tooltip, you need to ensure that:

- the link text can't be made explicit by itself;
- the tooltip repeats at least the link text (for example, the tooltip should include at least "spacing between words").

### Opening in new window

In some text editors, you can request that a link opens in a new window when the user clicks on it. If you choose this option, you should always inform the user. The recommended method is to do so by using the link title (tooltip), with this pattern: "Link text - new window".

**Note:** The developers of your website developer may have set up a feature to automatically detect links that open in a new window, adapting the link title accordingly. Check with your IT department about the availability of this feature.

Below is an example of insertion of a link that opens in a new window, in the TinyMCE text editor.

<img src="img/liens/nouvelle-fenetre.png" alt="" />

In TinyMCE, you need to edit the properties of the link:

- In the "Target" field, choose "New Window" if you want the link to open a new window;
- In the "Text to display" field appears the text you selected to insert the link;
- In the "Title" field (tooltip), type or paste the "Text to display" seen at previous step, and add "new window".

### Design of links

In the style guide of the website was defined an appearance for the links (colors, underlining, etc.). You should not change this appearance, even if your text editor allows it, **at the risk of hurting the user experience and causing contrast issues that could affect readability**.

Indeed, the links must be visually distinguished from the rest of the surrounding text, according to certain recommendations. This appearance was defined at the time of site design and the designers applied those recommendations for every links across the website.

## Memo for Action

- If I look at the text of my links, do I understand where I'll go if I click on each of them?
- Avoid as much as possible the generic texts like: click here, here, read more, visit this page, download&hellip;
- Two of my links have identical text. Do they refer to the same page?

## See also&hellip;

- For image-links, provide a replacement text in the image to define the link text. See [sheet 1: When a picture is worth a thousand words](images.md)
- For a more detailed explanation of the color contrasts, we refer you to [sheet 2: Colors](colors.md).

## See elsewhere&hellip;

- [Creating Accessible Links (video)](https://www.unr.edu/accessibility/faculty/links)
- [A few tips on accessible text links (video)](https://www.youtube.com/watch?v=HceSej_z8Ik)


## Matching criteria in the RGAA 3

- [Criterion 6.1 [A]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-6-1)
- [Criterion 6.2 [A]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-6-2)
- [Criterion 6.3 [AAA]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-6-3)
- [Criterion 6.4 [A]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-6-4)
- [Criterion 10.6 [A]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-10-6)

## Summary of the "Accessible Authoring for the Web" guide

* [Introduction](0-intro.md)
* [Sheet 1: When a picture is worth a thousand words](images.md)
* [Sheet 2: Colors](colors.md)
* [Sheet 3: Embed content from other sites on your pages](frames.md)
* [Sheet 4: Multimedia for Everyone](multimedia.md)
* [Sheet 5: Tables to present data, <i>what else?</i>](tables.md)
* [Sheet 6: Creating links without losing one's path](links.md)
* [Sheet 7: Headings, or the page outline](headings.md)
* [Sheet 8: Bulleted lists and numbered lists](lists.md)
* [Sheet 9: Multilingual texts](language.md)
* [Sheet 10: Quotations](quotes.md)
* [Sheet 11: Formatting texts](formatting.md)
* [Sheet 12: Downloadable documents](downloadable_documents.md)
* [Sheet 13: Abbreviations, complex words and glossary](definition.md)
* [Glossary](glossary.md)