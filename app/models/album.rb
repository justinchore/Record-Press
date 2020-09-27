class Album < ApplicationRecord
    # validates :artist_id, :downloadable, :title, presence: true
    
    # belongs_to :artist,
    #     primary_key: :id, 
    #     foreign_key: :artist_id,
    #     class_name: :User

    # has_many :tracks, 
    #     primary_key: :id, 
    #     foreign_key: :album_id, 
    #     class_name: :Album
    
    # has_one :genre_joins, :as => :genreable

    # has_one :genre,
    #     through: :genre_joins,
    #     source: :genre

end
