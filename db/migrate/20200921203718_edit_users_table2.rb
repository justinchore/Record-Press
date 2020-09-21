class EditUsersTable2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :artistName
    add_column :users, :artistName, :string, default: ""
  end
end
