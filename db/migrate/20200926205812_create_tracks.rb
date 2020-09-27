class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
        t.integer :artist_id, null: false
        t.integer :album_id
        t.string :track_notes
        t.string :title, null: false 
        t.string :lyrics, default: "" 
        t.string :credits, default: "" 
        t.boolean :downloadable, default: true
        t.string :genre, null: false
      t.timestamps
    end
  end
end
