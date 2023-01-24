class Cereal < ActiveRecord::Base
    has_many :reviews
    has_many :users, through: :reviews


    def
end