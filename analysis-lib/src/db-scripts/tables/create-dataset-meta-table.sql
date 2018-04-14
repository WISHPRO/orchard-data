CREATE TABLE IF NOT EXISTS dataset_meta (
  source TEXT,
  artist_blacklist TEXT,
  keyword_blacklist TEXT,
  duplicates_threshold INTEGER,
  various_artists_threshold INTEGER,
  track_count_threshold INTEGER,
  lang text,
  status INTEGER,
  time INTEGER
  );
