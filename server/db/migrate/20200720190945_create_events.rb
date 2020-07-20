class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.resources :user
      t.string :title
      t.datetime :date
      t.string :location

      t.timestamps
    end
  end
end
