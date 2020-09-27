class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
        t.integer :artist_id, null: false
        t.string :album_notes, default: ""
        t.string :credits, default: "" 
        t.string :title, null: false
        t.boolean :downloadable, default: true 
        t.string :genre, null: false; 
        t.integer :release_id
    end
    add_index :albums, :title 
  end


end
