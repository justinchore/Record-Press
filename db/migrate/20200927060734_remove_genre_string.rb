class RemoveGenreString < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :genre  
    add_column :albums, :genre_id, :integer 
    remove_column :tracks, :genre
    add_column :tracks, :genre_id, :integer  
    remove_column :users, :genre 
    add_column :users, :genre_id, :integer
  end
end
