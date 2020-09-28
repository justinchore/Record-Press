class Track < ApplicationRecord
    validates :artist_id, :downloadable, :title, :track_number, presence: true
    
    belongs_to :artist,
        primary_key: :id, 
        foreign_key: :artist_id,
        class_name: :User

    
    belongs_to :album, 
        primary_key: :id, 
        foreign_key: :album_id,
        class_name: :Album, 
        optional: true

    belongs_to :genre, 
        primary_key: :id, 
        foreign_key: :genre_id, 
        class_name: :Genre 

    
        has_one_attached :track_artwork
    has_one_attached :song_file

end
