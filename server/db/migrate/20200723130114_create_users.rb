class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.string :password_digest
      t.references :event
      t.string :avatar
      t.boolean :admin

      t.timestamps
    end
  end
end
