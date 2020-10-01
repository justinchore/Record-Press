class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false 
      t.string :password_digest, null: false
      t.string :session_token, null: false 
      t.string :location, null: false, default: ""
      t.boolean :is_artist, null: false, default: false
      t.string :artistName, default: ""
      t.integer :genre_id


      t.timestamps
    end
    add_index :users, :username, unique: true 
    add_index :users, :session_token, unique: true  
    add_index :users, :email, unique: true
  end
end
