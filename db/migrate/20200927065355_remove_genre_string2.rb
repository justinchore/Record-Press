class RemoveGenreString2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :genre  
    add_column :albums, :genre_id, :integer 
  end
end
