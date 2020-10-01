class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
        t.integer :artist_id, null: false
        t.string :album_notes, default: ""
        t.string :credits, default: "" 
        t.string :title, null: false
        t.boolean :downloadable, default: true 
        t.integer :genre_id, null: false; 
        t.timestamps
    end
  end


end
