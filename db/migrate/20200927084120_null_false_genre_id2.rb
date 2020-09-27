class NullFalseGenreId2 < ActiveRecord::Migration[5.2]
  def change
     remove_column :users, :genre_id  
    add_column :users, :genre_id, :integer, null: false
  end
end
