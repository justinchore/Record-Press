class EditGenreJoins2 < ActiveRecord::Migration[5.2]
  def change
    remove_columns :genre_joins, :genre_id 
    add_column :genre_joins, :genre_name, :string
  end
end
