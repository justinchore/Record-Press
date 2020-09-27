class RemoveGenreString3 < ActiveRecord::Migration[5.2]
  def change
     remove_column :tracks, :genre
    add_column :tracks, :genre_id, :integer  
  end
end
