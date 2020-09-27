class NullFalseGenreId < ActiveRecord::Migration[5.2]
  def change
     remove_column :albums, :genre_id  
    add_column :albums, :genre_id, :integer, null: false
  end
end
