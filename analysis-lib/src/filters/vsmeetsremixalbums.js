'use strict'

const filterId = require('path').parse(__filename).name
const filterMeta = require('./filters-meta')[filterId]

const defaultErrorType = filterMeta['type']
const defaultExplanationId = 'default'

/**
 * @param {Object} row
 * @param {number} index
 * @param {Array} dataset
 * @returns {{row_id: number, field: array, value: array, explanation_id: array, error_type: array}|boolean}
 */
module.exports = function (dataset) {
  const occurrences = []

  dataset.forEach((row, index) => {
    const occurrence = {
      'row_id': index + 1,
      'dataset_row_id': row.rowid,
      'field': [],
      'value': [],
      'explanation_id': [],
      'error_type': []
    }

    // If release name is not set, returns false as there won't be errors anyway.
    if (!row.hasOwnProperty('release_name')) {
      return
    }

    // Rule: Does the release name contain “Meets” or “vs.”? If not, there is no error.

    let releaseNameContainsMeetsTerm = (row.release_name.toLowerCase().indexOf(' meets ') > -1)
    let releaseNameContainsVsTerm = (row.release_name.toLowerCase().indexOf(' vs. ') > -1)

    if (!releaseNameContainsMeetsTerm && !releaseNameContainsVsTerm) {
      return
    }

    // Rule: Is it a collection of different songs remixed by a single DJ? If not, there is no error.

    for (let i = 0, l = dataset.length; i < l; i++) {
      // Don't compare row with itself.
      if (i === index) continue

      // Skip comparison if there`s no remixer set.
      if (!row.track_artist_remixer || !dataset[i].track_artist_remixer) continue

      let isRemixedByASingleDJ = (row.track_artist_remixer === dataset[i].track_artist_remixer)

      if (!isRemixedByASingleDJ) return
    }

    // Rule: Is the mixing DJ listed at the album level and identified as Primary with the Remixer role? If not, there is an error.

    let mixingDjIsListedAtTheAlbumLevelAsRemixer = (row.release_artists_remixer === row.track_artist_remixer)

    if (!mixingDjIsListedAtTheAlbumLevelAsRemixer) {
      occurrence.field.push('release_artists_remixer')
      occurrence.value.push(row.release_artists_remixer)
      occurrence.explanation_id.push(defaultExplanationId)
      occurrence.error_type.push(defaultErrorType)
    }

    // Rule: Are the original artists (whose songs are being remixed) listed at the track level identified as Primary? If not, there is an error.

    let originalArtistsAreListedAtTrackLevel = (row.track_artist !== row.track_artist_remixer)

    if (!originalArtistsAreListedAtTrackLevel) {
      occurrence.field.push('track_artist')
      occurrence.value.push(row.track_artist)
      occurrence.explanation_id.push(defaultExplanationId)
      occurrence.error_type.push(defaultErrorType)
    }

    // Rule: Are the original artists listed at the album level? If so, there is an error.

    let originalArtistsAreListedAtTheAlbumLevel = (row.release_artists_primary_artist === row.track_artist)

    if (originalArtistsAreListedAtTheAlbumLevel) {
      occurrence.field.push('release_artists_primary_artist')
      occurrence.value.push(row.release_artists_primary_artist)
      occurrence.explanation_id.push(defaultExplanationId)
      occurrence.error_type.push(defaultErrorType)
    }

    if (occurrence.field.length > 0) occurrences.push(occurrence)
  })

  return occurrences
}