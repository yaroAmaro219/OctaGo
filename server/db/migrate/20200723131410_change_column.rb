class ChangeColumn < ActiveRecord::Migration[6.0]
  def change
    change_column :users, :password_digest, :password
  end
end
