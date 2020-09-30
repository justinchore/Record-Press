json.extract! track, :id, :title, :artist_id, :genre_id, :downloadable, :track_notes, :credits, :lyrics, :track_number, :album_id, :created_at, :song_file
json.album_name track.album.title if track.album
json.trackAlbumPicUrl url_for(track.album.album_artwork) if track.album_id
json.picUrl url_for(track.track_artwork) if track.album_id === nil
json.trackUrl url_for(track.song_file)
json.genre track.genre.genre_name
json.artist_name track.artist.artistName