class ChangeTable < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :artistName, :default => "" 
  end
end
