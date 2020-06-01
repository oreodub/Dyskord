class CreateServerUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :server_users do |t|
      t.integer :server_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :server_users, [:user_id, :server_id], unique: true
  end
end
