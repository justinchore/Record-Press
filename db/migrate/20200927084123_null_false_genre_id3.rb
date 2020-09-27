class NullFalseGenreId3 < ActiveRecord::Migration[5.2]
  def change
     remove_column :tracks, :genre_id  
    add_column :tracks, :genre_id, :integer, null: false
  end
end
