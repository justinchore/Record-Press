class ChangeGenreKey < ActiveRecord::Migration[5.2]
  def change
    remove_column :genre_joins, :genre_name 
    add_column :genre_joins, :genre_id, :integer 
  end
end
