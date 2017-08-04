# Sheet 4: Multimedia for Everyone

Most of the multimedia content you will encounter are videos (with or without soundtrack) or audio files.

Also included in the category of multimedia content, are interactive elements such as animations or ads in Adobe Flash format, for example.


## Issues for users with disabilities

Multimedia content can convey information through images (actions, embedded texts) or through audio (soundtrack of a video, or sound file alone).

Oftentimes, texts are embedded in the videos, to introduce a speaker, indicate a date&hellip; and are not mentioned in the audio track. Blind users, or users with low vision, who can't make sense of the images, or those who have difficulty understanding visual information presented on screen for cognitive reasons, will need to have these images described for them. Information must be provided to these users through non-visual means.

Users who are hearing-impaired, deaf or hard-of-hearing, meaning they don't perceive audio content, or not well enough, will require sign language or captioning to understand the audio content of the multimedia content.


## In practice and in pictures


### Provide a heading

When you insert multimedia content, you must associate a heading to it. This heading may include the title of the multimedia element, if it has one. The heading should make it possible to understand what information is presented in this piece of content. Any multimedia element must be considered as content in its own right, and therefore structured through a heading. We refer you to the [Headings, or the page outline](titles.md) sheet for the insertion of this heading.

### Enabling the understanding of multimedia content without audio

#### Captions

Subtitles (for translation) and captions (for hearing impairments) have different purposes. Under the RGAA 3, captions must be in the language of the considered media. If the video is in French, for example, the captions must be in French.

Captions are for videos only. They need to convey all the audio information from the video: characters' dialogs, voice-over or even meaningful sounds that are necessary to understand the course of action.

They must be properly synchronized and the user should be able to set them on and off with the video player. If the player does not have this feature, then it is possible to make 2 videos available: one with the captions, and one without. Each can be placed on a different page, the important thing is that the user easily understands that there is a captioned version. The simplest way to do this will generally be to insert a link before the non-captioned video, that leads to the captioned video; and before the captioned video, a link that brings back to the non-captioned video.

Below is an example of captioned video. This example can be found among [WAI's perspective videos](https://www.w3.org/WAI/perspectives/).

<img src="img/multimedia/sous-titres.png" alt="">

#### Text Transcript

The text transcript concerns videos and audio-only files.

A text transcript is the conversion into text of all the audio and visual contents of the video. It includes:

- the totality of what is expressed orally;
- all the descriptive information necessary for an equivalent understanding of the action.

This textual information should be presented in the chronological order of their appearance in the video.

A text transcript is structured text content, like any other text content. If necessary, please use lists, headings, etc.

Provision for users of this text transcript can be done in several ways:

- It can be located just below the video itself, with a clear indication of its nature and purpose. Ideally, it has the same title as the video;
- It can also be located on a different page than the video. In this situation, provide a link to this page, after the video.

Below is an example of a text transcript directly under the video, on [WAI's perspective videos pages](https://www.w3.org/WAI/perspectives/voice.html).

<img src="img/multimedia/transcription-textuelle.png" alt="" />

#### Audio description

Audio description only applies to videos.

An audio description is a spoken narration added to the soundtrack of the video, to describe the important visual details that can't be understood from the main soundtrack only.

The audio description of a video provides information about actions, characters, changes in scenes, on-screen text, and other visual content.

When all of the visual information in the video is already provided in the audio track, no further audio description is required. For example, in an interview, it is easy to avoid the need for audio description by announcing the name and position of the protagonists, which are often displayed on screen. If this need for audio description is anticipated, it can become redundant. Taking into account this design need is less expensive, so think about it!

The audio description must be synchronized with the video, and as with the captions, it must be possible to set them on and off again.

#### Audio contrasts for dialogs

In the case of audio-only files, you must ensure that the dialogs are sufficiently audible. Several solutions are possible if this is not the case:

- Your media player can mute the background sounds;
- There is an alternative version, without the background sounds, or with a higher volume for dialogues.

#### No Auto Play

You must avoid, whenever possible, to let multimedia content that includes sound, be played automatically during page load. These settings often exist for videos that are embedded from a third-party platform. Even if the user has the ability to mute the sound, it is preferable to avoid automatic playback.


### Multimedia content (excluding videos and audio files)

Apart from videos and audio files, there are non-time-based multimedia content. This notion relates to interactive animations or activities based on technologies that sometimes require additional plugins. The most emblematic is Adobe's Flash technology.

[See an example of interactive activity based on Adobe's Flash technology, on the <i lang="fr">Centre collégial de développement de matériel didactique</i> website](http://www.ccdmd.qc.ca/fr/exercices_interactifs/index.cgi?id=1028&action=animer)

<img src="img/multimedia/non-temporel.png" alt="" />

For this type of content, you must ensure that a user who can't use a mouse, and who navigates using the keyboard only, can perform the same actions.

If it is not possible to make this content accessible, you must provide an accessible alternative. In such cases, the solution can be very technical, it is preferable to get closer to the IT department.

### Accessibility of multimedia content interfaces

Although you may not be able to fully assess the accessibility of audio or video players or other multimedia objects, you can at least perform two control operations.

#### Presence of minimum controls

An audio or video player must have a minimum of 5 controls:

- a Play and pause button;
- a Stop button;
- a sound control element, to mute and unmute;
- a button to set the captions on and off (if available);
- a button to set the audio description on and off (if available).

#### Use of keyboard and mouse

Any multimedia object (whether or not it has video and audio) must be usable through the keyboard and the mouse. You can test its keyboard accessibility by using the tab key on your keyboard. In this way, make sure that you access all the features of the object. If it's a video for example, make sure that the play, pause, and other buttons can be reached with the tab key only, and can be activated with the keyboard only.

## Memo for Action

- Can we understand this video without the audio track?
- Can we understand this video without looking at it (just by listening to it)?
- Does my audio file or video have a text transcript?
- Can I pause and restart the video through the keyboard only?

## Stereotypes

### Consider Sign Language

Captions are not necessarily a sufficient alternative for all hearing-impaired people. Indeed, some deaf or hard-of-hearing people read and understand sign language only. This is why a text transcript is not necessarily a sufficient alternative.

## See also&hellip;

- Provide a heading for your multimedia content. See [sheet 7: Headings, or the page outline](headings.md)
- Create relevant links to return to the alternatives of multimedia files. See [sheet 6: Creating links without losing one's path](links.md)

## See elsewhere&hellip;

- [Examples of accessible videos available on WAI's website](https://www.w3.org/WAI/perspectives/Overview.html)
- [Media Accessibility User Requirements](https://www.w3.org/WAI/PF/media-a11y-reqs/) (W3C Editor's draft)



## Matching criteria in the RGAA 3

- [Criterion 4.1 [A]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-1)
- [Criterion 4.2 [A]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-2)
- [Criterion 4.3 [A]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-3)
- [Criterion 4.4 [A]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-4)
- [Criterion 4.5 [AA]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-5)
- [Criterion 4.6 [AA]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-6)
- [Criterion 4.7 [AA]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-7)
- [Criterion 4.8 [AA]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-8)
- [Criterion 4.9 [AAA]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-9)
- [Criterion 4.10 [AAA]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-10)
- [Criterion 4.11 [AAA]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-11)
- [Criterion 4.12 [AAA]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-12)
- [Criterion 4.13 [AAA]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-13)
- [Criterion 4.14 [AAA]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-14)
- [Criterion 4.16 [A]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-16)
- [Criterion 4.17 [A]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-17)
- [Criterion 4.18 [A]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-18)
- [Criterion 4.19 [AAA]](https://disic.github.io/rgaa_referentiel_en/criteria.html#crit-4-19)


### Note on Compliance Levels
Depending on the level of compliance with the RGAA 3, the recommendations for accessibility are not the same for video or audio multimedia elements. Below we briefly summarize the requirements regarding this topic. This summary is not a substitute for the recommendations in the technical reference, to which you are referred for further details: [Criteria for the multimedia category of the RGAA 3](https://disic.github.io/rgaa_referentiel_en/criteria.html#multimedia).

- Level A:
    - a text transcript or audio description;
    - synchronized captions.
- Level AA:
    - a text transcript;
    - synchronized captions;
    - a synchronized audio description.
- AAA level:
    - a text transcript;
    - synchronized captions;
    - an audio description;
    - a synchronized extended audio description;
    - a sign language interpretation.



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