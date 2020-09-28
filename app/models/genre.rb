class Genre < ApplicationRecord
    has_many :albums, 
        primary_key: :id, 
        foreign_key: :genre_id, 
        class_name: :Album

    has_many :users, 
        primary_key: :id, 
        foreign_key: :genre_id, 
        class_name: :User

    has_many :tracks, 
        primary_key: :id, 
        foreign_key: :genre_id, 
        class_name: :Track
end
