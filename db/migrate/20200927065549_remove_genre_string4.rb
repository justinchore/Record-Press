class RemoveGenreString4 < ActiveRecord::Migration[5.2]
  def change
     remove_column :users, :genre 
    add_column :users, :genre_id, :integer
  end
end
