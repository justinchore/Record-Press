json.extract! album, :id, :title, :genre_id, :album_notes, :credits, :downloadable, :artist_id, :created_at
json.picUrl url_for(album.album_artwork)  
json.genre album.genre.genre_name
json.artist_name album.artist.artistName
json.tracks album.tracks.map{|track| track }