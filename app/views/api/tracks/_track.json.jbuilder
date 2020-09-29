json.extract! track, :id, :title, :artist_id, :genre_id, :downloadable, :track_notes, :credits, :lyrics, :track_number, :album_id, :created_at
json.genre track.genre.genre_name
json.artist_name track.artist.artistName