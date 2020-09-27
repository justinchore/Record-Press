class EditGenreJoins < ActiveRecord::Migration[5.2]
  def change
    remove_column :genre_joins, :genereable_id
    remove_column :genre_joins, :generable_type
    add_reference :genre_joins, :genreable, index: true
  end
end
