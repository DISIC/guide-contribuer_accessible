# Sheet 12: Downloadable documents

## Issues for users with disabilities

The accessibility of downloadable documents has the same stakes as the accessibility of web content. You need to structure a document with headings, lists, and so on, to allow users to navigate and easily find their way into the document. All other recommendations also apply: colors, image descriptions, tables, links, and more.

The most impacted users are users who are blind, visually impaired or have reading challenges.

If your site is accessible but the information is conveyed to your users via inaccessible documents (.doc, .pdf, etc.), your content is not accessible. This prevents users from accessing this information.

## In practice and in pictures

In general, you should not use office documents to convey specific information or as a substitute for the content of a page. The main content of your page should remain web content and the office document should only be used for printing purposes.

### Integrating an office document into a website

When you upload a document, you must inform the user of the **weight and format** of this document.

This information allows the user to understand that it is a downloadable document, to know its characteristics and thus allows her to evaluate whether or not she will download the document. Regarding the format of a document, the information is important for a user to know if she will be able to open it (when it requires specific software for example), and if she will be able to read it (compatibility of the file format with assistive technologies).

When you embed a document for download, it is done through a hyperlink in your text. The format and weight of this document must be provided in the context of the link, the best practice being to make this information available in the link text or title (tooltip). For example: "WCAG 2.0 Checklist (pdf, 171 KB)".

**We refer you to [sheet 6: Creating links without losing one's path](links.md) for creating link text and title.**

Below is an example of using the link text in WordPress text editor, in order to define the weight and format of a downloadable document.

<img src="img/bureautique/poids-format.png" alt="" />

**Note:** The developers of your website may have set up a feature that automatically detects weight and format information and integrates them directly into the download link text or title. Check with your IT department the availability of this feature.

#### Solutions for inaccessible documents

* If your document is not accessible, **notify users**. As with weight and format, indicate in the title or link title that the document is not accessible.
* You can also **provide an equivalent, accessible document** in another format.

For example, you have a PDF document created with software that does not support accessibility features (for example, the municipal newsletter created with DTP software that does not allow for accessibility adaptations). This document is not structured (tagged) and you can't change this. You still have the possibility to recreate an accessible equivalent in another format (like in a word processing software in .doc or .odt format, for example) and make it available for download as well.

Thus, you can propose, for the same content, 2 documents (one accessible and one not accessible), mentioning in their link text or title, which is accessible and which is not.

* **Create a structured web page** where you provide the contents of an inaccessible downloadable document.

It is simply a question of creating a dedicated page that duplicates the contents of this document. Thus, the accessible alternative is no longer another document to download but a page of your website to visit. As well as for the provision of 2 documents to download, you can then link to the page that contains the accessible content of this document, specifying that it is the accessible version.

**Note:** Prefer the latter option whenever possible.

## See elsewhere&hellip;

- [Accessible Digital Office Document (ADOD) Project](http://adod.idrc.ocad.ca/);
- [Make your Word documents accessible](https://support.office.com/en-us/article/Make-your-Word-documents-accessible-d9bf3683-87ac-47ea-b91a-78dcacb3c66d)
- [AccessODF - an accessibility checker for Writer, in the OpenOffice and LibreOffice suites](http://accessodf.sourceforge.net/)


## Matching criteria in the RGAA 3

- [Criterion 13.6 [A]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-13-6)
- [Criterion 13.7 [A]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-13-7)


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
