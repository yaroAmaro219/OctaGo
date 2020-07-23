class Ticket < ApplicationRecord
  has_many :user
  belongs_to :event
end
