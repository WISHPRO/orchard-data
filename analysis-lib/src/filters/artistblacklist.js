'use strict'

const filterMeta = require('./filters-meta').artistblacklist

const defaultErrorType = filterMeta['type']
const defaultExplanationId = 'default'

// Rule: It is an error if any word from the artist list occurs in the list of input fields below:
//
// - Release Artist(s)-Primary Artist(s)
// - Release Artist(s)-Featuring(s)
// - Release Artist(s)-Remixer(s)
// - Release Artist(s)-Composer(s)
// - Release Artist(s)-Orchestra(s)
// - Release Artist(s)-Ensemble(s)
// - Release Artist(s)-Conductor(s)
// - Track Artist
// - Track Artist(s) - Featuring(s)
// - Track Artist(s) - Remixer(s)
// - Track Artist(s) - Composer(s)
// - Track Artist(s) - Orchestra(s)
// - Track Artist(s) - Ensemble(s)
// - Track Artist(s) - Conductor(s)

const fieldsToCheck = [
  'release_artists_primary_artist',
  'release_artists_featuring',
  'release_artists_remixer',
  'release_artists_composer',
  'release_artists_orchestra',
  'release_artists_ensemble',
  'release_artists_conductor',
  'track_artist',
  'track_artist_featuring',
  'track_artist_remixer',
  'track_artist_composer',
  'track_artist_orchestra',
  'track_artist_ensemble',
  'track_artist_conductor'
]

/**
 * Filter: Clearly non-musical content.
 * @param {Object} row
 * @param {number} index
 * @param {{artist_blacklist: string}} metadata
 * @returns {{row_id: number, field: array, value: array, explanation_id: array, error_type: array}|boolean}
 */
module.exports = function (row, index, metadata) {
  const occurrence = {
    'row_id': index,
    'field': [],
    'value': [],
    'explanation_id': [],
    'error_type': []
  }

  if (metadata[0]) {
    metadata = metadata[0] // TODO: Fix this workaround. Metadata should never come as array.
  }

  // Rule: The artist list is supplied by the user as a parameter when creating the dataset

  let artistBlacklist = metadata.artist_blacklist.replace('\r\n', '\n').split('\n')

  // Rule: keyword match is case-insensitive

  fieldsToCheck.forEach((field) => {
    if (row.hasOwnProperty(field) && row[field].length > 0) {
      artistBlacklist.forEach((artist) => {
        let artistFormatted = artist.toLowerCase().trim()
        let fieldValueFormatted = row[field].toLowerCase().trim()
        let fieldValueContainsBlacklistedArtist = (fieldValueFormatted.indexOf(artistFormatted) > -1)

        if (fieldValueContainsBlacklistedArtist) {
          occurrence.field.push(field)
          occurrence.value.push(row[field])
          occurrence.explanation_id.push(defaultExplanationId)
          occurrence.error_type.push(defaultErrorType)
        }
      })
    }
  })

  return (occurrence.field.length > 0) ? occurrence : false
}
