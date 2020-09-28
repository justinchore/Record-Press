json.extract! user, :id, :username, :email, :location, :is_artist, :artistName
json.genre user.genre.genre_name
json.albums user.albums.map{|album| album }
json.tracks user.tracks.map{|track| track}



