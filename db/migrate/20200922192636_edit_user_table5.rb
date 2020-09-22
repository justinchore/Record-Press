class EditUserTable5 < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :genre, :string, default: ''
  end
end
