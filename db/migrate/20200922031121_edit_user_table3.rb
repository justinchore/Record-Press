class EditUserTable3 < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :is_artist
    add_column :users, :is_artist, :boolean, default: false 
  end
end
