class CreateAdmins < ActiveRecord::Migration[6.0]
  def change
    create_table :admins do |t|
      t.string :phone
      t.string :email
      t.string :password_digest
      t.string :name

      t.timestamps
    end
  end
end
