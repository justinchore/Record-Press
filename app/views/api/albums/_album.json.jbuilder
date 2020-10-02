json.extract! album, :id, :title, :genre_id, :album_notes, :credits, :downloadable, :artist_id, :created_at
json.picUrl url_for(album.album_artwork)  
json.genre album.genre.genre_name
json.artist_name album.artist.artistName
# json.tracks album.tracks.map do |track| 
#     track
# end

json.tracks album.tracks, partial: 'api/tracks/track', as: :track

# json.tracks do 
#     album.tracks.each do |track| 
#         json.partial! 'api/tracks/track', track: track
#     end
# end
# json.comments @post.comments, partial: 'comments/comment', as: :comment