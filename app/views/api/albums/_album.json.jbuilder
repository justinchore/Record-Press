json.extract! album, :id, :title, :genre_id, :album_notes, :credits, :downloadable, :artist_id
json.genre album.genre.genre_name
json.tracks album.tracks.map{|track| track }