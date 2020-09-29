class RemoveIndexFromAlbums < ActiveRecord::Migration[5.2]
  def change
    remove_index :albums, name: "index_albums_on_title"
  end
end
