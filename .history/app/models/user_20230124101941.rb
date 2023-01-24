class User < ActiveRecord::Base
    has_many :reviews
    has_many :cereals, through: :reviews
end