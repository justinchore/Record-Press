class Track < ApplicationRecord
    validates :artist_id, :downloadable, :title, :track_number, presence: true
    
    # belongs_to :artist,
    #     primary_key: :id, 
    #     foreign_key: :artist_id,
    #     class_name: :User

    
    # belongs_to :album, 
    #     primary_key: :id, 
    #     foreign_key: :album_id,
    #     class_name: :Album  

    # has_one :genre_joins, :as => :genreable

    # has_one :genre,
    #     through: :genre_joins,
    #     source: :genre

end
