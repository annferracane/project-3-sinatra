class Cereal < ActiveRecord::Base
    has_many :reviews
    has_many :users, through: :reviews


    def self.count
        Cereal.all.size
    end
end