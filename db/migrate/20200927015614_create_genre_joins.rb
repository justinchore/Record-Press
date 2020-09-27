class CreateGenreJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :genre_joins do |t|
      t.references :genreable, polymorphic: true, index: true
      t.integer :genre_id 
    end
  end
end
