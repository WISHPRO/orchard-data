// Check Various Artists on Track Levels

module.exports = function(row, idx, report) {

  // retrieves filter description
  let filterName = 'filter1';
  let removeDiacritics = require('../scripts/remove-diacritics');

  let fields = ['track_artist', 'track_artist_featuring'];
  let language = row['release_meta_language'].trim().toLowerCase();

  // Captures invalid field values
  let invalidStrings = {
    'abbreviations':          /^v\/?\.?a\.?$/i,
    'english':                /^(vario)u?(s)(\,?\.? ?(artist)s?)?$/i,
    'portuguese':             /^(varios)(\-?\,?\.? ?(interpretes)?)?$/i,
    'spanish':                /^(varios)(\-?\,?\.? ?(artista)(s)?)?$/i
  };

  // If field is related to 'track artists'
  fields.forEach(field => {

    let value = row[field];

    // Only tests if value is non-null
    if(value) {

      let langRegExp = invalidStrings[language];
      let abbrRegExp = invalidStrings["abbreviations"];

      // Removes diacritics and removes trimming whitespaces
      value = value.trim();
      value = removeDiacritics(value);

      // error condition is met
      if(langRegExp.test(value) || abbrRegExp.test(value)) {

        var occurrence = {
          'rowId': idx,
          'field': field,
          'value': row[field]
        };

        // stores error occurrence in filter report
        report.addOccurrence(filterName, occurrence);

      }

    }

  });

  return true;

};
