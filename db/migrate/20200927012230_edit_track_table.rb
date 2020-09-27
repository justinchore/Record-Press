class EditTrackTable < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :track_number, :integer, null:false 
  end
end
