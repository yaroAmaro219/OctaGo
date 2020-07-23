class AddCheckInToEvent < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :checkin, :string
  end
end
