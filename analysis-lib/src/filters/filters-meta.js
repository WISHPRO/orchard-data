module.exports = {
  filter1: {
    orchardDescription: `Artist Errors: Various Artists on Track Levels / vice versa`,
    programmerDescription: `The artist for a track can't be "Various Artists." VA can only be for an album.`,
    userExplanation: `"Various Artists" can't be used at the track level.`,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `Artist Errors: Various Artists on Track Levels / vice versa`,
      abbreviation: 'Various artists abbreviation found'
    }
  },

  filter2: {
    orchardDescription: `Artist name cannot include any additional info (Like their instrument, etc)`,
    programmerDescription: `2.4. Additional Information. The artist name must not include any additional information, such as role, date, instrument, former band, website, and so on." Incorrect: 'Joe Satriani (Guitarist)', 'Johann Sebastian Bach (1685-1750).`,
    userExplanation: `The artist name must not include any additional information, such as role, date, instrument, former band, website, and so on.`,
    category: 'iTunes',
    type: 'warning',
    basis: 'row',
    explanations: {
      default: `Artist name cannot include any additional info (Like their instrument, etc)`
    }
  },

  filter3: {
    orchardDescription: `Release name must not be generic (e.g., 00s Best Hits)`,
    programmerDescription: `Release name must not be generic (e.g., 00s Best Hits)`,
    userExplanation: `Release name must not be generic (e.g., 00s Best Hits)`,
    category: 'Risk',
    type: 'warning',
    basis: 'row',
    explanations: {
      default: `Release name must not be generic (e.g., 00s Best Hits)`
    }
  },

  filter4: {
    orchardDescription: `Artist Name formatting (cannot be Last, First)`,
    programmerDescription: `
      Terminate test if there is no comma in artist name (e.g., The Beatles)

      Terminate test if the Language is English and any word is:
      & (e.g., Earth, Wind & Fire)
      and (e.g., Emerson, Lake and Palmer)
      band, quartet, sextet, trio, orchestra, choir
      the (e.g., "Beatles, The")

      Terminate test if there is more than one comma in artist name. (e.g., Andršt, Luboš , Group)

      Terminate test if there are more than three words. (e.g., Soul Gun Warriors , U-Mass)
    `,
    userExplanation: `An artist name must not be in "Last, First" format.`,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `Artist Name formatting (cannot be Last, First)`
    }
  },

  filter5: {
    orchardDescription: `Artists names must not be generic (e.g., 00s Best Hits)`,
    programmerDescription: `It is a warning if "Release Artist(s)-Primary Artist(s)" contains any of the following: Yoga, Workout, Meditation, Baby, Christmas, Top Hits, Chorus, Orchestra, Singer, or Cast`,
    userExplanation: `Generic artists (such as such as Yoga, Workout, Meditation, Baby, Christmas, Top Hits, Chorus, Orchestra, or Singer) are not accepted.
    `,
    category: 'Risk',
    type: 'warning',
    basis: 'row',
    explanations: {
      default: `Artists names must not be generic (e.g., 00s Best Hits)`
    }
  },

  composerasartist: {
    orchardDescription: `Composer cannot be listed as primary artist`,
    programmerDescription: `Let release artist = both "Orchard Artist" and
      "Release Artist(s)-Primary Artist(s)")

      If release artist is the same as (release_artists_composer or any
      track_artist_composer) and genre is not classical or soundtrack, it is an error.

      If release artist is the same as (release_artists_composer or any
      track_artist_composer) and there is more than one value for
      track_artist_composer, it is an error.

      If genre is soundtrack and there is one composer for "Track Artist(s)
      - Composer(s)" across all tracks in the release, Orchard Artist and Release
      Artist(s)-Primary Artist(s) must be the composer.`,
    userExplanation: `The composer cannot be listed as primary artist. Refer to iTunes style guide 2.3, 4.4 or 24.4`,
    category: 'iTunes',
    type: 'error',
    basis: 'dataset',
    explanations: {
      default: `Composer cannot be listed as primary artist`,
      notClassical: `Composer is listed as primary artist and genre is not classical`,
      multipleComposers: `Artist cannot be listed as composer if there are multiple composers at track level`,
      soundtrack: `If genre is soundtrack and there is only one composer at track level, Orchard Artist and Release Artist(s)-Primary Artist(s) must be the composer`
    }
  },

  filter7: {
    orchardDescription: `Track/Album versions that aren’t allowed`,
    programmerDescription: `
      If there are matching parenthesis or square brackets, there is no error
      If the following text occurs in the parenthesis or square brackets, there is an error.

      Album Version
      Original Version
      Previously Unreleased
      Reissue
      Original Mix
      iTunes LP Version
      Clean Version
      Explicit Version
      Mastered for iTunes

      A warning to the programmer: there can be two of these strings, first
      parens and then in square brackets, like "Lorem (ipsum)[dolor]."
    `,
    userExplanation: `This type of content version (in parens) is not permitted.`,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `This type of content version (in parens) is not permitted.`
    }
  },

  filter8: {
    orchardDescription: `Soundtracks and scores must include version information in the album title, enclosed by parentheses or brackets`,
    programmerDescription: `
      There is no error if genre is not soundtrack or score

      There is an error if release title does not contain an expression in
      parenthesis in parenthesis or square brackets

      There is an error if release title does not contain one of the following:

      Soundtrack
      Original Score
      Music Inspired By
      Original
      Cast
      Music from
    `,
    userExplanation: `Soundtracks and scores must include version information in the album title.`,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `Soundtracks and scores must include version information in the album title, enclosed by parentheses or brackets`
    }
  },

  filter9: {
    orchardDescription: `The abbreviation for Original Soundtrack (O.S.T.) should not be used as an album or song title version`,
    programmerDescription: `
      There is no error if genre is not

      Original Score
      Soundtrack
      Musicals
      Musical
      Video Game
      TV Soundtrack

      There is no error if there is not an expression in parenthesis or square brackets
      There is an error if the expression is O.S.T. or OST
    `,
    userExplanation: `The abbreviation for Original Soundtrack (O.S.T.) should not be used as an album or song title version for scores, movies, TV, musicals, or video games.`,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `The abbreviation for Original Soundtrack (O.S.T.) should not be used as an album or song title version`
    }
  },

  filter10: {
    orchardDescription: `Titles including release dates, album name, track number, additional info (producers, single, etc), search terms, artist info`,
    programmerDescription: `
      It is an error if a release name contains " - Album"
      Example: Dawns Welcome to the Club - Album (feat. Ricky J)

      It is an error if a track name begins with a number followed by a period and subsequent text
      Example: 12. I'll Be Walking Alone in a Crowd

      It is an error if a release name or track title contains the substring "(Produced By [.*])
      Example: Campus Girl (Produced By T.J. Douglas) - Single

      It is an error if a release name or track title is prefixed with the track artist's name and a hyphen
      Example: Aerosmith - Draw the Line

      It is an error if a release name contains "(Exclusive)", "[Exclusive]", or "- Exclusive."
      Example: In Through The Out Door (Exclusive)

      It is an error if a release name contains "(Limited Edition)", "[Limited Edition]", or "- Limited Edition."
      Example: In Through The Out Door - Limited Edition
    `,
    userExplanation: `Titles may not include release dates, track number, additional info (producers, single, etc), search terms, or artist info.`,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `Titles may not include release dates, track number, additional info (producers, single, etc), search terms, or artist info.`
    }
  },

  filter11: {
    orchardDescription: `feat. and with must be properly formatted`,
    programmerDescription: `
      If "Track Artist - Featuring" or "Release Artist - Featuring" are both empty, there is no error.
      Extract any strings in the input fields in parens or square brackets with no text afterward. If there are no matching pairs or there is text after the pair, there is no error.
      Split on word separators. If the first word is:

      "feat." or "with" - case sensitive, there is no error.
      a case-insensitive match for: with, featuring, feat (no terminating '.'), w/
      the Spanish translation of "featuring" or "with"
      the Brazilian Portuguese translation of "featuring" or "with"

      report error.
    `,
    userExplanation: `Formatting of "feat." and "with" must be lower case, in English, and in parentheses or brackets. See iTunes Store Music Style Guide 5.3.`,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `Formatting of "feat." and "with" must be lower case, in English, and in parentheses or brackets. See iTunes Store Music Style Guide 5.3.`
    }
  },

  filter12: {
    orchardDescription: `"Live" on Release but not Tracks`,
    programmerDescription: `
      There is a target string - "Live" in English, ”Ao Vivo” in Portuguese, and
      “En Vivo” or “En Directo” in Spanish. A match for this string is
      case-insensitive, delimited by word separators. The language of the
      dataset and row is ignored - all languages are tested.

      There is version information for a track. It may be in the version field,
      in a parenthesized expression in the track title, or in square brackets in
      the track title.

      There is version information for a release in the release name. It may be
      in a parenthesized expression, or in square brackets, or after a hyphen,
      or the release name may be exactly "Live."

      If version information for a release does not contain the target string, there is no failure.
      Otherwise, if version information for a track does not contain the target
      string, there is a failure.
    `,
    userExplanation: `If the album title contains "Live", each track must also.`,
    category: 'Risk',
    type: 'warning',
    basis: 'row',
    explanations: {
      default: `If the album title contains "Live", each track must also.`
    }
  },

  filter13: {
    orchardDescription: `Part and Volume should be abbreviated to Pt. and Vol.`,
    programmerDescription: `
      If the substring ", Part [integer | roman numeral]" exists in a Release
      Name or Track Title, it is an error.

      If the subtring ", Volume [integer | roman numeral]" exists in a Release
      Name or Track Title, it is an error.

      If "Pt." or "Vol." matches in a case-insensitive way, but not in a
      case-sensitive way, it is an error.

      "Pt" and "Vol" without terminating period are errors
    `,
    userExplanation: `
      The words Part and Volume must be abbreviated with “Pt.”
      and “Vol.” See iTunes Style Guide 11.2.
    `,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `
        The words Part and Volume must be abbreviated with “Pt.”
        and “Vol.” See iTunes Style Guide 11.2.
      `
    }
  },

  filter14: {
    orchardDescription: 'Each artist field must only contain one artist name.',
    userExplanation:
      'Each artist field must only contain one artist name. See iTunes Style Guide 2.8',
    category: 'iTunes',
    type: 'warning',
    basis: 'row',
    explanations: {
      default:
        'Each artist field must only contain one artist name. See iTunes Style Guide 2.8'
    }
  },

  filter15: {
    orchardDescription: `Generic Titles (Track 1, Track 2)`,
    programmerDescription: `It is an error if a track title is "Instrumental", or if it fits the pattern "Track N", where N is an integeger. These are case-insensitive.`,
    userExplanation: `Generic track titles such as "Instrumental", or "Track 1" are not accepted.`,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `Generic track titles such as "Instrumental", or "Track 1" are not accepted.`
    }
  },

  filter16: {
    orchardDescription: `Non-standard Capitalization`,
    programmerDescription: ``,
    userExplanation: `Capitalization must be grammatically correct. Titles must not be in all capitals, all lower case, or random casing. See iTunes Style Guide session 11.`,
    category: 'iTunes',
    type: 'error',
    basis: 'dataset',
    explanations: {
      default: `Capitalization must be grammatically correct. Titles must not be in all capitals, all lower case, or random casing. See iTunes Style Guide session 11.`,
      inconsistent: `Capitalization is inconsistent through the album. Titles should be all sentence case or title case.`
    }
  },

  filter17: {
    orchardDescription: `Genres that don't exist in iTunes.`,
    programmerDescription: `
      Let the list of acceptable genres be from the "GENRE AS SHOWN ON THE STORE" column (which is text) or the
      "GENRE CODE FOR METADATA" column (which is computer friendly) in the document "iTunes Package Music
      Specification Addendum: Music, Music Video, and Ringtone Genre Codes" at
      https://itunespartner.apple.com/assets/downloads/Music_MusicVideo_Ringtone_Genre_Codes.xls,
      from any Path under "Music", excluding paths under "Music Videos" and "Ringtones."

      It is an error if the value in the genre field is not a case-insensitive match for a value in the
      acceptable genres.

      It is an error if the value in the sub-genre field is not a case-insensitive match for a value in the
      acceptable genres.
    `,
    userExplanation: `
      Genres must exist in the (non-web content) "iTunes Package Music Specification Addendum: Music, Music Video,and
      Ringtone Genre Codes" at https://itunespartner.apple.com/assets/downloads/Music_MusicVideo_Ringtone_Genre_Codes.xls
    `,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `
        Genre is not in the set accepted by iTunes. See "iTunes Package Music Specification Addendum: Music, Music Video,and
        Ringtone Genre Codes"
      `,
      blankGenre: 'The genre field must not be blank.'
    }
  },

  filter18: {
    orchardDescription: `Explicit Flagging`,
    programmerDescription: `
      It is an error if the following terms occur (with a case-insensitive match) in a release name or track title:
      "(Explicit)", "(Clean)".

      Let a track be marked as clean, explicit, or "clean-or-unknown" according to the value of the
      "Explicit (No/Yes/Clean)" field. The match is case-insensitive. If the value is "No" or blank, it
      is considered "clean-or-unknown."

      It is an error if there is a track flagged clean and there is not an identical track marked explicit.
      The identical version would have the same release name, track title, and track artist, but not the same isrc.
    `,
    userExplanation: `A clean track must have a corresponding explicit track.`,
    category: 'iTunes',
    type: 'warning',
    basis: 'row',
    explanations: {
      default: `A clean track must have a corresponding explicit track.`
    }
  },

  vsmeetsremixalbums: {
    orchardDescription: `Proper remix formatting`,
    programmerDescription: `
      - If the album title does not contain "meets" or "vs", case-insensitive, there is no error.
      - If the album title does contain a case-insensitive whole-word match for "Meets" but not a case-sensitive match, there is an error. The message is "Meets" must be capitalized just like that.
      - If the album title does contain a case-insensitive whole-word match (with word delimiters) for "vs." but not a case-sensitive match, there is an error. The message is "vs." must be capitalized just like that.
      - If the album title does contain a case-insensitive whole-word match for "vs" (no dot) but not for "vs." (with a dot), there is an error. The message is "vs." must be written exactly like that.
      - If the album title contains a case-sensitive whole-word match for Meets or vs., use that as a delimiter, split the string, and trim whitespace from the segments. If the primary album artist is not "Part A", "Part B", "Part A | Part B", or "Part B | Part A", there is an error. (Whitespace around the pipe delimiter is optional). The message is "When “Meets” or “vs.” is used to describe an album, either or both artists must be identified as primary at the album level."
    `,
    userExplanation: `When “Meets” or “vs.” is used to describe an album on which two artists perform separate songs, both artists must be listed at the album level and identified as Primary. At the track level, each song must be listed with the primary artist who performs it - see iTunes Style Guide 6.2.`,
    category: 'iTunes',
    type: 'error',
    basis: 'dataset',
    explanations: {
      meetsMustBeCapitalized: `"Meets" must be capitalized just like that.`,
      vsMustBeCapitalized: `"vs." must be capitalized just like that.`,
      vsMustBeWrittenExactlyLikeThat: `"vs." must be written exactly like that.`,
      artistsMustBeIdentifiedAsPrimary: `When “Meets” or “vs.” is used to describe an album, either or both artists must be identified as primary at the album level.`,
      default: `When “Meets” or “vs.” is used to describe an album on which two artists perform separate songs, both artists must be listed at the album level and identified as Primary. At the track level, each song must be listed with the primary artist who performs it - see iTunes Style Guide 6.2.`
    }
  },

  nazipropaganda: {
    orchardDescription: `Content problems: Nazi propaganda`,
    programmerDescription: `
      It is an error if any word from the nazi keyword list occurs in the list of input fields below:

      - Release Name
      - Orchard Artist
      - Artist URL
      - Release Artist(s)-Primary Artist(s)
      - Release Artist(s)-Featuring(s)
      - Release Artist(s)-Remixer(s)
      - Imprint
      - Genre
      - Sub-genre
      - Track Name
      - Track Artist
      - Track Artist(s) - Featuring(s)
      - Track Artist(s) - Remixer(s)

      Let the nazi keyword list be the following terms:

      - Hakenkreuz
      - Parteiadler
      - Thule Society
      - Ku Klux Klan
      - Wolfsangel
      - Celtic cross
      - Solar cross
      - Thule Society
      - Othala rune
      - Sturmabteilung
      - Sig runes
      - Totenkopf
      - Kampfgeschwader 54
      - Reichsadler
      - Reichskriegsflagge
    `,
    userExplanation: `Nazi keywords are an error`,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `
        Nazi keywords are an error. See iTunes Style Guide 1.13: Nazi Propaganda.
      `
    }
  },

  /*
  // Temporarily disabled due to issue #302 "1K set hangs"
  'correctlanguagesetatalbumlevel': {
    'orchardDescription': `Correct language set at album level (language should match the language of the metadata, not the audio)`,
    'programmerDescription': `Perform language detection on the release name. Compare that value to the release meta language. It is an error if they do not match.`,
    'userExplanation': `The value of the meta should match the language of the metadata, not the audio`,
    'category': 'iTunes',
    'type': 'error',
    'basis': 'row',
    'explanations': {
      'default': `
        The appropriate language must be set in the metadata at the album level. Language codes should match the language of the metadata, not the audio. See iTunes Style Guide 1.5
        The appropriate audio language must be set in the metadata at track level. Language code(s) should match the language spoken or sung in the audio. Non-linguistic content should be flagged ‘zxx'. See iTunes Style Guide 1.6
        To ensure that accents and capitalizations appear correctly on the iTunes Store and Apple Music, the appropriate language must be set in the metadata. See iTunes Style Guide 11
      `
    }
  },
  */

  keywordblacklist: {
    orchardDescription: `keyword blacklist`,
    programmerDescription: `
      - It is an error if any word from the keyword list occurs in the list of input fields below
      - The keyword list is supplied by the user as a parameter when creating the dataset
      - The keyword match is case-insensitive
    `,
    userExplanation: `Keyword blacklist match`,
    category: 'Risk',
    type: 'error',
    basis: 'dataset',
    explanations: {
      default: `Keyword blacklist match`
    }
  },

  nonmusicalcontent: {
    orchardDescription: `Clearly non-musical content`,
    programmerDescription: `
      It is an error if the genre or sub-genre is in the "non-musical content list", case-insensitive

      The genre can match either the human-friendly genre name ("Stories") or the computer-friendly one ("STORIES-00").

      Let the non-musical content list be:

      - Anime                ANIME-00
      - Stories              STORIES-00
      - Comedy               COMEDY-00
      - Novelty              NOVELTY-00
      - Standup Comedy       STANDUP-COMEDY-00
      - Disney               DISNEY-00
      - Enka                 ENKA-00
      - Fitness & Workout    FITNESS-WORKOUT-00
      - Inspirational        INSPIRATIONAL-00
      - Karaoke              KARAOKE-00
      - Healing              HEALING-00
      - Meditation           MEDITATION-00
      - Nature               NATURE-00
      - Relaxation           RELAXATION-00
      - Travel               TRAVEL-00
      - Yoga                 YOGA-00
      - Sound Effects        SOUND-EFFECT-00
      - Video Game           VIDEOGAME-00
      - Spoken Word          SPOKEN-WORD-00
    `,
    userExplanation: `Non-musical content is discouraged.`,
    category: 'Risk',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `See the iTunes Package Music Specification Addendum: Music, Music Video, and Ringtone Genre Codes`
    }
  },

  trackcountthreshold: {
    orchardDescription: `
      Album Track Count: The Orchard shall designate a maximum track for each respective album submitted to Musical
      Turk. The RA Tool shall flag any album wherein the track count exceeds the amount designated by The Orchard.
    `,
    programmerDescription: `
      Not in the filter: The REST API to save a dataset needs to add a new parameter for the track count threshold.
      This value must be saved with the dataset. On running a filter, it is an error if the value of the "Track No."
      field is greater than the track count threshold.
    `,
    userExplanation: `Too many tracks in this album.`,
    category: 'Risk',
    type: 'error',
    basis: 'dataset',
    explanations: {
      default: `Too many tracks in this album.`
    }
  },

  duplicatesthreshold: {
    orchardDescription: `Low diversity of tracks across catalog: what percentage (and how many) tracks within a respect catalog have matching ISRC code(s) shall be determined.`,
    programmerDescription: `
      - If the threshold parameter passed in the REST call is a floating point, that is fine.
      - Let the duplicates ratio be the number of ISRCs which appear in more than one track divided by the total number of tracks.
      - Let exceeded be true if the duplicates ratio is equal to or greater than the value selected by the user
      - The REST API for the report summary should be extended to carry the duplicates ratio, the gross number of duplicates, and the exceeded flag.
    `,
    userExplanation: `Duplicate ISRC.`,
    category: 'Risk',
    type: 'error',
    basis: 'dataset',
    explanations: {
      default: `Duplicate ISRC.`
    }
  },

  albummatchesartist: {
    orchardDescription: `The Tool shall flag any and all content wherein the album and artist name are matching`,
    programmerDescription: `
      - It is an error for release name to be the same as artist name.
      - The string match is case-insensitive
      - A substring match is not an error
      - This test applies to every row in a matching release, so one with 10 tracks will have 10 errors
      - This only compares the fields in the following Input Fields: Release Name, Release Artist(s)-Primary Artist(s)
    `,
    userExplanation: `Matching album and artist name are a risk factor.`,
    category: 'Risk',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `Matching album and artist name are a risk factor.`
    }
  },

  artistblacklist: {
    orchardDescription: `Artist Blacklist`,
    programmerDescription: `
      - It is an error if any word from the artist list occurs in the list of input fields below
      - The artist list is supplied by the user as a parameter when creating the dataset
      - The keyword match is case-insensitive
    `,
    userExplanation: `This artist is in the blacklist.`,
    category: 'Risk',
    type: 'error',
    basis: 'dataset',
    explanations: {
      default: `This artist is in the blacklist.`
    }
  },

  variousartistsmisspelled: {
    orchardDescription: `Various Artists cannot be written as V.A. VA, Various, etc.`,
    programmerDescription: `
      - Let there be a standardized set of misspellings of the term "Various Artists" for any given language.
      - Let the language in use be determined by [fixme: setting on the batch or setting in metadata]
      - It is an error if the primary album-level artist is a misspelling of "Various Artists."
    `,
    userExplanation: `"Various Artists" must be spelled exactly like that.`,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `"Various Artists" must be written exactly like that.`
    }
  },

  remixversioninformation: {
    orchardDescription: `Proper remix formatting (such as "Title (feat.Artist) [Remix]")`,
    programmerDescription: `
      (Tail)

      Let the head of a track title end at either:

      * the first hyphen
      * the first parenthesis or square bracket after which there is no text not in parentheses or square brackets

      So with the track title '(lorem) ipsum (dolor)[sit]', the tail is '(dolor)[sit]', and with the track title 'lorem (ipsum) dolor' there is no tail.

      Then the *tail* is any text after the head.

      (Remix flag)

      * A remix flag is set on the track is set if the tail contains any of the words "remix", "mix", "remixed", "mixed", delimited by word separators, case insensitive.
      * A remix flag on a track is set if the "Track Artist(s) - Remixer(s)" field is not blank.

      Note: we assume the track-level remixer will always be set, even if the album-level remixer is also set.

      (Original song)

      * If every track on an album has the same head, let the "original song" be the head.

      (Remix album)

      * A song is a remix of the original song if the remix flag is set and the title contains the original song.
      * If every track on an album is either the original song or a remix of the original song, the album is a remix album.

      (Tests)

      1. If there is a remix album, and the release name does not contain the original song, it is an error.
      2. If there is an original song for a release, and any two track titles on that release are identical, it is an error.
    `,
    userExplanation: `
      A collection of remixes of the same track must communicate this in the album title.
      Track titles must not be identical. See iTunes Style Guide 10.3.
    `,
    category: 'iTunes',
    type: 'error',
    basis: 'dataset',
    explanations: {
      default: `A collection of remixes of the same track must communicate this in the album title. Track titles must not be identical.`
    }
  },

  multipleversionreferences: {
    orchardDescription: `Proper remix formatting (such as “Title (feat.Artist) [Remix]”)`,
    programmerDescription: `
      Let the tail of a track title be any component beginning with an open parenthesis or square bracket and closing with a matching parenthesis or square bracket, and with no non-parenthesized or bracketed text between the closing parenthesis or square bracket and the end of the line or field. So with the track title (lorem) ipsum (dolor)[sit], the tail is (dolor)[sit], and with the track title lorem (ipsum) dolor there is no tail.

      If a tail contains both parentheses and square brackets, and square brackets are used before parens, it is an error.

      If a tail contains both parentheses and square brackets, and there is more than one set of parenthesis, it is an error.

      If a tail contains both parentheses and square brackets, and there is more than one set of square brackets, it is not an error.

      If a tail contains multiple explanatory references and the first one is in square brackets rather than parentheses, it is an error.
    `,
    userExplanation: `The first explanatory reference must be enclosed in parentheses, with any additional references enclosed in brackets.`,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `The first explanatory reference must be enclosed in parentheses, with any additional references enclosed in brackets.`
    }
  },

  trackswithvsandmeets: {
    orchardDescription: `Proper remix formatting (such as “Title (feat.Artist) [Remix]”)`,
    programmerDescription: `
      There is no failure unless there exists a parenthesized expression in the track title.

      There is a failure if a parenthesized expression in the track title contains a case-insensitive match
      for "vs." or "Meets", but not a case-sensitive match. The error message would be the second one below,
      that begins with "capitalization." This failure is a warning. Do not stop processing but continue to see
      if other failure conditions are met.

      There is a failure if that expression as a whole appears in in any track-level artist field. This is an error.

      Split the parenthesized expression on "vs." or "meets", with leading and trailing whitespace trimmed.
      It is a failure if neither (A|B) or (B|A), pipe-delimited, is the primary track artist.
      For a track titled "Lorem (first meets second) Ipsum" or "Lorem (first vs second) Ipsum",
      the primary track artist must be literally first|second or second|first. This failure is an error.
    `,
    userExplanation: `
      For tracks using “Meets” or “vs.,” all artists involved must be listed at the track level and identified as Primary.
      The terms “Meets” and “vs.” must only appear in the track title.
      Capitalization of Meets and vs. in a track title does not match.
    `,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `
        Use of “Meets” or “vs.” For artists using “Meets” or “vs.,” all artists involved must be listed at the track
        level and identified as Primary. The terms “Meets” and “vs.” must only appear in the album or track title.
      `
    }
  },

  languagefieldsmustnotbeblank: {
    orchardDescription: `This is not a requirement from the Orchard`,
    programmerDescription: `
      If either of the Release Meta Language or Meta Language fields are missing, null, or contain an empty string, it is an error.
      The error message is "Release Meta Language and Meta Language must not be blank."

      If the track genre is in the designated set and Meta Language does not contain "zxx", it is an error with message Non-linguistic
      content must have Meta Language "zxx".

      The designated set is (any of the following):

      | Guitar | GUITAR-00 |
      | Chinese Flute | CHINESE-FLUTE-00  |
      | Chinese Strings | CHINESE-STRINGS-00  |
      | Brass & Woodwinds | BRASS-WOODWINDS-00  |
      | Guitar | GUITAR-00  |
      | Percussion | PERCUSSION-00  |
      | Piano | PIANO-00  |
      | Solo Instrumental | SOLO-INSTRUMENTAL-00  |
      | Violin | VIOLIN-00 |
      | Ambient | AMBIENT-00  |
      | Bass | BASS-00  |
      | Instrumental | INSTRUMENTAL-00  |
      | Marching Bands | MARCHING-BANDS-00  |
      | Nature | NATURE-00  |
      | Surf | SURF-00  |
      | Sound Effects | SOUND-EFFECT-00  |
    `,
    userExplanation: `
      Release Meta Language and Meta Language must not be blank.
      Non-linguistic content must have Meta Language "zxx".
    `,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: 'Release Meta Language and Meta Language must not be blank',
      nonLinguisticContent: 'Non-linguistic content must have Meta Language "zxx"'
    }
  },

  specialcharacters: {
    orchardDescription: `Not an Orchard requirement`,
    programmerDescription: `
      Given the size of the search expression X the number of fields to check X the number of lines, this may create impossible
      performance problems. If so we will have to find a more efficient but less standard algorithm, like running the regex
      against the entire input file.
    `,
    userExplanation: `
      Special Characters: Do not use emojis or special characters in titles, artist names, or other metadata.
      See iTunes Store Music Style Guide 1.9.
    `,
    category: 'iTunes',
    type: 'error',
    basis: 'row',
    explanations: {
      default: `Special Characters: Do not use emojis or special characters in titles, artist names, or other metadata.`
    }
  }
}
