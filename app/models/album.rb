class Album < ApplicationRecord
    validates :artist_id, :downloadable, :title, presence: true
    
    belongs_to :artist,
        primary_key: :id, 
        foreign_key: :artist_id,
        class_name: :User

    has_many :tracks, 
        primary_key: :id, 
        foreign_key: :album_id, 
        class_name: :Track
    
    belongs_to :genre, 
        primary_key: :id, 
        foreign_key: :genre_id,
        class_name: :Genre 

    has_one_attached :album_artwork

end
