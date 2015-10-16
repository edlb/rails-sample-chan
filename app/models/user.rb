class User < ActiveRecord::Base
  has_many :messages, dependent: :destroy
  validates :name, presence: true, uniqueness: true
end
