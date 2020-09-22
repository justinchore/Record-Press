class EditUserTable4 < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :location
    add_column :users, :location, :string, default: ''
  end
end
