class AddTicketsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :ticket, foreign_key: true
  end
end
