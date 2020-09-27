class EditAlbumsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :release_id
  end
end
